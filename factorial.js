/*jshint esversion: 6*/

module.exports = () => {
  function factorial (num){
  if(num === 1){
    return num;
  }
  return num * factorial(num - 1);
  }
  return{
    factorial
  };
};

