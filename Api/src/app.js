import config  from './config.js'
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import usersRoutes from './routes/users.routes.js'

const app = express();

// SETS DEL APP
app.set('user', config.user);
app.set('password', config.password);
app.set('server', config.server);
app.set('database', config.database);
app.set('port', config.port);
app.set('secret', config.secret)

//USES DEL APP
app.use(morgan('dev'));
app.use(cors( {
    origin: 'http://localhost:5173',
    credentials: true, 
}
    ));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

//RUTAS
app.use("/api", usersRoutes)


export default app