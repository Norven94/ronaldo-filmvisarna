const encrypt = require("../Encrypt.js");
const User = require("../models/User");

const whoami = (req, res) => {
    res.json(req.session.user || null);
};

module.exports = {
    whoami,
}