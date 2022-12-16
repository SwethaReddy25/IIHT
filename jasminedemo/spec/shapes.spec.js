const {Shape, CreateShape, ColorShape} = require('../src/shapes');
describe('Color shape testing',function(){
    it("spying",function(){
        let shape = new Shape(15 , 30);
        //console.log(shape);
        let createShape = new CreateShape(shape);
        //console.log(createShape);
        let colorShape = new ColorShape(createShape);
        //console.log(colorShape);
        spyOn(createShape,"colorCreateShape").and.returnValue("15 30");
        expect(colorShape.color()).toMatch("15 30");
    })
})