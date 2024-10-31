const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();


const PORT=3000;

// enable cors
app.use(cors());
// enable json parser
app.use(express.json())

// route the customer api
const customerRoutes = require('./routes/customers');
//use the route
app.use('/api/customers',customerRoutes);


app.get('/', (req,res) => {
    res.send("welcome to customer API!")
})

app.listen(PORT,(error)=> {
    if(!error)
        console.log("Server is successful listening at port:",PORT);
    else
        console.log('An error occurred: ',error);
});

main().catch((error)=> console.error(error))

async function main(){
    // prepait cons string
    const connectionString = "mongodb+srv://bichhop12082004:ULoM897PqiHTWArV@cluster0.kc7na.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery',true);
}