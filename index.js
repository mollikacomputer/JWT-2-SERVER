const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Testing JWT app')
})

app.listen(port, ()=>{
    console.log('Listening to port ', port);
})
