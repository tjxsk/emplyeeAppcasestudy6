const express = require('express');
const router = new  express.Router();
const employeeModel = require('../model/employeeData');

router.use(express.json());


function userroute(nav) {
//get operaton
router.get('/', async (req, res) => {
    try {
        const data = await employeeModel.find();
        res.render("view", {    //filename
            title: "Employee List",     //data passed to the view
            data,
            nav
        });
    } catch (error) {
        res.status(404).send('DATA NOT FOUND');
    }
});

//post operation
router.post('/add', async (req, res) => {
    try {
        const data1 = await employeeModel.create(req.body);
        res.status(201).send('Successfully added');
    } catch (error) {
        res.status(400).send('post unsuccessfull');
    }
});

//update operation
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await employeeModel.findByIdAndUpdate(id, req.body);
        res.status(200).send('Successfully updated');
    } catch (error) {
        res.status(400).send('update unsuccessfull');
    }
});

//delete operation
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await employeeModel.findByIdAndDelete(id, req.body);
        res.status(200).send('Successfully deleted');
    } catch (error) {
        res.status(400).send('delete unsuccessfull');
    }
});

return router;
}







module.exports = userroute;