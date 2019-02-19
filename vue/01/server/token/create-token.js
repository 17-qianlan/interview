const jwt = require('jsonwebtoken');
module.exports = (userId) => {
    return jwt.sign({
        userId
    }, 'sinner77', {
        expiresIn: '1h'
    });;
};
