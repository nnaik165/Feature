//<reference types="cypress" />

class LoginPage {
 
        LoginToBS(){
          
  cy.visit( Cypress.env('login_url') )
        Cypress.config({
             viewportWidth: 1500,
             viewportHeight: 850,
      })
        cy.viewport(1500, 850)
    //    cy.wait(5000)
        cy.fixture('example').then((data)=>{
        cy.get('#username').type(data.Username);
        cy.get('.mat-flat-button').click();
        cy.url().should('includes', 'Bloodstream');
  
      })
      return this 
    }

        LogoutBS(){    
        //cy.get('.icon > svg').click();
        cy.get('.logout-button > :nth-child(1) > .icon > svg').click();
        cy.wait(3000)
        cy.get('.mat-menu-content > :nth-child(3)').click();
        return this 
}
}
      export default LoginPage

   
  // cy.get('[placeholder="Add new client code"]').last().should('have.text','SHA');
        //cy.get('[name="clientCode"]',{ timeout: 40000 })
       // cy.get('[placeholder="Add new client code"]')
        //.eq(0)