var faker = require('faker');

function fake(){
    for(var i=0;i<10;i++){
    var products = faker.commerce.productName();
    var price = faker.commerce.price();
    console.log(products+ " = "+price);
}
}
fake();