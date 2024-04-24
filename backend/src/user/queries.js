const checkUserExists = "SELECT u from users u where u.username = $1"
const addUser = "INSERT INTO users (username, password) VALUES ($1, $2)"


module.exports = {
    checkUserExists,
    addUser,
}