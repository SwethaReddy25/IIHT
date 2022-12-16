const upperCase = require('../src/uppercas')



describe("testing UpperCase of string",function(){



    it("test return upperCase",function(){



        expect(upperCase("swetha reddy")).toEqual("SWETHA REDDY");

    });

});