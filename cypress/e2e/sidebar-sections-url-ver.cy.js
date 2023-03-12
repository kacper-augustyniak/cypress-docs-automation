import {
  goToHomePage,
  goToSection
} from './../pageObjects/header'


describe('sidebar-structure-and-hrefs', () => {
    it('passes', () => {
      cy.visit('https://docs.cypress.io/api/commands/and/')
    //   side-bar menu
      cy.get('.menu_SIkG').children().should('have.length', 1)
    //   all sections are present within the sidebar
      cy.get('.menu__link--sublist').should('have.length', 8)
    //   'Assertions' url quantity
      cy.get('li.theme-doc-sidebar-item-category:nth-child(1) > ul:nth-child(2) > li').should('have.length', 3)
    //   subsections url check
      cy.get('.menu__link').contains('Assertions Reference').should('have.attr', 'href', '/api/assertions/assertions-reference')
      cy.get('.menu__link').contains('and').should('have.attr', 'href', '/api/commands/and')
      cy.get('.menu__link').contains('should').should('have.attr', 'href', '/api/commands/should')
      cy.contains('Assertions').click()
      cy.get('li.theme-doc-sidebar-item-category:nth-child(1)').contains('Assertions').should('have.attr', 'aria-expanded', 'false')
    //    'Actions' url quantity
      cy.contains('Actions').click()
      cy.get('li.theme-doc-sidebar-item-category:nth-child(2) > ul:nth-child(2) > li').should('have.length', 11)
    //    subsections url check
      cy.get('.menu__link').contains('Actionability Guide').should('have.attr', 'href', '/api/actions/actionability-guide')
      cy.get('.menu__link').contains('check').should('have.attr', 'href', '/api/commands/check')
      cy.get('.menu__link').contains('clear').should('have.attr', 'href', '/api/commands/clear')
      cy.get('.menu__link').contains('click').should('have.attr', 'href', '/api/commands/click')
      cy.get('.menu__link').contains('dblclick').should('have.attr', 'href', '/api/commands/dblclick')
      cy.get('.menu__link').contains('rightclick').should('have.attr', 'href', '/api/commands/rightclick')
      cy.get('.menu__link').contains('select').should('have.attr', 'href', '/api/commands/select')
      cy.get('.menu__link').contains('selectFile').should('have.attr', 'href', '/api/commands/selectfile')
      cy.get('.menu__link').contains('trigger').should('have.attr', 'href', '/api/commands/trigger')
      cy.get('.menu__link').contains('type').should('have.attr', 'href', '/api/commands/type')
      cy.get('.menu__link').contains('uncheck').should('have.attr', 'href', '/api/commands/uncheck')
      cy.contains('Actions').click()
      // 'Actions' tab is collapsed
      cy.get('li.theme-doc-sidebar-item-category:nth-child(2)').contains('Actions').should('have.attr', 'aria-expanded', 'false')
      // 'Queries' tab is expanded
      cy.contains('Queries').click()
      // tab contains 8 code blocks (by classname)
      cy.contains('as').click()
      cy.get('.codeBlockLines_e6Vv').should('have.length', 8)



      
      cy.contains('Other commands').click()
      cy.contains('Queries').click()
      cy.contains('Queries').click()

      })
  })
