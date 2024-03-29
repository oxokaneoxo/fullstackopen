import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAnecdotes, updateAnecdote } from './requests'
import { useNotificationDispatch } from './NotificatonContext'

const App = () => {
  const dispatch = useNotificationDispatch()

  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      const updatedAnecdotes = anecdotes.map(anecdote => anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote)
      queryClient.setQueryData('anecdotes', updatedAnecdotes)
    }
  })

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({ type: "SET", payload: `you voted for '${anecdote.content}'` });
    setTimeout(() => {
      dispatch({ type: "REMOVE" });
    }, 5000)
  }

  const results = useQuery('anecdotes', getAnecdotes, {
    refetchOnWindowFocus: false
  })

  if (results.isLoading) {
    return <div>Loading data...</div>
  }
  if (results.isError) {
    return <div>{console.log(results.error)}Anecdote service not available due to problems in server</div>
  }

  const anecdotes = results.data

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
