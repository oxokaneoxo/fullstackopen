import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = {
        content,
        id: Math.floor(Math.random() * 10000) + 1,
        votes: 0
    }
    const response = await axios.post(baseUrl, object)
    return response.data
}

export default { getAll, createNew }