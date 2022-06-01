import express from 'express'
import {getAllBlogs,addBlog,update} from '../controllers/blog-controller'


const blogRouter = express.Router();

blogRouter.get ("/",getAllBlogs) ;
blogRouter.post("/add",addBlog) //http://localhost:3002/blog/add
blogRouter.put("/update/:id",update ) //http://localhost:3002/blog/update
export default blogRouter

