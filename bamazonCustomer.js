var mysql = require("mysql");

var inquirer = require ("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "4JayS1977",
  database: "bamazon_db"
});

//initialize connection
connection.connect(function(err){
  if (err) throw err;
  console.log("Connection Successful! " + connection.threadId + "\n");
});

//will prompt the available items
connection.query('SELECT * FROM products ', function (error, results, fields) {
  if (error) throw error;
  console.log('Available Items: ', results);
    startInquirer();
});

//will ask the first question 
function startInquirer(){
inquirer.prompt([
{
    type: "input",
    message: "Please type in the ID of the product you wish to buy?",
    name: "item_id"
}
,{
    type: "input",
    message: "How many do you want to buy?",
    name: "quantity"

}
//will take in what the user typed for the id and look for it in the 10 case's/items listed below.  then it will ask the second question which will return to the user the item that they chose and its detail.  Function for Answers
]).then (function(answers){
  switch (answers.item_id){
    case "1" :
      connection.query('SELECT * FROM products WHERE item_id = 1', function (error, results, fields) {
        console.log(results);
});
   break;
  
    case "2" :
     connection.query('SELECT * FROM products WHERE item_id = 2', function (error, results, fields) {
       console.log(results);
});
   break;

    case "3" :
    connection.query('SELECT * FROM products WHERE item_id = 3', function (error, results, fields) {
       console.log(results);
});
   break;

    case "4" :
    connection.query('SELECT * FROM products WHERE item_id = 4', function (error, results, fields) {
       console.log(results);
});
   break;

    case "5" :
    connection.query('SELECT * FROM products WHERE item_id = 5', function (error, results, fields) {
       console.log(results);
});
   break;

    case "6" :
    connection.query('SELECT * FROM products WHERE item_id = 6', function (error, results, fields) {
       console.log(results);
});
   break;

    case "7" :
    connection.query('SELECT * FROM products WHERE item_id = 7', function (error, results, fields) {
       console.log(results);
});
   break;

    case "8" :
    connection.query('SELECT * FROM products WHERE item_id = 8', function (error, results, fields) {
       console.log(results);
});
   break;

    case "9" :
    connection.query('SELECT * FROM products WHERE item_id = 9', function (error, results, fields) {
       console.log(results);
});
   break;

    case "10" :
    connection.query('SELECT * FROM products WHERE item_id = 10', function (error, results, fields) {
       console.log(results);
});
   break;
 }   

})//.then (function(answers)

}//end of function

//*****hi guys can someone please tell me what i am doing wrong here **********//


function reduceQuantity (){
  inquirer.prompt({
      type: "input",
      name: "stock_qty"

          //this is not working for me
      // validate: function(value){
      //   if(isNan(value)==false){
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
      
  }).then(function(answer){
    switch (answers.stock_qty){
    case "1" :
    if(name-answer.stock_qty > 0){
      connection.query("UPDATE products SET stockquantity='"+(stockquantity-answer.stock_qty)+"' WHERE productname='"+product+"'", function (err,res2){
         console.log("You have purchased from BAMAZON!");
         reduceQuantity();

         
});
      break;
  
    

                    // if((res[id].stockquantity-answer.quantity)>0){
                    //   connection.query("UPDATE products SET stockquantity='"+(res[id].stockquantity-answer.stock_qty)+"'WHERE productname='"+product+"'", function(err,res2){
                    //     console.log("Product has been purchased!");
                    //     reduceQuantity();
                    //   })

                    // } else {
                    //   console.log("Not a valid selection!");
                    //   reduceQuantity();
                    // }
  } ///if statement for reduce stock quantity
} //closing switch
})//closing .then;
}






