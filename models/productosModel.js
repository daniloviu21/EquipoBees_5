const pool = require('../config/db');

class Productos {

    static async obtenerProductos(){
        const result = await pool.query('SELECT * FROM productos');
        return result.rows;
    }

    static async create(data){
        const {nombreProducto, descripcion, precio, stock} = data;
        const result = await pool.query('INSERT INTO productos (nombreProducto, descripcion, precio, stock) VALUES ($1, $2, $3, $4) RETURNING *',[nombreProducto, descripcion, precio, stock]);
        return result.rows[0];
    }

    static async update(id, data){
        const {nombreProducto, descripcion, precio, stock} = data;
        const result = await pool.query('UPDATE productos SET nombreProducto = $1, descripcion = $2, precio = $3, stock = $4, updated_at = now() WHERE id = $5 and deleted_at is null RETURNING *', [nombreProducto, descripcion, precio, stock, id]);
        return result.rows[0];
    }

    static async delete(id){
        const result = await pool.query('UPDATE productos SET deleted_at = now() WHERE id = $1 and deleted_at is null RETURNING *', [id]);
        return result.rows[0];
    }
}

module.exports = Productos;