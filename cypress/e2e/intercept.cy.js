describe("Intercept examples to mock the response", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("test the api request through intercept", () => {
    cy.intercept("post", "/examples", {
      body: {
        message: "request is intercepted",
      },
    });

    cy.getDataTest("post-button").click();
  });
  it("intercept from fixture", () => {
    cy.intercept("POST", "/examples", {
      fixture: 'example.json'
    });
    cy.getDataTest("post-button").click();
  });



  it.only('grudge list',()=>{
    cy.contains(/add some grudges/i)
    cy.getDataTest('grudge-list').within(()=>{
        cy.get('li').should('have.length', '0')
    })
    cy.getDataTest('grudge-input').within(()=>{
        cy.get('input').type("some grudge")
    })
    cy.getDataTest('add-grudge-button').click()
    cy.getDataTest('grudge-list').within(()=>{
        cy.get('li').should('have.length', '1')
    })

    cy.getDataTest('grudge-input').within(()=>{
        cy.get('input').type("another grudge")
    })
    cy.getDataTest('add-grudge-button').click()
    cy.getDataTest('grudge-list').within(()=>{
        cy.get('li').should('have.length', '2')
    })
    cy.getDataTest('grudge-list').within(()=>{
    cy.get('li').its(0).should('contain','some grudge')
    cy.get('li').its(1).should('contain','another grudge')
  })

  })
});
