const Calculator=require('../src/calculator');

beforeEach(function(){



    let calculator=new Calculator();

});




describe("Calculator test suite",function(){



    it("add function test",function(){

 

        expect(calculator.add(3,4)).toEqual(7);




    });




});



describe("Calculator test suite",function(){



    it("substract function test",function(){

 

        expect(calculator.substract(3,4)).toEqual(-1);




    });




});