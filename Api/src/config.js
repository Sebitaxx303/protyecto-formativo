import { config } from 'dotenv'
config();

export default{
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    port: process.env.PORT || 3002,
    secret: process.env.TOKEN_SECRET,
}