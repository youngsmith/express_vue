const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const post = require('../../models/post');

// get posts
router.get('/', (req,res)=>{
    post
        .find({})
        .exec()
        .then((result)=>{
            res.status(201).send(result);
        })
        .catch((err)=>{
            console.error(err);
        });
});


// add post
router.post('/',(req,res)=>{
    let date = new Date();
    console.log(req.body.data);
    const Post = new post({
        _id: new mongoose.Types.ObjectId(),
        data: req.body.data,
        createdAt: `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}  ${date.getHours()}:${date.getMinutes()}`
    });
    Post
        .save()
        .then((result)=>{
            res.status(201).json({msg:'inserted!'});
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({msg:err})
        });
});


// delete post
router.delete('/:id',async (req,res)=>{
    console.log(req.params.id)
    const result = await post.deleteOne({_id: new mongoose.Types.ObjectId(req.params.id)});
    res.json({msg:result});
});


module.exports = router;