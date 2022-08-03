class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department): string {
    const str = `Department (${this.id}):  ${this.name}`;
    // console.log(str);

    return str;
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length, "employees length");
    console.log(this.employees, "employees");
  }
}

class ITDepartment extends Department {
  admins: string[] = [];
  constructor(id: string, admins: Array<string> = []) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport!: string;

  get mostRecentReport() {

    if (this.lastReport) {

      return this.lastReport;

    }

    throw new Error("No report found.");
  }

  set mostRecentReport(value:string){

    if(!value){
      throw new Error("Please pass in a valid input!");
    }

    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1");

it.addEmployee("Max");

it.addEmployee("Manu");

it.addEmployee("Vera");
it.addEmployee("Bola");
it.addEmployee("Ahmad");

it.describe();

it.name = "NEW NAME";

it.printEmployeeInformation();

console.log(it, "it");

const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "";
accounting.addReport("Something went wrong with..");
console.log(accounting.mostRecentReport, "recent rep");

accounting.printReports();

accounting.printEmployeeInformation();

accounting.addEmployee("Ade");
accounting.addEmployee("Nuru");
accounting.addEmployee("Bolu");
accounting.printEmployeeInformation();

// const accountingCopy = { describe: dep.describe };

// // accountingCopy.describe();

// console.log(accountingCopy , "accountingCopy");
