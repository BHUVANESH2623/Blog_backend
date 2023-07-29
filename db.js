import mysql from "mysql";
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Bhuvi@123",
    database:"blog"
})





export default db;
