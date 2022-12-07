class Department{
    constructor(id,manager){
        this.id=id;
        this.manager=manager;
    }
    get Id(){
        return this.id;


    }
    get Manager(){
        return this.manager;
    }
    set Id(id){
        this.id=id;
    }
    set Manager(manager){
        this.manager=manager;

    }

}
class Employee{
    constructor(id,name,doj,department,salary){
        this.id=id;
        this.name=name;
        this.doj=doj;
        this.department=department;
        this.salary=salary;
    }
    get ID(){
        return this.id;
    
    }
    set ID(id){
        this.id=id;
    }
    getYOE=()=>{
        return new Date(Date.now()).getFullYear() - this.doj.getFullYear();

    }
}
let ne= new Employee(1,"Swetha reddy",new Date(2019-08-25),new Department(100, "Shiva kumar"),500000);
console.log(ne);
console.log(" Year Of Experience:${nd.getYOE()}");
let ne2=new Employee();
ne2.ID=101;
ne2.Name="Swetha reddy";
ne2.DOJ=2020-07-16;
ne2.Department="JFS";
ne2.Salary=10000;
console.log(ne2);
















