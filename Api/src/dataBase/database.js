import sql from 'mssql'

const dataBaseConfig = {
    user: 'sebas',
    password: '1234',
    server: 'localhost',
    database: 'solctext',
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
};

export async function getConnection () {
    try {
        const pool = await sql.connect(dataBaseConfig)
        console.log('base de datos conectada')
        return pool;      
    } catch (error) {
        console.error(error)
    }
};

export { sql }