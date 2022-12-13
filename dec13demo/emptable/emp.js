class Emp{

    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }


    setId(id){
        if(id===''){
            throw 'Id cannot be empty';
        }
        this.id=id;
    }
    setName(name){
        this.name=name;

    }
    
    setSalary(salary){
        this.salary=salary;
    }
}

let emp1 = new Emp();
emp1.setId(1);
emp1.setName('swetha');
emp1.setSalary(10000);
console.log(emp1);


let emp2 = new Emp();
emp2.setId(2);
emp2.setName('vansh');
emp2.setSalary(500000);
console.log(emp2);


let emp3 = new Emp();
emp3.setId(3);
emp3.setName('vamsi');
emp3.setSalary(600000);
console.log(emp3);
 
let emp4 = new Emp();
emp4.setId(4);
emp4.setName('shalini');
emp4.setSalary(60000);
console.log(emp4);
 
let emp5 = new Emp();
emp5.setId(5);
emp5.setName('shamili');
emp5.setSalary(20000);
console.log(emp5);



let Employees =[emp1,emp2,emp3,emp4,emp5];


let sortBySalary = Employees.sort(
    (a,b)=>(a.salary > b.salary) ?1 :(a.salary<b.salary)?-1:0); // sorting by salary
    
console.log('sort by salary',sortBySalary);


let sortById = Employees.sort(
    (a,b)=>(a.id > b.id) ?1 :(a.id<b.id)?-1:0); // sorting by id
    
console.log('sort by Id',sortById);

let sortByNames = Employees.sort(
    (a,b)=>(a.name > b.name) ?1 :(a.name<b.name)?-1:0);// sorting by names
    
console.log('sort by name',sortByNames);