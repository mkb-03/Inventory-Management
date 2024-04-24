const pool = require('../db')
const queries = require('./queries')

const userSignup = (req, res) => {
    const { username, password } = req.body;

    pool.query(queries.checkUserExists, [username], (error, results) => {
        if (results.rows.length) {
            res.send("User already exists")
        }

        if (!username || !password) {
            res.status(401).json("Invalid request body")
        }

        pool.query(queries.addUser, [username, password], (error, password) => {
            if (error) throw error;
            res.status(201).send("User Added Successfully")
            console.log("User Created")
        })
    })
}

const userLogin = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(401).json("Invalid user")
    }

    pool.query(queries.checkUserLogin, [username], (error, results) => {

        if (error) {

            res.status(500).json("Internal Server Error");
        }

        if (!results.rows || results.rows.length === 0) {
            return res.send("User does not exists")
        }
        if (results.rows.length) {
            const user = results.rows[0];
            // console.log("User details", user)

            const storedPassword = user.password

            if (password !== storedPassword) {
                return res.status(401).json("Invalid password");
            }
            else {

                res.status(200).json("Login successful");
            }
        }



    })
}

module.exports = {
    userSignup,
    userLogin
}
