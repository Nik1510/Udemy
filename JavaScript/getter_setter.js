/* Getters and setters */

 
class Employee{
    #salary
    constructor(name , salary){
        if(salary<0){
            console.error("salary must be postive");
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary(){
        return `You are not allowed to see salary`
    }
    set salary(value){
        if(value<0){
            console.error("Invalid Salary");
            
        }else{
            this._salary=value;
        }
    }
}

let emp = new Employee("Alice",-600000)
console.log(emp._salary);
emp.salary=-6000000;