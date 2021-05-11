describe('Test Suite 03: Donations Screen', () =>
{
  let environment = 'tw16-bdl-ins2'
  let url = 'https://'+ environment +'/Bloodstream/login'
  let username = 'IM_ADMIN'
  let password = ''

  it('Test Case 0301: Filters 01', () =>
  {
    cy.visit(url);

    cy.get('#username')
      .type(username);

    //cy.get('#password').type(password);

    cy.get('button')
      .click();

    cy.get(':nth-child(2) > .mat-list-item-content > span > .menu-block > .content-alignment')
      .get('.dropdown-content')
      .invoke('show')
      .contains('DONATIONS')
      .click({force: true});

    cy.get(':nth-child(2) > .mat-list-item-content > span > .menu-block > .content-alignment')
      .get('.dropdown-content')
      .invoke('hide');

    cy.get('sq-button.filter > .mat-flat-button', { timeout: 30000 })
      .click()

    cy.get('.mat-checkbox-label', { timeout: 30000 })
      .contains('HEV')
      .click({force: true});

    cy.get('.mat-checkbox-label')
      .contains('Hemolytic')
      .click({force: true});

    cy.get('sq-button.flat_button > .mat-flat-button')
      .click({force: true});
  })

})
