// Write your solution in this file

const employee = {
    name: `Ed`,
    streetAddress: `333 West St`
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    const employeeObj = { ...employee };
    employeeObj[key] = value;
    return employeeObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const employeeObj = { ...employee };
    delete employeeObj[key];
    return employeeObj;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}