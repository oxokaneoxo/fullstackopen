const blogsRouter = require('express').Router()
const Blog = require("../models/blog")

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs);
})

blogsRouter.post('/', async (request, response) => {
    const body = request.body

    if (!body.title || !body.author || !body.url) {
        return response.status(400).json({
            error: 'blog missing a title, author, and/or url'
        })
    }
    if (!body.likes) {
        body.likes = 0;
    }

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
    })

    await blog.save()
        .then(savedBlog => {
            response.status(201).json(savedBlog)
        })
        .catch(error => next(error))
})

module.exports = blogsRouter