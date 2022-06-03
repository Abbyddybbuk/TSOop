abstract class Department {
    // id: string;
    // name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {//this is a shortcut for declaring class member attributes and to initialize them in parallel

    }

    static createEmployee(name: string) {
        return {name: name};
    }
 
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    abstract readInfo(this: Department): void;
    
    addEmployee(employee: string) {
        // this.id = '77'; this is not possible because id is a readonly variable
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    readInfo(this: Department): void {
        console.log(this.name);
    }

    public admins: string[];
    private lastReport: string;
    constructor(id: string, admins: string[], lastReport: string) {
        super(id, 'IT');
        this.admins = admins;
        this.lastReport = lastReport;
    }
    

    get readReport() {
        if (!this.lastReport) {
          throw new Error('No New Report set');
        } 
        return this.lastReport;
    }

    set insertReport(report: string) {
        if (!this.lastReport) {
          throw new Error('No New Report set');
        } 
        this.lastReport = report;
    }    

    addReport(report: string) {
        this.lastReport = report;
    }

    
    addEmployee(employee: string) {
        if (employee === 'Sachin')  {
            return;
        }
        this.employees.push(employee);
    }    


}

const it = new ITDepartment('11', ['Abhijeet', 'Amit'], "Development Completed");
// console.log(accounting);
it.describe();

it.addEmployee('Abhijeet');
it.addEmployee('Ankur');
it.addEmployee('Amit');
it.addEmployee('Sachin');

console.log(it.readReport);
it.insertReport = 'Even testing completed';
console.log(it.readReport);

it.printEmployeeInformation();
console.log(it);

console.log(ITDepartment.createEmployee('Mohan'));

it.readInfo();

class HRDepartment extends Department {
    private static instance: HRDepartment;

    readInfo(this: Department): void {
        console.log(this.name);
    }

    private constructor(id: string) {
        super(id, 'HR');
    }

    static getInstance() {
        if (HRDepartment.instance) {
           return HRDepartment.instance;
        }

        return new HRDepartment('01');
    }
    
}

const hrDept = HRDepartment.getInstance();
console.log(hrDept);

const hrDept2 = HRDepartment.getInstance();
console.log(hrDept2);

// const accountingCopy = { name: 'Development', describe: accounting.describe }
// accountingCopy.describe(); Without name property it will throw an error because now describe expects an object of type Department to be passed
// accountingCopy.describe();


