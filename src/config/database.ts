// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const getConnectionDatabase = async () => {
    const connection = await mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        database: 'nodejspro',
        password: '123456'
    });
    return connection;
}

export default getConnectionDatabase;