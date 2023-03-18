

 
// המטרה היא שכל הלוגיקה תשב בקובץ הנוכחי
const bcrypt=require('bcrypt');
module.exports={

  // רישום משתמש חדש במערכת 
  Register:(req,res)=> {

    let connectin= global.mysql;// שמירת החיבור לבסיס הנתונים בתוך משתנה
    const uname =req.body.uname;// שמירת שם המשתמש שנשלח בתוך גוף הבקשה
    const upass = req.body.upass;// שמירת הסיסמה שנשלחה בתוך גוף הבקשה
    const fullname =req.body.fullname;// שמירת השם המלא שנשלח בתוך גוף הבקשה
      // כעט נצפין את הסיסמה ונשמור את הנתונים בבסיס הנתונים
    bcrypt.hash(pass,10,(err,hashPass)=>{
      if (err) 
      {
      console.log(err.message);  
      // מחזיר את השיגאה למשתמש באתר
      return res.status(500).json(err);
      }
      else
      {
        console.log(hashPass);
        
    //  let sql= "INSERT INTO t_users(uname,upass,fullname) VALUES('" + uname+"'," +upass +",'" + fullname+"')";
    //                        הוספת המשתמש לבסיס הנתונים
        let sql= `INSERT INTO t_users(uname,upass,fullname) VALUES('${uname}', '${hashPass}','${fullname}')`;
        console.log(sql);
        // הפעלת השאילתה והחזרת תשובה למשתמש
        
        connectin.query(sql,function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("Ok ADD PRODUCT");
        return res.status(200).json({rows});
      }
    });



      }
    })
    


    
  },

  Login:(req,res)=> {

    
    let connectin= global.mysql;
    const pname =req.body.pname;
    const price = req.body.price;
    const pdesc =req.body.pdesc;
    const picname =req.body.picname;
    let sql= "INSERT INTO t_products (pname,price,pdesc,picname) VALUES ('" + pname+"'," + price+",'" + pdesc+"','" + picname+"')";
    console.log(sql);
    connectin.query(sql,function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("Ok ADD PRODUCT");
        return res.status(200).json({rows});
      }
    });
  },
  
};
