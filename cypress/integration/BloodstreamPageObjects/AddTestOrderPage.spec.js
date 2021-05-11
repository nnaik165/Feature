//<reference types="cypress" />
import DonationPage from './DonationPage.spec'


class AddTestOrderPage {      


  //Add Test order for IDT sample in Donation Page
  AddTestDonationOneSample(){   
    let r1 = new DonationPage()
    r1.SearchIDTDonationScreen()
    cy.get('.mat-checkbox-inner-container').first().wait(1000).click()
    // cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force: true});
       cy.xpath("//button[@class='mat-flat-button mat-button-base ribbon-button mat-primary ng-star-inserted']").should('be.enabled').click()
     r1.TestTubeRepe()
     return this 
     }  


//Add Test order for IDT sample in Test Page
AddTestTubeOneSample(){   
  let r1 = new TestPage()
 
     

}
   }
//  reg.TestTubeRepe()

     export default  AddTestOrderPage
    