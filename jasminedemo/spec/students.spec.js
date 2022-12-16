const{Student,StudentDAO,StudentService}=require('../src/student');
let students;
let service;
let dao;
beforeEach(function(){
    console.log("creating student array");
    let s1= new Student(1,"swetha","swetha@gmail.com");
    let s2= new Student(2,"sowmith","sowmith@gmail.com");
    let s3= new Student(3,"shanili","shanili@gmail.com");
    let s4= new Student(3,"shamili","shamili@gmail.com");
    let s5= new Student(5,"shashank","shashank@gmail.com");
    students=[s1,s2,s3,s4,s5];
    dao=new StudentDAO();
    service=new StudentService(dao);
})
describe("testing",function(){
    it("Shoukd be able to delete the student with given id",function(){
     spyOn(service,"delete").and.callFake(function(id){
        for(let i=0;i<students.length;i++){
            if(students[i].id==id){
                students.splice(i,1);
            }
        }
        return students.length;
     });
     expect(service.delete(2)).toEqual(students.length);
    
    });
    it("find all students",function(){
        spyOn(service,'findAll').and.returnValue(students);
        expect(service.findAll()).toEqual(students);
    });
})