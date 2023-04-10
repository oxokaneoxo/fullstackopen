import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => {
    return axios.get(baseUrl).then(res => res.data)
}

export const createAnecdote = (newAcecdote) => {
    return axios.post(baseUrl, newAcecdote).then(res => res.data)
}