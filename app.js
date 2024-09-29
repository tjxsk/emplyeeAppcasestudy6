const express = require('express');
// const router = require('./routes/routes');


require('./db/connection');

const app = new express();

app.use(express.static('public'));

app.set('view engine', 'ejs');       
console.log(__dirname);
app.set('views', __dirname + '/views');

const nav = [
    {
        link: '/user/employees', name: 'Home'
    }, {
        link: '/user/employeeform', name: 'Add Employee'
    }
]
const userRoutes = require('./routes/routes')(nav);

app.use('/Home',userRoutes);





const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});