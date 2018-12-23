import Post from '../models/post';
import mongoose from 'mongoose';
import slug from 'slug';

const PostController = {
  getAll: (req, res) => {
    Post.find()
    .select('_id title content slug dateAdded')
    .exec()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send({err});
    });
  },

  getPost: (req, res) => {
    Post.findById({_id: req.params.postId})
    .select('_id title content slug dateAdded')
    .exec()
    .then(result => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({
          message: 'Post is not found for the id.'
        });
      }
    })
    .catch(err => {
      res.status(500).send({err});
    });
  },

  addPost: (req, res) => {
    const {title, content} = req.body;

    if (!title || !content) {
      return res.status(400).send('Invalid Input.');
    }

    const post = new Post({
      _id: new mongoose.Types.ObjectId(),
      title,
      content,
      slug: slug(title, {lower: true})
    });

    post.save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send({err});
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
        res.status(404).send({
          message: 'Post is not found for the id.'
        });
      } else {
        res.status(200).send({
          message: 'Post is updated successfully.'
        });
      }
    })
    .catch(err => {
      console.log('Update Post Error', err)
      res.status(500).send({err});
    });
  },

  deletePost: (req, res) => {
    Post.remove({_id: req.params.postId})
    .exec()
    .then(result => {
      if (result.n === 1) {
        res.status(200).send(result);
      } else {
        res.status(404).send({
          message: 'Post is not found for the id.'
        });
      }
    })
    .catch(err => {
      console.log('Delete Post Error', err)
      res.status(500).send({err});
    });
  }
}

export default PostController;