
// נגדיר אובייקט מסוג ראוטר
const router = require('express').Router();
//const ProductController  = require('../controllers/product');
const {AddProducts,GetAllProducts,GetProductSById,UpdateProducts,DeleteProductById,AccessPorblem}  = require('../controllers/product');

// הגדרנו ניתוב - נקודת קצה שביטת גט לנתיב של כל מוצר
router.get("/",GetAllProducts);

//  הגדרנו ניתוב - שלפית מוצר לפי קוד מוצר
router.get("/:id",GetProductSById);

// עדכון מוצר לפי קוד מוצר והמערכת נותנת איידיי 
router.put("/:id",UpdateProducts);

// הוספת מוצר חדש
router.post("/",AddProducts);

// מחיקת מוצר לפי קוד מוצר
router.delete("/:id",DeleteProductById);






module.exports=router;
