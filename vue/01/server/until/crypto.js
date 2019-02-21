const crypto = require('crypto');

module.exports = (password, KEY = 'lightblue') => {
    const hmac = crypto.createHmac('sha256', KEY);
    hmac.update(password);
    return hmac.digest('hex');
};
