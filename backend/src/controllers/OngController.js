const crypto = require('crypto');
const connection = require('../database/connection'); // Importa config de conexão ao DB

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res) {
        const {name, email, whatsapp, city, uf} = req.body;

        const id = crypto.randomBytes(4).toString('HEX'); // Gera 4 num aleatórios para a ID da ONG

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

    return res.json({ id });
    }
};