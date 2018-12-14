import express from 'express';
import controller from '../controllers/post.controller';

const router = express.Router();

router.get('/allPosts', controller.getAll);
router.get('/:postId', controller.getPost);
router.post('/createPost', controller.addPost);
router.put('/editPost/:postId', controller.updatePost);
router.delete('/removePost/:postId', controller.deletePost);

export default router;