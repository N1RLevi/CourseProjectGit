
// נגדיר אובייקט מסוג ראוטר
const router = require('express').Router();
const ProductController  = require('../controllers/product');
const UserController = require('../controllers/user');
const {Register,Login}  = require('../controllers/product');
// הרשמת משתמש חדש
router.post("/register",UserController.Register);

//התחברות משתמש קיים
router.post("/login",UserController.Login);



module.exports=router;
