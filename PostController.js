import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {

  async getAllPosts(req,res) {
    try {
      const posts = await PostService.getAllPosts();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getPostById(req, res) {
    try {
      const post = await PostService.getPostById(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async createPost(req, res) {
    try {
      console.log(req.files.picture);
      const post = await PostService.createPost(req.body, req.files.picture);
      res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updatePost(req, res) {
    try {
      const updatedPost = await PostService.updatePost(req.body);
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  
  async deletePost(req, res) {
    try {
      const post = await PostService.deletePost(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new PostController();
