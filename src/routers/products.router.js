const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');

const router = Router();

const products = [
    { title: "cuaderno", price: 20, description: "cuaderno 1" }
];

router.get('/products', (req, res) => {
    res.status(200).json(products);
});


router.get('/products/:pid', (req, res) => {
    const { productId } = req.params;
    const product = products.find((p) => {
        p.id === parseInt(productId)
    });
    if (!product) {
        res.json({ error: 'Producto no encontrado.'})
    } else {
    res.json(product);
    }
});

router.post('/products', async (req, res) => {
    const { body } = req;
    const newProduct = {
        ...body,
        id: uuidv4(), 
    }
    products.push(newProduct);
    res.status(201).json(newProduct);
});

router.put('/products/:pid', (req, res) => {
    const { body, params} = req;
    const productId = params.productId;
    const position = products.findIndex((p) => {
        return p.id === parseInt(productId);
    });
    if (position === -1) {
        res.status(404).json({message: 'Producto no encontrado'});
        return; 
    }
    products[position] = {
        id: parseInt(productId),
        ...body,
    };
    res.status(200).json({message: 'Producto actualizado correctamente'});
});

router.delete('/products/:pid', (req, res) => {
    const { params } = req;
    const productId = params.productId;
    const position = products.findIndex((p) => {
        return p.id === parseInt(productId);
    });
    if (position === -1) {
        res.status(404).json({ message: 'Producto no encontrado'});
        return;
    }
    const product = products.splice(position, 1)[0];
    res.status(200).json({ message: 'Producto eliminado correctamente', productDeleted: product});
});

module.exports = router;