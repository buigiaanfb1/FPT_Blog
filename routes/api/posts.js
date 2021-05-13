const express = require('express');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const router = express.Router();
const app = express();

const Post = require('./../../models/Post');

router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('summary', 'Summary is required').not().isEmpty(),
    check('thumbnail', 'Thumbnail is required').not().isEmpty(),
    check('slug', 'Slug is required').not().isEmpty(),
    check('text', 'Text is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, summary, text, slug, thumbnail } = req.body;
    // Init new object
    let post = new Post({
      title,
      summary,
      text,
      thumbnail,
      slug,
    });
    post.save();
    res.json('Create new post successfully');
  }
);

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/posts
// @desc    Get specific posts through /:slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const posts = await Post.findOne({
      slug: req.params.slug,
    });
    if (!posts) return res.status(500).send('Không tìm thấy bài viết');
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/posts/comments
// @desc    Post comment of the user to the post
// @access  Public
router.post(
  '/comments/:slug',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('text', 'Text is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { text, name, email } = req.body;
      const avatar = gravatar.url(email, {
        protocol: 'https',
        s: '200',
        r: 'pg',
        d: 'identicon',
      });

      const newComment = {
        text,
        name,
        email,
        avatar,
      };
      const post = await Post.findOneAndUpdate(
        { slug: req.params.slug },
        { $push: { comments: newComment } }
      );
      if (!post) return res.status(500).send('Không tìm thấy bài viết');
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Không tìm thấy bài viết');
    }
  }
);

// @route   GET api/posts/comments
// @desc    Get all comments of the post
// @access  Public
router.get('/comments/:slug', async (req, res) => {
  try {
    const posts = await Post.findOne({
      slug: req.params.slug,
    });
    if (!posts) return res.status(500).send('Không tìm thấy bài viết');
    res.json(posts.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
