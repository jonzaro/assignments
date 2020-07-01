let employees = []

function employee(name, title, salary, status){
    this.name = name;
    this.jobTitle = title;
    this.salary = salary;
    this.status = status;
}

const employee1 = new employee("Jeff", "Instructor", 75000, "Full Time")
const employee2 = new employee("Daniel", "Teachers Assistant", 50000, "Part Time")    
const employee3 = new employee("Ashley", "Accountant", 120000, "Full Time")


function printEmployeeForm(){
    let employees = [employee1, employee2, employee3]
    console.log(employees)
}

printEmployeeForm()