const express = require('express');

const router = express.Router();

const Post = require('../models/Post');


//Gets back all posts
router.get('/', async (req,res) => {
    // res.send('Hello There posts!!');
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err)
    {
        res.json({message:err});
    }
});

//Specific Post
router.get('/:postName',async(req,res) => {
    try{
        const post = await Post.find({"title":req.params.postName});
    res.json(post);
    }
    catch(err)
    {
        res.json({message:err});
    }
});


//Submits posts
router.post('/', async (req,res) =>{
    // console.log(req.body);
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);    
    }
    catch(err){
        res.json({message:err});
    }
   
});

//Delete a post

router.delete('/:postName',async(req,res) => {
    try{
        const removedPost = await Post.remove({"title":req.params.postName});
    res.json(removedPost);
    }
    catch(err)
    {
        res.json({message:err});
    }
});

//Update Post

router.patch('/:postName',async(req,res) => {
    try{
        const updatePost = await Post.updateOne(
        {"title":req.params.postName},
        {$set:{description:req.body.description}});
    res.json(updatePost);
    }
    catch(err)
    {
        res.json({message:err});
    }
});

module.exports = router;