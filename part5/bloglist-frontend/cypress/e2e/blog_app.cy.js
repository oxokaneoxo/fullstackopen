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
})