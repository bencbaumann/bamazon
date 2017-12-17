'use strict';
const getProducts = require('./lib/getProducts');
const listProducts = require('./lib/listProducts');
const attemptPurchase = require('./lib/attemptPurchase');
const end = require('./lib/end');

const start = ()=>{
getProducts()
    .then(listProducts)
    .then(attemptPurchase)
    .then(end)
    .then(console.log)
    .catch(err=>{
        console.log(err);
        end();
    });
}

start();