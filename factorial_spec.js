/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const factorial = require('factorial.js');

describe('factorial',() =>{
  it('should be a function',() =>{
    expect(factorial).to.be.a('function');
  });
});
