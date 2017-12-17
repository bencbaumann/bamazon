const query = require('./query');
module.exports = data => {
    return new Promise((resolve, reject) => {
        query(`SELECT * FROM bamazon.products WHERE item_id = ${data.item_id}`)
        .then(res => {
            if (res[0].stock_quantity >= data.qty){
                query(`UPDATE bamazon.products SET stock_quantity = ${res[0].stock_quantity - data.qty} WHERE item_id = ${data.item_id}`)
                .then(()=>{
                    const receipt = `
Thank You for your Purchase
Product: ${res[0].product_name}
Qty: ${data.qty} @ $${res[0].price}
*******************************
Total: $${data.qty * res[0].price}
                    `;
                    return receipt;
                })
                .then(resolve)
                .catch(reject)
            }
            else{
                reject("Insufficient quantity!");
            }
        })
    });
}