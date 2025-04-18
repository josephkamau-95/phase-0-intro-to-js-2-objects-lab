// Write your solution in this file!
const employee = {
    name: "Sam"
}
console.log(employee)

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return {...employee, [key]: value}
}
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"))

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAdress", "12 Broadway"))

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}
console.log(deleteFromEmployeeByKey(employee, "name"))

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
 }
 console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"))