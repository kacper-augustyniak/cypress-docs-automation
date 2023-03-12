

export function goToHomePage() {
    cy.get('.themedImage_ToTc').should('have.attr', 'alt', 'Cypress Logo').click()
}

export function goToSection(sectionName) {
    cy.get('.menu__link').contains(sectionName).click()
}

export function searchBar(value) {
    cy.get('.navbar .DocSearch-Search-Icon').first().click()
    // cy.window
    cy.get('.DocSearch-Input').type(value)

}
