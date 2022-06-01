import express from 'express';
import mongoose from 'mongoose'
import router from './routes/user.js'
import blogRouter from './routes/blog-routes.js';

const app = express();
app.use(express.json());

app.use("/", router)
app.use("/blog",blogRouter)



mongoose.connect('mongodb+srv://saif:123@cluster0.dhqnr.mongodb.net/?retryWrites=true&w=majority').then(() => app.listen(3002)).then(() => console.log(`connected to data base and listening to localhot 3002`)).catch((err) => console.log(err))

