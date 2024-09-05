import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
  async getAllPosts() {
      const posts = await Post.find();
      return posts;
  }

  async getPostById(id) {
      if(!id) {
        throw new Error('Id is not found')
      }
      const post = await Post.findById(id);
      return post;
   }

  async createPost(post, picture) {
    console.log(picture)
      const fileName = FileService.saveFile(picture);
      const createdPost = await Post.create({...post, picture: fileName});
      return createdPost;
  }

  async updatePost(post) {
      if(!post._id) {
       throw new Error("Id is not found.");
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
      return updatedPost;
  }
  
  async deletePost(id) {
      if(!id) {
        throw new Error("Id is not found.");
      }
      const post = await Post.findByIdAndDelete(id);
      return post;
  }
}

export default new PostService();