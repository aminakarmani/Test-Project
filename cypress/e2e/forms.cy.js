describe('forms test',()=>{
    beforeEach(()=>{
        cy.visit('/forms')
    })
    it('test subscribe email field',()=>{
        cy.contains(/testing forms/i)
        cy.getDataTest('subscriber-form').find('input').as('subscribe-input') // alias
        cy.get('@subscribe-input').type('test@mail.com') //valid email
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed:/i).should('exist')
        //invalid email
        cy.get('@subscribe-input').clear().type('test@mail.i')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email/i).should('exist')
    })
})