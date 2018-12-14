import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
});

const Post = mongoose.model('Post', postSchema);

export default Post;