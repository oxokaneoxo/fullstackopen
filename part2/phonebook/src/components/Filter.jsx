import React from 'react'

const Filter = ({ newFilter, setNewFilter }) => {

    const handleFilterInput = (event) => {
        setNewFilter(event.target.value)
      };

  return (
    <form>
        <div>
          filter shown with
          <input value={newFilter} onChange={handleFilterInput} />
        </div>
      </form>
  )
}

export default Filter