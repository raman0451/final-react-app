const mysql= require('mysql2')

// Instead of Connection we have used pool, which enables us to handle large number of users at a time and without opening and closing connection at every request
const pool= mysql.createPool({
    host: 'demodb',
    user: 'root',
    password: 'root',
    database: 'mydb',
    port: 3306,   
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0, 
})

module.exports= pool