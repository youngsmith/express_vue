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
    let hour = date.getHours();
    let min = date.getMinutes();
    if(hour < 10) hour = '0' + hour;
    if(min < 10) min = '0' + min;

    const Post = new post({
        _id: new mongoose.Types.ObjectId(),
        userId: 'none',
        title: 'none',
        data: req.body.data,
        createDate: `${date.getFullYear() % 100}.${date.getMonth() + 1}.${date.getDate()}`,
        createTime: `${hour}:${min}`
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