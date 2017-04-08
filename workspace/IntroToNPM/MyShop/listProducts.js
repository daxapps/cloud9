var faker = require("faker");


for(var i = 1; i < 11; i++){
    var randomProduct = faker.commerce.productName();
    var randomPrice = faker.commerce.price();
    console.log(randomProduct + " - $" + randomPrice);
}



