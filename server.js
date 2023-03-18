
// קישור לספריית פרוטוקול עבודה באינטרנט
const http = require('http');
// קישור לאפליקציה שכתבנו בקובץ החיצוני
const app = require('./app');
const port = 3000;
// יצירת אובייקט מסוג שרת אינטרנט
const srv=http.createServer(app);
// הפעלת אובייקט השרת כך שיאזין לבקשות בכתובת הפורט שהגדרנו לו
srv.listen(port,()=>{console.log('Server is Up')});