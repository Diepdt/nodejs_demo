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
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `user`'
        );

        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
    }
}

export default getConnectionDatabase;