const checkUserExists = "SELECT u FROM users u WHERE u.username = $1";
const addUser = "INSERT INTO users (username, password) VALUES ($1, $2)";
const checkUserLogin = "SELECT username, password FROM users WHERE username = $1";

module.exports = {
    checkUserExists,
    addUser,
    checkUserLogin
}