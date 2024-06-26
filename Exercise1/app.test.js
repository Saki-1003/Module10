const request = require('supertest')
const app = require('./app')

describe('Calculator Route', ()=>{
  let num1 = Math.floor(Math.random()*1000000);
  let num2 = Math.floor(Math.random()*1000000);

  test('GET /Calculator/Add => sum of numbers', () => {
    return request(app)

    .get(`/Calculator/Add?num1=${num1}&num2=${num2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    
    .then((response) => {
      expect(response.body).toEqual({
        result: (num1 + num2)
      });
    });
  });
  test('GET /Calculator/Subtract => subtraction of numbers', () => {
    return request(app)

    .get(`/Calculator/Subtract?num1=${num1}&num2=${num2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    
    .then((response) => {
      expect(response.body).toEqual({
        result: (num1 - num2)
      });
    });
  });
  test('GET /Calculator/Multiply => multiplication of numbers', () => {
    return request(app)

    .get(`/Calculator/Multiply?num1=${num1}&num2=${num2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    
    .then((response) => {
      expect(response.body).toEqual({
        result: (num1 * num2)
      });
    });
  });
  test('GET /Calculator/Divide => division of numbers', () => {
    return request(app)

    .get(`/Calculator/Divide?num1=${num1}&num2=${num2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    
    .then((response) => {
      expect(response.body).toEqual({
        result: (num1 / num2)
      });
    });
  });
})

