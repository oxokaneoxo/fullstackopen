const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    const result = blogs.reduce((sum, blog) => sum + blog.likes, 0)
    return result;
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) return null;
    const result = blogs.reduce((result, blog) => (result.likes > blog.likes ? result : blog))
    return {
        title: result.title,
        author: result.author,
        likes: result.likes
    };
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
}