var mysql = require("mysql");

var inquirer = require ("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: " ", //enter password
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
function startInquirer() {
inquirer.prompt([
{
    type: "input",
    message: "Please type in the ID of the product you wish to buy?",
    name: "item_id"
}
,{
    type: "input",
    message: "How many do you want to buy?",
    name: "purchasing_qty"

}
//will take in what the user typed for the id and look for it in the 10 case's/items listed below.  then it will ask the second question which will return to the user the item that they chose and its detail.  Function for Answers
]).then (function(answers){
  switch (answers.item_id){
    case "1" :
     //local var to this function but it has a bigger scope
     //var reduceQty;

      connection.query('SELECT * FROM products WHERE item_id = 1', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(results[0].stock_qty);
        console.log(reduceQty);

      //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    
    });

    });
      break;
    



    case "2" :
     //local var to this function but it has a bigger scope
     //var reduceQty;

      connection.query('SELECT * FROM products WHERE item_id = 2', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(results[0].stock_qty);
        console.log(reduceQty);

       //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    });
});
   break;

    case "3" :
    connection.query('SELECT * FROM products WHERE item_id = 3', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(results[0].stock_qty);
        console.log(reduceQty);

       //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    });
});
   break; //jumps out of this case 

    case "4" :
    connection.query('SELECT * FROM products WHERE item_id = 4', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(results[0].stock_qty);
        console.log(reduceQty);

       //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    });
});
   break;

    case "5" :
  connection.query('SELECT * FROM products WHERE item_id = 5', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(results[0].stock_qty);
        console.log(reduceQty);

       //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    });
});    

   break;

    case "6" :
    connection.query('SELECT * FROM products WHERE item_id = 6', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(results[0].stock_qty);
        console.log(reduceQty);

       //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    });
});
   break;

    case "7" :
    connection.query('SELECT * FROM products WHERE item_id = 7', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(results[0].stock_qty);
        console.log(reduceQty);

       //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    });
});
   break;

    case "8" :
    connection.query('SELECT * FROM products WHERE item_id = 8', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(results[0].stock_qty);
        console.log(reduceQty);

       //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    });
});
   break;

    case "9" :
    connection.query('SELECT * FROM products WHERE item_id = 9', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(results[0].stock_qty);
        console.log(reduceQty);

       //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    });
});
   break;

    case "10" :
    connection.query('SELECT * FROM products WHERE item_id = 10', function (error, results, fields) {
      var reduceQty = parseInt(results[0].stock_qty)-parseInt(answers.purchasing_qty);
        console.log(" Current Stock" + results[0].stock_qty);
        console.log(reduceQty + " Available Stock after purchase");
        var totalCost = parseInt(answers.purchasing_qty) * parseInt(results[0].price);
        console.log(totalCost + " Amount you owe");

       //part in " is query phase"  outside of quotes is variables
    connection.query("UPDATE products SET stock_qty="+reduceQty +" WHERE item_id="+ answers.item_id,function (err, res){
      console.log(res);
    });
});
    
} //switch statement closing
});  //.then closing function

} //start inquirer closing bracket