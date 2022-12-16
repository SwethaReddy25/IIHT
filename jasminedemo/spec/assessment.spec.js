const asse=require("../src/assessment");
const alternateCap=asse.alternateCap;

const isPrime=asse.isPrime;

const isEven=asse.isEven;


it("function alternateCap() should return alternate uppercase",function(){

    expect(alternateCap("yes")).toEqual("yEs");
   
   });
   
   it("function isEven(num) should check if number is even",function(){

    expect(isEven(6)).toBeTruthy();


   });
   it("function isPrime(num) should check if number is even",function(){

    expect(isPrime(6)).toBeFalsy();


   });

   it("function isPrime(num) should check if number is even",function(){

    expect(isPrime(13)).toBeTruthy();


   });