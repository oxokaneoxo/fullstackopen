import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Blog from './Blog'

test('renders content', () => {

    const user = {
        name: "Jest",
        username: "jest",
    }

    const blog = {
        title: 'Hello',
        author: "Jest",
        likes: 10,
        url: "https://www.google.com",
        user: { 
            username: "jest",
        }
    }


    render(<Blog blog={blog} user={user} />)

    const title = screen.getByText('Hello') 
    expect(title).toBeDefined()
    const author = screen.getByText('by Jest')
    expect(author).toBeDefined()
})