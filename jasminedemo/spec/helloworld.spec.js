const helloworld = require('../src/hello')



describe("testing hello world funciton",function(){



    it("test return value of hello world",function(){



        expect(helloworld()).toEqual('Hello World!');

    });
  
   



});