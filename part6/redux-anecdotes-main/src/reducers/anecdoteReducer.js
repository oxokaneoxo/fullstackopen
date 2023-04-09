import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

const anecdoteSlive = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    increaseVoteAnecdote(state, action) {
      const updatedAnecdote = action.payload
      return state.map(anecdote =>
        anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
      )
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { increaseVoteAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlive.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdotesService.getAll()
    dispatch(setAnecdotes(notes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newNote = await anecdotesService.createNew(content)
    dispatch(appendAnecdote(newNote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdotesService.update({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch(increaseVoteAnecdote(updatedAnecdote))
  }
}


export default anecdoteSlive.reducer