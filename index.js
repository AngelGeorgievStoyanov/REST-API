const express = require('express');
const cors = require('./middlewares/cors');
const PORT= 3030
const app = express();

app.use(express.json());

app.use(cors());


app.get('/', (req, res) => {
    res.json({ message: `REST service operational at ${PORT}` });
});

app.listen(PORT, () => console.log(`REST service started at ${PORT}`));