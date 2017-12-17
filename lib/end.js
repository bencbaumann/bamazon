const connection = require('./db');
module.exports = data => {
    connection.end();
    return data;
};