const mongoose = require('mongoose');
// creating schema
const employeeSchema = mongoose.Schema({
    EmployeeName: String,
    EmployeeDesignation: String,
    EmployeeLocation: String,
    Salary: Number
});
// creating model 
const employeeData = mongoose.model('employeedetail', employeeSchema);  // (collectionName,SchemaName)



module.exports = employeeData;