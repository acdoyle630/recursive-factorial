/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const factorial = require('./factorial.js');
const factorialModule = factorial();

describe('factorial',() =>{
  it('should be a function',() =>{
    expect(factorialModule).to.be.a('object');
  });
  it('should return factorial of number',()=>{
    expect(factorialModule.factorial(3)).to.be.equal(6);
    expect(factorialModule.factorial(5)).to.be.equal(120);
  });
});
