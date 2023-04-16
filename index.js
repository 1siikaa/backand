const express = require("express");
const route = require('./src/route/route.js')
const mongoose = require('mongoose');
const app = express();
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})



app.use(express.json())




 mongoose.connect("mongodb+srv://1siikaa:1siikaa714*@cluster0.fc9vmlp.mongodb.net/ipl?retryWrites=true&w=majority")
.then((data)=> console.log("MongoDB is connected successfully"))
.catch(err => console.log(err))








app.use("/",route)

app.listen(3001, function () {
    console.log('Express app running on port ' + 3001)
});

