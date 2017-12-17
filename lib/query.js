const connection = require('./db');

module.exports = query => {
    // Initiate MySQL Connection.
    if(!connection.threadId){
        connection.connect(function(err) {
            if (err) {
                console.error("error connecting: " + err.stack);
                return;
            }
            // console.log("connected as id " + connection.threadId);
            });
    }
    return new Promise((resolve, reject) => {
        connection.query(query, function (error, results, fields) {
            if (error) console.log(error);
            resolve(results);
        }); 
    });
}