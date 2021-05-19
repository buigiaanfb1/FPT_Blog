const express = require('express');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const slugify = require('slugify');
const router = express.Router();
const app = express();
const auth = require('./../../middleware/auth');
const Admin = require('./../../models/Admin');

const Post = require('./../../models/Post');

// @route   POST api/posts
// @desc    POST new post to page
// @access  Private
router.post(
  '/',
  [
    auth,
    check('title', 'Title is required').not().isEmpty(),
    check('summary', 'Summary is required').not().isEmpty(),
    check('thumbnail', 'Thumbnail is required').not().isEmpty(),
    check('text', 'Text is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, summary, text, thumbnail } = req.body;
    const admin = await Admin.findById(req.admin.id).select('-password');
    //Slug
    const slug = slugify(title, {
      remove: /[*+~.^#&$%()'"!:@]/g,
      lower: true,
      locale: 'vi',
    });
    // Init new object
    let post = new Post({
      title,
      summary,
      text,
      thumbnail,
      admin,
      slug,
    });
    post.save();
    res.json('Create new post successfully');
  }
);

// @route   PUT api/posts
// @desc    PUT update a post
// @access  Private
router.put(
  '/',
  [
    auth,
    check('title', 'Title is required').not().isEmpty(),
    check('summary', 'Summary is required').not().isEmpty(),
    check('thumbnail', 'Thumbnail is required').not().isEmpty(),
    check('text', 'Text is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { id, title, summary, text, thumbnail } = req.body;
      const post = await Post.findByIdAndUpdate(
        id,
        { title, summary, text, thumbnail },
        { new: true }
      );
      if (!post) return res.status(500).send('Có lỗi xảy ra vui lòng thử lại');
      res.json('Cập nhật thành công. Bravoooo!');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
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
        { $push: { comments: newComment } },
        { new: true }
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

// @route   PUT api/posts/like/:slug
// @desc    Like a post
// @access  Public
router.put('/like/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({
      slug: req.params.slug,
    });
    if (!post) return res.status(500).send('Không tìm thấy bài viết');
    post.like += 1;
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/posts/unlike/:slug
// @desc    Like a post
// @access  Public
router.put('/unlike/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({
      slug: req.params.slug,
    });
    if (!post) return res.status(500).send('Không tìm thấy bài viết');
    post.like -= 1;
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
