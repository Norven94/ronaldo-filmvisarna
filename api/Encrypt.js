const crypto = require("crypto");

const encrypt = (password) => {
    return (
        crypto
            .createHmac("sha256", "RonaldoEncrypt")
            .update(password)
            .digest("hex")
    );
}

module.exports = encrypt