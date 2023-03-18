
// קישור לספריית אקספרס
const express = require('express');
// שיכול לקבל אוביקט גיסון 
const { json } = require('express');
// קישור לספריית  SQL 
const mysql=require('mysql');

// יצירת מופע של  אקספרס
const app = express();


const ProductRouter=require('./api/v1/routes/product');
const authh=require('./api/v1/middlewares/auth');


const connectin = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shop'
});


// חיבור לבסיס הנתונים 
connectin.connect(function(err) {
  if (err) {// במידה והיתתה שגיאה אז ייכנס למשתנה הזה פירוט של השגיאה
    console.log(err.message);
  } 
  else{//במידה ולא הייתה שגיאה מדפיסים למסך הודעה כללית
    console.log("Connected to DataBase");
  }
})

// שמירת החיבור לבסיס הנתונים כגלובאלי כך שיוכר בכל מקום בתוכנית

global.mysql=connectin;

// הוספת שכבה של ניתוב עבור מוצרים
app.use("/product",ProductRouter);

app.get("/",(req,res)=> {res.status(200).json({"Message": "My Ecommerce Api App"})});
module.exports=app;