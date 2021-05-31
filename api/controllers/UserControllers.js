const encrypt = require("../Encrypt.js");
const User = require("../models/Users");
const Booking = require("../models/Booking");
const Show = require("../models/Show");

const validatePassword = (password) => {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/.test(password)) return true;
    return false;
}

const whoami = (req, res) => {
    res.json(req.session.user || null);
};

const login = async (req, res) => {
    let userExists = await User.exists({ email: req.body.email });
    if (userExists) {
        let user = await User.findOne({ email: req.body.email }).exec()

        if (user.password === encrypt(req.body.password)) {
            req.session.user = user;
            req.session.user.password = undefined;
            user.password = undefined;
            return res.json({ message: "Login successful", currentUser: user })
        }
    }

    return res.status(401).json({ error: "Bad credentials" })
}

const logout = (req, res) => {
    if (req.session.user) {
        delete req.session.user;
        return res.json({ message: "Logout successful" })
    }

    return res.json({ error: "Already logged out" })
}

const registerUser = async (req, res) => {
    //Checking if password is ok
    if (!validatePassword(req.body.password)) return res.status(400).json({ failed: "Password not valid" })

    //Checking if user exists
    let userExists = await User.exists({ email: req.body.email });
    if (userExists) return res.status(400).json({ error: "User with that email already exists." });

    //Encryption line
    req.body.password = encrypt(req.body.password);

    //Creating user
    let newUser = await User.create(req.body);
    newUser.password = undefined;
    return res.status(200).json({ message: "New user created!", user: newUser });
}

const editUser = async (req, res) => {
    //Checking if email exists
    let userWithEmail = await User.findOne({ email: req.body.email });

    //User with your email exists but your id don't match? ERROR!
    if (userWithEmail !== null && userWithEmail._id != req.body.userId) return res.status(400).json({ error: "User with that email already exists." });

    //Encryption line
    req.body.password = encrypt(req.body.password);

    //Edit user
    let updatedUser = await User.findByIdAndUpdate(req.body.userId, req.body, { new: true }).exec();
    return res.status(200).json(updatedUser);
}

const addBooking = async (req, res) => {
    let newBooking = await Booking.create(req.body);
    let user;
    User.findById(req.session.user._id).exec((err, result) => {
        if (err) {
            res.status(400).json({ error: "Something went wrong" });
            return;
        }
        if (!result) {
            res.status(404).json({ error: `User with id ${req.session.user._id} does not exist` })
            return;
        }
        user = result;  
        user.bookings.push(newBooking._id);
        user.save();  
        res.json(user);         
    });
};

const getUserBookings = async (req, res) => {
    await User.findById(req.params.userId).populate({path: "bookings", populate: {path: "showId", populate: {path: "movieId"}}}).exec((err, result) => {
        if (err) {
            res.status(400).json({error: "Something went wrong"});
            return;
        }
        if(!result) {
            res.status(404).json({error: `User with id ${req.params.userId} does not exist`})
            return;
        }
        console.log(result)
        res.json(result);         
    }); 
}

const deleteBookingById = async (req, res) => {
    User.findById(req.params.userId).exec(async (err, result) => {
        if (err) {
            res.status(400).json({ error: "Something went wrong" });
            return;
        }
      
        if (!result) {
        res
            .status(404)
            .json({ error: `User with id ${req.params.userId} does not exist` });
        return;
        }

        //Check if booking exists
        let exists = await Booking.exists({ _id: req.params.bookingId });

        if (exists) {
            await Booking.deleteOne({ _id: req.params.bookingId }).exec();
            user = result;
            let index = user.bookings.indexOf(req.params.bookingId)
            user.bookings.splice(index, 1)
            await user.save();
            res.json({
            message: `Booking with id ${req.params.bookingId} has been deleted and the booking was removed from the user with id: ${req.params.userId}`,
        });
        return;
        } else {
        res
            .status(404)
            .json({ error: `Booking with id ${req.params.bookingId} does not exist.` });
        return;
        }        
    })
}

module.exports = {
    whoami,
    login,
    logout,
    registerUser,
    editUser,
    addBooking,
    getUserBookings,
    deleteBookingById
}