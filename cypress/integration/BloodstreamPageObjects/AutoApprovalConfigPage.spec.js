//<reference types="cypress" />

class AutoApprovalConfigPage {      
    ApprovalConfigScreen(){
      cy.get(':nth-child(7) > .mat-list-item-content > span > .menu-block > .content-alignment').invoke('show')
      cy.contains('APPROVAL CONFIGURATION').click({force: true});
      cy.url().should('include','approval-configuration').wait(6000)
         return this      
    }
}
export default  AutoApprovalConfigPage