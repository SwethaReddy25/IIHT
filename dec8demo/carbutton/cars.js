class Car{
  
    constructor(id,model,dealer,price){

        this.id=id;
        this.model=model;
        this.dealer=dealer;
        this.price=price;
    }
    get id(){
        return this._id;
    }
    set id(val){
     this._id =val;

    }
   
    get brand(){
      return this._brand;
    }
    set brand(val){

     this._brand =val;
    }
    disp(){
        console.log(`${this.id} ${this.price}`);
    }

}

class ElectricVehicle extends Car{

   constructor(id, brand,dealer,price,batteryLife){
    console.log('in electric vehicle constructor');
    super(id,brand,dealer,price);
    this.batteryLife =batteryLife;

   }

   disp(){
    console.log('in disp method');
    super.disp();
    console.log(this.batteryLife);
   }
}

// let tataNexon = new ElectricVehicle(111,'nexon','tata',1500001,400);
// let hondaCity = new ElectricVehicle(122,'honda','tata',1500002,400);
// let nano = new ElectricVehicle(133,'nano','tata',1500003,400);
// let safari = new ElectricVehicle(144,'safari','tata',1500004,400);
// let fortuner = new ElectricVehicle(155,'fortuner','tata',1500005,400);

// tataNexon.disp();
// arr.push(tataNexon);
// arr.push(hondaCity);

// console.log(arr);
// console.log("---------------------------------------------------");
// console.log(arr.pop());
// console.log("---------------------------------------------------");
// arr.unshift(nano);
// arr.unshift(safari);
// console.log(arr);
// console.log("---------------------------------------------------");
// console.log(arr.shift());
// console.log("---------------------------------------------------");

// arr.splice(1,0,fortuner);
// console.log(arr);
// console.log("---------------------------------------------------");

// console.log(arr.splice(1,1));

let arr = new Array();
function saveCarForm(e) {
    console.log("function called")
    let id = document.getElementById('ID').value;
    let model = document.getElementById('MODEL').value;
    let deal = document.getElementById('DEALER').value;
    let price = document.getElementById('PRICE').value;
    let newCar = new Car(id, model,dealer, price);
    let cars;
    if(localStorage.getItem('cars')===null){
        cars = [];
    } else {
        cars = JSON.parse(localStorage.getItem("cars"));
    }
    cars.push(newCar);
    localStorage.setItem("cars", JSON.stringify(cars));
    console.log("Added car to local storage");
}

let btn = document.getElementById('btn');
btn.addEventListener('click', saveCarForm);
let carList = document.getElementById('carList');

document.addEventListener('DOMContentLoaded', getCars);

let ul =document.getElementById('carList');

function getCars() {
    let cars;
    if(localStorage.getItem('cars')===null){
        cars = [];
    } else {
        cars = JSON.parse(localStorage.getItem("cars"));
    }
    cars.forEach(ele => {
        let li = document.createElement('li');
        console.log(ele);
        li.textContent = JSON.stringify(ele);
        ul.appendChild(li);
    });
}








