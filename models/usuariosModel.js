const pool = require('../config/db');

class Usuarios {
    static async obtenerUsuarios(){
        const result = await pool.query('SELECT * FROM usuarios');
        return result.rows;
    }

    static async create(data){
        const {usuario, contrasenia} = data;
        const result = await pool.query('INSERT INTO usuarios (usuario, contrasenia) VALUES ($1, PGP_SYM_ENCRYPT($2::text,$3::text)) RETURNING *',[usuario, contrasenia, 'AES_KEY']);
        return result.rows[0];
    }

    static async findById(id){
        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1',[id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const {usuario, contrasenia} = data;
        const result = await pool.query(
            `UPDATE usuarios SET usuario = $1, contrasenia = PGP_SYM_ENCRYPT($2, 'AES_KEY'), updated_at = now() WHERE id = $3 AND deleted_at IS NULL RETURNING *`,
            [usuario, contrasenia, id]
        );
        return result.rows[0];
    }

    static async delete(id){
        const result = await pool.query('UPDATE usuarios SET deleted_at = now() WHERE id = $1 and deleted_at is null RETURNING *', [id]);
        return result.rows[0];
    }
}

module.exports = Usuarios;