//create interface Colorable -- color -- abstract
//2 objects of Colorable
//so that the previous objects are not broken  and still we want to print those colorable objects
//create a new interface DigitalPrint which extends Colorable,Printable
//create two objects and call methods
interface Colorable{
    color1:string;
    color2:string;  
    color3:string;

}
interface Printable{
    print:()=>void;
}

interface DigitalPrint extends Colorable , Printable{

}
const newcolor : DigitalPrint={
    color1:"blue",
    color2:"pink",
    color3:"orange",
    print : function ():void{
        console.log('Colors');
        console.log(`${this.color1} ${this.color2} ${this.color3}`);

    }
}
newcolor.print();