const greeting = require('../src/greeting');



describe("testing greeting function", function(){



    it("test return value of greeting",function(){

        expect(greeting()).toEqual("good morning");

    });

});