describe('Test', () => {
  it('itechartcheck', () => {
    cy.visit(Cypress.env('adress'))
    //cy.get('#L2AGLb').click()

    cy.fillField('[class="gLFyf gsfi"]')
    
    cy.get('#rso').children().as('firstpage')
    cy.get('@firstpage').each((item)=> { cy.wrap(item).contains('itechart', { matchCase: false })  })

    cy.get('[aria-label="Page 2"]').click()
    cy.get('#rso').children().as('secondpage')
    cy.get('@secondpage').each((item)=> { cy.wrap(item).contains('itechart', { matchCase: false }) })
    
  })
})


    