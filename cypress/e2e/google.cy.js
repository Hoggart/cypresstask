describe('Test', () => {
  it('itechartcheck', () => {
    cy.visit('https://www.google.com/')
    //cy.get('#L2AGLb').click()
    cy.get('[class="gLFyf gsfi"]').click().type('itechart{enter}')

    cy.get('#rso').children().as('firstpage')
    cy.get('@firstpage').each((item)=> { cy.wrap(item).contains('itechart', { matchCase: false })  })

    cy.get('[aria-label="Page 2"]').click()
    cy.get('#rso').children().as('secondpage')
    cy.get('@secondpage').each((item)=> { cy.wrap(item).contains('itechart', { matchCase: false }) })
    //expect(item).to.contain('itechart', { matchCase: false }) //не работает
  })
})


    