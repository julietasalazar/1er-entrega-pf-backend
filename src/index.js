const express = require('express');

const producstRouter = require('./routers/products.router');
const cartsRouter = require('./routers/carts.routers');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', producstRouter, cartsRouter);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});