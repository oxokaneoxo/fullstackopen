/* eslint-disable no-undef */
describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'John Doe',
      username: 'UnkownUser',
      password: 'pass'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function () {
    cy.contains('Log in to application')
    cy.contains('username')
    cy.contains('password')
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#username').type('UnkownUser')
      cy.get('#password').type('pass')
      cy.get('#login-button').click()

      cy.contains('John Doe logged in')
    })

    it('fails with wrong credentials', function () {
      cy.get('#username').type('WrongUser')
      cy.get('#password').type('wrong')
      cy.get('#login-button').click()

      cy.contains('Wrong credentials')
    })
  })

  describe('When logged in', function () {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3003/api/login', {
        username: 'UnkownUser', password: 'pass'
      }).then(response => {
        localStorage.setItem('loggedBlogappUser', JSON.stringify(response.body))
        cy.visit('http://localhost:3000')
      })
    })

    it('A blog can be created', function () {
      cy.contains('new blog').click()
      cy.get('#blog_title').type('Cypress Test Blog')
      cy.get('#blog_author').type('Cypress')
      cy.get('#blog_url').type('www.cypress.com')
      cy.contains('submit').click()
      cy.contains('a new blog Cypress Test Blog by Cypress added')
    })
    it('A blog can be liked', function () {
      cy.contains('new blog').click()
      cy.get('#blog_title').type('Cypress Test Blog')
      cy.get('#blog_author').type('Cypress')
      cy.get('#blog_url').type('www.cypress.com')
      cy.contains('submit').click()
      cy.contains('view').click()
      cy.contains('like').click()
      cy.contains('Likes: 1')
    })
    it('A blog can be deleted', function () {
      cy.contains('new blog').click()
      cy.get('#blog_title').type('Cypress Test Blog')
      cy.get('#blog_author').type('Cypress')
      cy.get('#blog_url').type('www.cypress.com')
      cy.contains('submit').click()
      cy.contains('view').click()
      cy.contains('Remove').click()
      cy.contains('Blog Cypress Test Blog by Cypress deleted')
    })
    it('A blog can only be deleted by creator', function () {
      cy.contains('new blog').click()
      cy.get('#blog_title').type('Cypress Test Blog')
      cy.get('#blog_author').type('Cypress')
      cy.get('#blog_url').type('www.cypress.com')
      cy.contains('submit').click()
      cy.contains('Logout').click()
      const user = {
        name: 'Jane Doe',
        username: 'UnkownUser2',
        password: 'pass'
      }
      cy.request('POST', 'http://localhost:3003/api/users/', user)
      cy.request('POST', 'http://localhost:3003/api/login', {
        username: 'UnkownUser2', password: 'pass'
      }).then(response => {
        localStorage.setItem('loggedBlogappUser', JSON.stringify(response.body))
        cy.visit('http://localhost:3000')
      })
      cy.contains('view').click()
      cy.contains('Remove').should('not.exist')
    })
  })
})