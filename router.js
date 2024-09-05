import { Router } from "express";
import PostController from "./PostController.js";

const router = new Router();

router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getPostById);
router.post('/posts', PostController.createPost);
router.put('/posts/:id', PostController.updatePost);
router.delete('/posts/:id', PostController.deletePost);

export default router;