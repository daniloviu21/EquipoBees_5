const express = require('express')
const productosRoutes = require('./routes/productosRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api',productosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server corriendo en el puerto ${PORT}`);
});