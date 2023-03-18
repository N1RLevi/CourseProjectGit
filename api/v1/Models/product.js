const mongoose = require('mongoose');// קישור לספריית מונגוס
const ProductSchema=mongoose.Schema({  _id:mongoose.Schema.Types.ObjectId, // יצירת אובייקט מסוג סכימה,מנבה הנתונים המשקף את האוסף/טבלה
  Pid:Number,
  Pname:String,
  Price:Number,
  Pdesc:String,
  PicName:String
  
},{versionKey: false});// להסרת התוספת עם הקו תחתון
// יצירת מודל  מבנה המייצג את אוסף המוצרים בבסיס הנתונים
module.exports = ProductModel=mongoose.model('products',ProductSchema);