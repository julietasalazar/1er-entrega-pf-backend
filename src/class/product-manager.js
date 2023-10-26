const fs = require("fs");

class ProductManager {
    constructor() {
        this.products = [];
        this.path = ".src/files/products.json";
    }
  
    addProducts = async (product) => { 
        if (!fs.existsSync(path)) {
            return [];
        }
        const content = await fs.promises.readFile(this.path, 'utf-8');
        const productsParse = JSON.parse(content);
        const productList = [...productsParse, product];
        await fs.promises.writeFile(this.path, JSON.stringify(productList));
        return "Producto agregado correctamente";
    };
}


module.exports = ProductManager;