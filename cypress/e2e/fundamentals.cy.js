describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals');
  })
  it('verify page header', () => {
   // cy.visit('/fundamentals') used in before each
  //cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i);
    cy.getDataTest('fundamentals-header').contains(/Testing Fundamentals/i);
    cy.contains(/Your tests will exist in a describe block/).should('not.be.visible');
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/).should('be.visible');
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
  })
  it('Verify Accordian is working',()=>{
    // cy.visit('/fundamentals') used in before each
    cy.contains(/Your tests will exist in a describe block/).should('not.be.visible');
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/).should('be.visible');
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
  })
})