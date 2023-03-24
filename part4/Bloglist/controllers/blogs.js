const blogsRouter = require('express').Router()
const Blog = require("../models/blog")
const User = require("../models/user")

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });
    response.json(blogs);
})

blogsRouter.post('/', async (request, response, next) => {
    const body = request.body

    const user = await User.findById(body.userId)
    console.log(user);

    if (!body.title || !body.url) {
        return response.status(400).json({
            error: 'blog missing a title, and/or url'
        })
    }
    if (!body.likes) {
        body.likes = 0;
    }
    if (!body.author) {
        body.author = 'Unknown'
    }

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user.id,
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog.id)
    await user.save()

    response.json(savedBlog)
})

blogsRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id);
    if (blog) {
        response.json(blog);
    } else {
        response.status(404).end();
    }
})

blogsRouter.delete('/:id', async (request, response, next) => {
    try {
        await Blog.findByIdAndRemove(request.params.id);
        response.status(204).end();
    } catch (error) {
        next(error)
    }
})

blogsRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const blog = {
        likes: body.likes,
    }

    Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
        .then(updatedBlog => {
            response.json(updatedBlog)
        })
        .catch(error => next(error))
})

module.exports = blogsRouter;