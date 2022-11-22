const express = require('express');
const  mongoose  = require('mongoose');
const { authController } = require('./contrllers/authController');
const cors = require('./middlewares/cors');
const PORT = 3030
const connectionString = 'mongodb://localhost:27017/tricksForTravelers';


start();
async function start() {
    try {

        await mongoose.connect(connectionString)
        console.log('Database connected!')
    } catch (err) {
        throw new Error(err.message)
    }
   

    const app = express();
    app.use(express.json());

    app.use(cors());


    app.get('/', (req, res) => {
        res.json({ message: `REST service operational at ${PORT}` });
    });

    app.use('/users',authController);

    app.listen(PORT, () => console.log(`REST service started at ${PORT}`));
}