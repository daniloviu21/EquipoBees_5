const Producto = require('../models/productosModel');

class ProductosController {

    static async getAllProducts(req, res)
    {
        try {
            const productos = await Producto.obtenerProductos();
            res.json(productos);
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async createProduct(req, res){
        try {
            const producto = await Producto.create(req.body);
            res.status(201).json(producto);
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async updateProduct(req, res){
        try {
            const producto = await Producto.update(req.params.id, req.body);
            if (!producto) {
                return res.status(404).json({message: "Product no encontrado!"});
            }
            return res.json(producto);
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async deleteProduct(req, res){
        try {
            const producto = await Producto.delete(req.params.id);
            if (!producto) {
                return res.status(404).json({message: "Product no encontrado!"});
            }
            return res.json({message: "Producto eliminado!"});
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }

    static async getProductId(id){
        const result = await pool.query('SELECT * FROM productos WHERE id = $1 AND deleted_at IS NULL', [id]);
        return result.rows[0];
    }

    static async updateStock(stock, id){
        const result = await pool.query('UPDATE productos SET stock = $1, updated_at = now() WHERE id = $2 RETURNING *',[stock, id]);
        return result.rows[0];
    }
}

module.exports = ProductosController;