const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const productosRoutes = require('./routes/productosRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const serviciosRoutes = require('./routes/serviciosRoutes');
const ventasRoutes = require('./routes/ventasRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const departamentosRoutes = require('./routes/departamentosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const marcasRoutes = require('./routes/marcasRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const empleadosRoutes = require('./routes/empleadosRoutes');
const cotizacionesRoutes = require('./routes/cotizacionesRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', productosRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', serviciosRoutes);
app.use('/api', ventasRoutes);
app.use('/api', rolesRoutes);
app.use('/api', departamentosRoutes);
app.use('/api', categoriasRoutes);
app.use('/api', marcasRoutes);
app.use('/api', clientesRoutes);
app.use('/api', empleadosRoutes);
app.use('/api', cotizacionesRoutes);

passport.use(new Auth0Strategy({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/callback',
}, function (accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(session({
  secret: 'utcv2024',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res, next) => {
  passport.authenticate('auth0', {
    scope: 'openid email profile'
  })(req, res, next);
}, (req, res) => {
  res.json({ message: 'Iniciando sesión, por favor verifica tu navegador.' });
});

app.get('/callback', passport.authenticate('auth0', {
  failureRedirect: '/failure'
}), (req, res) => {
  res.json({ message: 'Autenticación exitosa', user: req.user });
});

app.get('/failure', (req, res) => {
  res.json({ message: 'Autenticación fallida' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
