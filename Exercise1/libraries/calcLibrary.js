const logLibrary = require('./logLibrary')
const logger = new logLibrary()

class Calculator {
  constructor(){
    this.id = Math.ceil(Math.random()*1000000)
  }

  calcAdd(number1, number2) {
    let result = number1 + number2
    logger.log(this.id, result)
    return result
  }

  calcSub(number1, number2) {
    let result = number1 - number2
    logger.log(this.id, result)
    return result
   }

  calcMul(number1, number2) {
    let result = number1 * number2
    logger.log(this.id, result)
    return result
  }

  calcDiv(number1, number2) {
    let result = number1 / number2
    logger.log(this.id, result)
    return result
  }

}

module.exports = Calculator