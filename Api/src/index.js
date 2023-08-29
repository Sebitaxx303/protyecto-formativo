import app from './app.js';
import { getConnection } from './dataBase/database.js'

getConnection();
app.listen(app.get('port'))
console.log('corriendo por el puerto', app.get('port'))