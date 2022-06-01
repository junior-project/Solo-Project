import Blog from '../model/Blog'

export const getAllBlogs = async (req,res,next)=>{
let blogs;

try {
    blogs = await Blog.find();

} catch (error) {
    console.log(error);
}
if(!blogs){
    return res.status(404).json({message:"No Blogs Found"})
}
return res.status(200).json({blogs})

}

export const addBlog = async (req,res,neext)=>{
    const {title,description,image,user} =req.body;

    const blog = new Blog ({
        title,description,image,user
    })
    try {
        blog.save()
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({blog})
};

export const update = async (req,res,next)=>{
    const {title , description } = req.body;
const blogId = req.params.id    ;
let  blog ; 
try {
    blog = await Blog.findByIdAndUpdate(blogId,{
        title,description
    })
} catch (error) {
 return    console.log(error);
    
}
if(!blog){
    return res.status(500).json({message:"Unable To Update the BLOG"})
}
return res.status(200).json({blog})

}