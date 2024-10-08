const express = require('express')
const productosRoutes = require('./routes/productosRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const serviciosRoutes = require('./routes/serviciosRoutes');
const ventasRoutes = require('./routes/ventasRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api',productosRoutes);
app.use('/api',usuariosRoutes);
app.use('/api',serviciosRoutes);
app.use('/api',ventasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server corriendo en el puerto ${PORT}`);
});