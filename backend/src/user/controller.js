const pool = require('../db')
const queries = require('./queries')

const userSignup = (req, res) =>{
    const {username, password} = req.body;

    pool.query(queries.checkUserExists, [username], (error, results)=>{
        if(results.rows.length)
        {
            res.send("Email already exists")
        }

        pool.query(queries.addUser, [username, password] , (error, password) =>{
            if(error) throw error; 
            res.status(201).send("User Added Successfully")
            console.log("Student Created")
        })
    })
}

module.exports = {
    userSignup
}
