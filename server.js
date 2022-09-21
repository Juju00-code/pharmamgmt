import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import manuRouter from './routes/allRoutes.js';


const port = 8081;
const app = express();
const dbUrl = 'mongodb://localhost:27017/pharmacy'

app.use(express.json());
app.use(cors())
app.use(manuRouter)




app.get('/greeter', (req, res) => {
    // req - Request of express -- we want something from the client
    // res - Response of express -- we want to send something to the client
    res.send('<h1>Good afternoon</h1>');
  });

async function initServer(){
    try{
        await mongoose.connect(dbUrl);
        app.listen(port,()=>{
            console.log('Database available!');
             console.log (`Web server running on port ${port}`);
        });   
    } catch(err){
        console.log(err);
        console.log('Unable to connect with database');
        console.log('Unable to start express server')
    }
}

initServer();
