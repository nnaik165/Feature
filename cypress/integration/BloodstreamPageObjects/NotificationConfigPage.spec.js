//<reference types="cypress" />

class NotificationConfigPage {      
    NotificationConfigScreen(){
      cy.get(':nth-child(7) > .mat-list-item-content > span > .menu-block > .content-alignment').invoke('show')
      cy.contains('NOTIFICATION CONFIGURATION').click({force: true});
      cy.url().should('include','notification-configuration').wait(6000)
         return this      
}



    SeverityConfigTab(){
       cy.get('.mat-radio-outer-circle').eq(0).click()
       cy.get('.mat-radio-outer-circle').eq(3).click()
       cy.get('.mat-radio-outer-circle').eq(6).click()
        cy.get('.sq-primary-button').click()

    }
    
}
export default  NotificationConfigPage