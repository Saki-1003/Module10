const express = require('express')
const router = express.Router()
const calcController = require('../controllers/calcController')

router.get('/Add', (req, res) => {
  calcController.addNumbers(req, res)
})

router.get('/Subtract', (req, res) => {
  calcController.subtractNumbers(req, res)  
})

router.get('/Multiply', (req, res) => {
  calcController.multiplyNumbers(req, res)  
})

router.get('/Divide', (req, res) => {
  calcController.divideNumbers(req, res)
})

module.exports = router