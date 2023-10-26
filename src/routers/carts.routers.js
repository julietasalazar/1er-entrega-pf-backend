const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');

const router = Router();

const carts = [ {id: "", title: "cart1"} ];

router.get('/carts', (req, res) => {
    res.status(200).json(carts);
});

router.post('/carts', (req, res) => {
    const newCart = {
        id: uuidv4(),
        products: [],
    };
    carts.push(newCart);
    res.status(201).json(newCart);
});

router.get('/products/:cid', (req, res) => {
    const { cartId } = req.params;
    const cart = carts.find((c) => {
        c.id === parseInt(cartId)
    });
    if (!cart) {
        res.status(404).json({ error: 'Carrito no encontrado.'})
    } else {
    res.status(200).json(cart);
    }
});

router.post('carts/:cid/products/:pid', (req, res) => {
 
})

module.exports = router;