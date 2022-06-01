import express from 'express'
import { getAllBlogs, addBlog, update, getById, deleteOne ,getByUserId} from '../controllers/blog-controller'


const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get('/:id', getById)//http://localhost:3002/blog/:id
blogRouter.post("/add", addBlog) //http://localhost:3002/blog/add
blogRouter.put("/update/:id", update) //http://localhost:3002/blog/update
blogRouter.delete("/:id", deleteOne)//http://localhost:3002/blog/:id
blogRouter.get('/user/:id',getByUserId) //http://localhost:3002/blog/user/:id
export default blogRouter

