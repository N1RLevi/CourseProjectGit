

// ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות 
// המטרה היא שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={
  GetAllProducts:(req,res)=> {
    let connectin=global.mysql;
    connectin.query("select * from t_products",function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("Ok GET ALL PRODUCT");
        return res.status(200).json({rows});
      }
    });
   
  },
  GetProductSById:(req,res)=> {
    let connectin=global.mysql;
    connectin.query("select * from t_products where pid ="+req.params.id,function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("Ok GET BY ID");
        return res.status(200).json({rows});
      }
    });
  },
  UpdateProducts:(req,res)=> {
   
    let connectin= global.mysql;
    const pname =req.body.pname;
    const price = req.body.price;
    const pdesc =req.body.pdesc;
    const picname =req.body.picname;
    let sql= "UPDATE t_products SET pname='" + pname+"', price='" + price+"',pdesc='" + pdesc+"',picname='" + picname+"' WHERE pid="+req.params.id;
    console.log(sql);
    connectin.query(sql,function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("Ok UPDATE");
        return res.status(200).json({rows});
      }
    });
  },

  AddProducts:(req,res)=> {
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
  DeleteProductById:(req,res)=> {
    let connectin=global.mysql;
    connectin.query("DELETE * from t_products where pid ="+req.params.id,function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("OK DELETE");
        return res.status(200).json({rows});
      }
    });

  },



};