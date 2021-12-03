class Company{
    constructor(){
        this.departments = {};
    }
    addEmployee(name, salary, position, department){
        if(!this.checkValidity(name, salary, position, department)){
            throw new Error("Invalid input!");
        }
        if(this.departments[department] == undefined){
            this.departments[department] = [];
        }
        this.departments[department].push({name, salary, position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    checkValidity(name, salary, position, department){
        return name != null && name != "" && name != undefined &&
            salary != null && salary != "" && salary != undefined &&
            position != null && position != "" && position != undefined &&
            department != null && department != "" && department != undefined &&
            salary > 0
    };
    bestDepartment(){
        let maxSalary = 0;
        let bestDep = '';
        for(let property in this.departments){
            let currentAllSalary = 0;
            for(let i = 0; i < this.departments[property].length; i++){
                currentAllSalary += Number(this.departments[property][i]["salary"]);
            }
            let currentAvgSalary = (currentAllSalary / this.departments[property].length).toFixed(2);
            if(currentAvgSalary > maxSalary){
                maxSalary = currentAvgSalary;
                bestDep = property;
            }
        }
        let output = '';
        output += `Best Department is: ${bestDep}\n`;
        output += `Average salary: ${maxSalary}\n`;


        this.departments[bestDep].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        for(let i = 0; i < this.departments[bestDep].length; i++){
            output += `${this.departments[bestDep][i].name} ${this.departments[bestDep][i].salary} ${this.departments[bestDep][i].position}`;
            if(i < this.departments[bestDep].length - 1){
                output += '\n';
            }
        }
        return output;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());