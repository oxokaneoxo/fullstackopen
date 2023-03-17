const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    const result = blogs.reduce((sum, blog) => sum + blog.likes, 0)
    return result;
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) return null;
    const result = Math.max(...blogs.map(blog => blog.likes))
    return result;
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
}