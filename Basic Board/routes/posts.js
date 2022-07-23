var express = require('express');
var router = express.Router();
var post = require('../model/Post');

router.get('/', function(req, res) {
   post.find({})
   .sort('-createdAt')
   .exec(function(err, posts) {
        if(err) return res.json(err);
        res.render('posts/index', {posts:posts});
   });
});