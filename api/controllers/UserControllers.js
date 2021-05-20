const encrypt = require("../Encrypt.js");
const User = require("../models/Users");

const whoami = (req, res) => {
    res.json(req.session.user || null);
};

const login = (req, res) => {
    res.json("login response")
}

const logout = (req, res) => {
    if (req.session.user) {
        delete req.session.user;
        return res.json({ message: "Logout successful" })
    }

    return res.json({ error: "Already logged out" })
}

const registerUser = async (req, res) => {
    console.log("Log check")
    //Checking if user exists
    let userExists = await User.exists({ email: req.body.email });
    if (userExists) return res.status(400).json({ error: "User with that email already exists." });
    console.log("Log check 2")

    //Encryption line
    req.body.password = encrypt(req.body.password);

    //Creating user
    let newUser = await User.create(req.body);
    newUser.password = undefined;
    return res.json("New user created: ", newUser);
}

module.exports = {
    whoami,
    login,
    logout,
    registerUser,
}