const Calculator = require('../libraries/calcLibrary')

function addNumbers(req, res) {
  let newCalc = new Calculator()
  let number1 = parseInt(req.query.num1)
  let number2 = parseInt(req.query.num2)
  let sum = newCalc.calcAdd(number1, number2)
  res.json({result: sum})   
}

function subtractNumbers(req, res) {
  let newCalc = new Calculator()
  let number1 = parseInt(req.query.num1)
  let number2 = parseInt(req.query.num2)
  let sub =newCalc.calcSub(number1, number2)
  res.json({result: sub}) 
}

function multiplyNumbers(req, res) {
  let newCalc = new Calculator()
  let number1 = parseInt(req.query.num1)
  let number2 = parseInt(req.query.num2)
  let mul = newCalc.calcMul(number1, number2)
  res.json({result: mul})  
}

function divideNumbers(req, res) {
  let newCalc = new Calculator()
  let number1 = parseInt(req.query.num1)
  let number2 = parseInt(req.query.num2)
  let div = newCalc.calcDiv(number1, number2)
  res.json({result: div})  
}

module.exports = {addNumbers, subtractNumbers, multiplyNumbers, divideNumbers}