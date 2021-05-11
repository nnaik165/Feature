//<reference types="cypress" />
describe('Test Suite 0111: Donations Screen', () =>
{
  let environment = 'tw16-bdl-ins2'
  let url = 'https://'+ environment +'/Bloodstream/login'
  let username = 'IM_ADMIN'
  let password = ''

  it('Test Case 111: Filters 01', () =>
  {
    cy.visit(url);

    cy.get('#username')
      .type(username);

        cy.get('button')
      .click();

      cy.get(':nth-child(7) > .mat-list-item-content > span > .menu-block > .content-alignment').invoke('show')
      cy.contains('CLIENT CODE MATRIX').click({force: true});
      cy.url().should('include','configuration')
    //  https://tw16-bdl-ins2/Bloodstream/configuration
      //.get('.dropdown-content')
    
      
    //   .click({force: true});
  
    // cy.get(':nth-child(2) > .mat-list-item-content > span > .menu-block > .content-alignment')
    //   //.get('.dropdown-content')
    //   .invoke('hide');
   
      cy.get('#mat-tab-label-0-1', { timeout: 30000 })
      .click()
  cy.wait(3000)
  cy.get('sq-button.ng-star-inserted > .mat-flat-button', { timeout: 30000 })
  .contains('Add Client Code')
      .click({force: true});
      cy.fixture('example').then((data)=>{
cy.get('.field-height > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(data.Code);
//cy.get('#username').type(data.Username);
})
  })
})