const { taskSchema } = require('../model/indexmodel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


function register(req, res){
    const {username, email, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
   const hashedPassword = bcrypt.hashSync(password, salt);
   const newUser =  new taskSchema({
       username, email, password:hashedPassword, status: 'Member'
   });
    newUser.save(function(err, user){
        if (err) console.log(err);

        res.send("New User Created")
    });

 };

  async function login (req, res){
    const { username, password } = req.body;
   const user =  await taskSchema.findOne({username}, 'username password')
 
  const passwordMatch = bcrypt.compareSync(password, user.password);
   if(!passwordMatch){
       res.send("Username is incorrect. Try Again!")
   } else{
       jwt.sign({username: user.username, status: user.status},process.env.jwtKey, function(err, token){
           console.log(token)
       });
       
   }

 }

 module.exports = { register, login };