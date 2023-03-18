module.exports={  
  function(req,res,next) 
{
  let flag = false;
  const myip = req.socket.remoteAddress;
  let arr = ['123456','1234',myip];
  for (let index = 0; index < arr.length; index++)
   {
      if (arr[index]== myip) 
      {
        flag = true;
        break;
      }       
   }
   if (flag) {
    console.log("Work");
    next();
   }
   if (flag==false) {
     return res.status(401).json({msg:"Not Connect In "});  
   }
}
};