const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'shirt_simplify'
})

app.get('/', (req,res) =>{
    return res.json("From Backend Side");
})

app.post('/signup', (req,res) => {
    const email = req.body.email
    const password = req.body.password
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).send({ message: "Database error" });
        }
    
        if (results.length > 0) {
          return res.status(400).send({ message: "Email is already in use" });
        }

        db.query(
          "INSERT INTO users (email, password) VALUES (?, ?)",
          [email, password],
          (err, result) => {
            if (err) {
              console.error("Error inserting user:", err);
              return res.status(500).send({ message: "Error signing up" });
            }
    
            res.status(201).send({ success: true });
          }
        );
    });
 });


app.post('/signin', (req,res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) {
          return res.status(500).send({message: "Database error" });
        }
    
        if (results.length === 0) {
          return res.status(400).send({message: "Invalid email or password" });
        }
    
        const user = results[0];
    
        if (user.password === password) {
          return res.status(200).send({message:"User can be logged in"});
        } 
        else {
          return res.status(400).send({message: "Invalid email or password" });
        }
    });
});

app.listen(8081, ()=>{
    console.log("listening");
})