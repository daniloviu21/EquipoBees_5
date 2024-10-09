const express = require('express')
const productosRoutes = require('./routes/productosRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const serviciosRoutes = require('./routes/serviciosRoutes');
const ventasRoutes = require('./routes/ventasRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const departamentosRoutes = require('./routes/departamentosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const marcasRoutes = require('./routes/marcasRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api',productosRoutes);
app.use('/api',usuariosRoutes);
app.use('/api',serviciosRoutes);
app.use('/api',ventasRoutes);
app.use('/api',rolesRoutes);
app.use('/api',departamentosRoutes);
app.use('/api',categoriasRoutes);
app.use('/api',marcasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server corriendo en el puerto ${PORT}`);
});