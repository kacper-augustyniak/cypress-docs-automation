import {
    goToHomePage,
    goToSection,
    searchBar
  } from './../pageObjects/header'

  describe('sidebar-structure-and-hrefs', () => {
    it('passes', () => {
        cy.visit('https://docs.cypress.io/api/commands/and/')
        goToHomePage()
        searchBar('and')
    })
})