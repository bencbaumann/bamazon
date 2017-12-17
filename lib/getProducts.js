const query = require('./query');
module.exports = () => {
    return new Promise((resolve, reject) => {
        query(` SELECT * FROM bamazon.products;`)
        .then(resolve)
        .catch(reject);
    });
}