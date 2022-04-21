const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await Post.updateOne({ $set: req.body });
      res.status(200).json("post has been updated");
    } else {
      res.status(403).json("you can update your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await Post.deleteOne();
      res.status(200).json("post has been deleted");
    } else {
      res.status(403).json("you can delete your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const userId = req.body.userId;
    if (!post.likes.includes(userId)) {
      await Post.updateOne({ $push: { likes: userId } });
      res.status(200).json("post has been liked");
    } else {
      await Post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("post has been disliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/:id/check-like", async (req, res) => {
  try {
    console.log(req.body.userId, req.params.id);
    const post = await Post.findById(req.params.id);
    const userId = req.body.userId;
    const isLiked = await post.likes.includes(userId);
    res.status(200).json({ result: [isLiked, post.likes] });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPost = await Post.find({ userId: currentUser._id });

    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPost.concat(...friendPosts));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
