const prisma = require("../prisma/index");

exports.createPost = async (req, res) => {
  try {
    const { slug, title, body } = req.body;

    // TODO: add validations

    const post = await prisma.post.create({
      data: {
        slug,
        title,
        body,
        author: { connect: { id: req.user.id } },
      },
    });

    return res.json(post || '');
  } catch (error) {
    throw new Error(error);
  }
};

exports.editPost = async (req, res) => {
  const { id, body } = req.body;
  try {
    const result = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        body,
      },
    });
    res.json(result);
  } catch (error) {
    res.json({ error: error });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await prisma.post.delete({
      where: { id: id },
    });
    res.json({ message: "post deleted" });
  } catch (error) {
    res.json({ error });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json({
      posts,
    });
  } catch (error) {
    res.json({ error });
  }
};
