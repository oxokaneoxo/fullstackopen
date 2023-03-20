const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: "The art of magic and swords",
    author: "Brett Jonham",
    url: "bookmagic.org",
    likes: 7,
  },
  {
    title: "Jungle and Airport fighters",
    author: "Steve Hobget",
    url: "fightersguide.com",
    likes: 12,
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
}, 100000)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 100000)

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(initialBlogs.length)
}, 100000)

test('a specific blog is within the returned notes', async () => {
  const response = await api.get('/api/blogs')

  const authors = response.body.map(r => r.author)
  expect(authors).toContain(
    'Steve Hobget'
  )
}, 100000)

test('Id is defined', async () => {
  const response = await api.get('/api/blogs')
  const ids = response.body.map(i => i.id)
  expect(ids).toBeDefined()
}, 100000)

test('Posting a new blog', async () => {
  let blogObject = new Blog({
    title: "How to always join the winning team",
    author: "Brad Guga",
    url: "alwayswinning.com",
    likes: 7,
  })
  await blogObject.save()
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(3)
  const authors = response.body.map(r => r.author)
  expect(authors).toContain(
    'Brad Guga'
  )
})

afterAll(async () => {
  await mongoose.connection.close()
})