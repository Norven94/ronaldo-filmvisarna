const encrypt = require("../Encrypt.js");
const User = require("../models/Users");

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
    let userExists = await User.exists({ email: req.body.email });
    if (userExists) return res.status(400).json({ error: "User with that email already exists." });

    //Encryption line
    req.body.password = encrypt(req.body.password);

    //Edit user
    let updatedUser = await User.findByIdAndUpdate(req.body.userId, req.body, {new: true}).exec();
    return res.status(200).json(updatedUser);
}

//TEST METHOD - REMOVE FOR PRODUCTION
const getAllUsers = (req, res) => {
    User.find().exec().then(response => res.status(200).json(response))
}

module.exports = {
    whoami,
    login,
    logout,
    registerUser,
    editUser,
    getAllUsers,
}