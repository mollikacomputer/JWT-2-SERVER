const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Testing JWT app')
})
// login route app
app.post('/login', (req, res) =>{
    const user = req.body;
    console.log(user);
    if(user.email === 'user@gmail.com' && user.password === '123456'){
        //for JWT access token
        const accessToken = jwt.sign(
            {email: user.email},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'1h'}
        )
        res.send({
            success:true,
            accessToken:accessToken
        })
    }
    else{
        res.send({success:false})
    }
})

app.listen(port, ()=>{
    console.log('Listening to port ', port);
})
