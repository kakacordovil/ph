import Post from "../models/Post";

export default {
  render(post: Post) {
    return {
      id: post.id,
      content: post.content
    };
  },

  renderMany(posts: Post[]) {
    return posts.map(post => this.render(post));
  }
};