
console.log("====================================================");

console.log("Jayanta Halder in console");

var firstName="Jayanta";
var lastName="Halder";
console.log(firstName+" "+lastName);
alert("First Name : "+firstName+" "+"Last Name :"+lastName);

var FullName = prompt('What is the FullName !!!!');
console.log(firstName+"  "+lastName);



function emp(id,name,salary){
this.id=id;
this.name=name;
this.salary=salary;
}
e=new emp(103,"Vimal Jaiswal",30000);

document.write(e.id+" "+e.name+" "+e.salary);



class Employee {  
  constructor() {  
    this.id=101;  
    this.name = "Martin Roy";  
  }   
}  
var emp = new Employee();  
document.writeln(emp.id+" "+emp.name); 