/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
            name: "Jest",
        }
    }

    const { container } = render(<Blog blog={blog} user={user} />)

    const title = container.querySelector('.basic_title')
    expect(title).toBeDefined()

    const author = container.querySelector('.basic_author')
    expect(author).toBeDefined()
})

test('clicking the button shows url and likes', async () => {
    const fakeUser = {
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
            name: "Jest",
        }
    }

    render(<Blog blog={blog} user={fakeUser}/>)

    const user = userEvent.setup()
    const button = screen.getByText('view')
    await user.click(button)
    const url = screen.getByText('Url: https://www.google.com')
    expect(url).toBeDefined()
    const likes = screen.getByText('Likes: 10')
    expect(likes).toBeDefined()
})