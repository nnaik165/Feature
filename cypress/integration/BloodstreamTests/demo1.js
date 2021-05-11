describe('Test Suite 02', () =>
{
  let environment = 'tw16-bdl-ins2'
  let url = 'https://'+ environment +'/Bloodstream/login'
  let username = 'IM_ADMIN'
  let password = ''

  it('Test Case 0201', () =>
  {
    cy.visit(url);

    cy.get('#username')
      .type(username);

    //cy.get('#password').type(password);

    cy.get('button')
      .click();

    cy.get(':nth-child(7) > .mat-list-item-content > span > .menu-block > .content-alignment')
    .get('.last-dropdown-content').invoke('show').contains('CLIENT CODE MATRIX').click({force: true});
    cy.get(':nth-child(7) > .mat-list-item-content > span > .menu-block > .content-alignment')
    .get('.last-dropdown-content').invoke('hide');
    cy.wait(2000);

    cy.get('#mat-tab-label-0-1').click();
    cy.wait(1500);

    cy.get('sq-button.ng-star-inserted > .mat-flat-button').click();
    cy.get('[placeholder="Add new client code"]').last().type('test');  //.eq(0)

    cy.get('sq-button.save-button > .mat-flat-button').click({force: true});
   })

  })
