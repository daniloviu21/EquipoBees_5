const Clientes = require('../models/clientesModel');
const Usuarios = require('../models/usuariosModel');

class ClientesController {
    static async getAllClients(req, res) {
        try {
            const clients = await Clientes.obtenerClientes();
            res.json(clients);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async createClient(req, res) {
        const { cliente, usuario } = req.body;

        try {
            const newUser = await Usuarios.create(usuario);
            cliente.idUsuario = newUser.id; 
            const newClient = await Clientes.create(cliente);
            res.status(201).json({ cliente: newClient, usuario: newUser });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async getClientById(req, res) {
        try {
            const client = await Clientes.findById(req.params.id);
            if (!client) {
                return res.status(404).json({ message: "Cliente no encontrado!" });
            }
            return res.json(client);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async updateClient(req, res) {
        const { cliente, usuario } = req.body;
        const { id } = req.params; 
    
        try {
            const updatedUser = await Usuarios.update(cliente.idUsuario, usuario);
            const updatedClient = await Clientes.update(id, cliente);
            return res.json({ cliente: updatedClient, usuario: updatedUser });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
    

    static async deleteClientAndUser(req, res) {
        const { idCliente } = req.params;
        try {
            const cliente = await Clientes.findById(idCliente);
            if (!cliente) {
                return res.status(404).json({ message: "Cliente no encontrado!" });
            }
            await Usuarios.delete(cliente.idUsuario); 
            await Clientes.delete(idCliente); 
            return res.json({ message: "Cliente y usuario eliminados!" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}

module.exports = ClientesController;
