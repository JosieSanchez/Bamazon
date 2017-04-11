var mysql = require("mysql");
var inquirer = require ("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "4JayS1977",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

var inquirer = require ("inquirer");
var items = [];

inquirer.prompt([
{
    type: "input",
    message: "Do you want to POST an item or BID on an item?",
    name: "answer"

//function for answers
}]).then (function(answers){
    if (answers.answer === "post"){
        post();
    } else {
        bid();
    }
})

function post(){
    console.log ("post is working");