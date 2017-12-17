const inquirer = require('inquirer');
module.exports = data => {
    const choices = data.map(item => `${item.item_id.toString()} | ${item.product_name} | ${item.department_name} | $${item.price.toString()} | Qty Left: ${item.stock_quantity}`);
    return new Promise((resolve, reject) => {
        inquirer
        .prompt([
           { 
            type: 'list',
            name: 'item_id',
            message: 'What would you like to buy?',
            choices: choices
        },
        {
            type: 'input',
            name: 'qty',
            message: "How many would you like to purchase?"
        }
         ])
        .then(answers =>{
            const newData = {};
            newData.item_id = parseInt(answers.item_id.split('-')[0].trim());
            newData.qty = parseInt(answers.qty);
            return newData;
        })
        .then(resolve)
        .catch(reject);
    });
}