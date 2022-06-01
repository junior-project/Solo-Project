import mongoose from 'mongoose';
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
    let existingUser ;
    try {
        existingUser = await user.findById(user)
    } catch (error) {
        console.log(error);
    }if(!existingUser){
        return res.status(400).json({message:"Unable To Find by This ID "})
    }


    const blog = new Blog ({
        title,description,image,user
    })
    try {
        const spell = await mongoose.startSession();
        spell.startTransaction();
        await blog.save(spell);
        existingUser.blogs.push(blog);
        await existingUser.save({spell});
        await spell.commitTransaction();

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:error} )
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
export const getById = async (req,res,next)=>{
    const id = req.params.id
    let blog ;

    try {
        blog = await Blog.findById(id)
    } catch (error) {
        console.log(error);
    }if(!blog){
        return res.status(404).json({message:"No BLOG found"})
    }
    return res.status(200).json({blog})
}

export const deleteOne = async (req,res,next)=>{
    const id = req.params.id ;

    let blog ;
try {
    blog =  await Blog.findByIdAndRemove(id)
} catch (error) {
    console.log(error);
}
if(!blog){
    return res.status(500).json({message:"there is no one to Remove"})
}
return res.status(200).json({message:"Successfuly tfasa5 ma3adech yarjaa"})

}