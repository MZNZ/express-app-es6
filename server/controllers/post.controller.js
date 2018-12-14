import Post from '../models/post';
import mongoose from 'mongoose';
import slug from 'slug';

const PostController = {
  getAll: (req, res) => {
    Post.find()
    .select('_id title content slug dateAdded')
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log('Get All Post Error:', err)
      res.status(500).json({err});
    });
  },

  getPost: (req, res) => {
    Post.findById({_id: req.params.postId})
    .select('_id title content slug dateAdded')
    .exec()
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: 'Post is not found for the id.'
        });
      }
    })
    .catch(err => {
      console.log('Get Post Error', err)
      res.status(500).json({err});
    });
  },

  addPost: (req, res) => {
    const {title, content} = req.body;

    if (!title || !content) {
      res.status(403).end();
      return;
    }

    const post = new Post({
      _id: new mongoose.Types.ObjectId(),
      title,
      content,
      slug: slug(title, {lower: true})
    });

    post.save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      console.log('Create Post Error', err)
      res.status(500).json({err});
    });
  },

  updatePost: (req, res) => {
    const newPost = {};
    for (let key in req.body) {
      newPost[key] = req.body[key];
    }

    Post.updateOne({ _id: req.params.postId }, {$set: newPost})
    .exec()
    .then(result => {
      if (result.n === 0 && result.nModified === 0) {
        res.status(404).json({
          message: 'Post is not found for the id.'
        });
      } else {
        res.status(200).json({
          message: 'Post is updated successfully.'
        });
      }
    })
    .catch(err => {
      console.log('Update Post Error', err)
      res.status(500).json({err});
    });
  },

  deletePost: (req, res) => {
    console.log('****1.1');
    Post.remove({_id: req.params.postId})
    .exec()
    .then(result => {
      console.log('****1');
      if (result.n === 1) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: 'Post is not found for the id.'
        });
      }
    })
    .catch(err => {
      console.log('Delete Post Error', err)
      res.status(500).json({err});
    });
  }
}

export default PostController;