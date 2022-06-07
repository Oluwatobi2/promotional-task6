const jwt = require('jsonwebtoken');

function authentify (req, res, next){
  //  console.log(req.headers);
    //return;
   if(req.headers.authorization){
       //const token
    if (req.headers.authorization.split(" ")[0] == "Bearer"){
        const token = req.headers.authorization.split(" ")[1];
         jwt.verify(token, process.env.jwtKey, function(err, payload){
            if (err) console.log(err);

             console.log(payload);
             next();
              });

    };
};
};
module.exports = { authentify };