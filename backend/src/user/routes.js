const {Router} = require('express')
const controller = require('./controller')
const router = Router()

router.get("/", (req, res)=>{
    res.send("using user route")
})
router.post("/userSignup", controller.userSignup);



module.exports = router;