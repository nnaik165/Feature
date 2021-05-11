//<reference types="cypress" />

class DonationPage {      
   DonationScreen(){
       cy.get(':nth-child(2) > .mat-list-item-content > span > .menu-block > .content-alignment')
      .get('.dropdown-content')
      .invoke('show')
      .contains('DONATIONS')
      .click({force: true})
       cy.wait(4000)  
  }
//Search Donation ID with status -Pending Preparation  in Donation Screen
SearchIDTDonationScreenPPrep(){
  cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon > svg').click();
  cy.xpath("//span[normalize-space()='Donation ID']").click();
  cy.fixture('example').then((data)=>{
  cy.get('[placeholder="Search by column names"]').type(data.DonationIDPPrepSearch).should('be.visible')
  cy.get('[data-mat-icon-name="gf-icon-search"]').click();
  //cy.xpath("//sq-icon[@class='mat-icon material-icons gf-icon-search mat-icon-no-color ng-star-inserted']").click();
  cy.wait(3000)
  })
}

//Search Donation ID with status -Pending Pool in Donation Screen
SearchIDTDonationScreenPTest(){
  cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon > svg').click();
  cy.xpath("//span[normalize-space()='Donation ID']").click();
  cy.fixture('example').then((data)=>{
  cy.get('[placeholder="Search by column names"]').type(data.DonationIDTestSearch).should('be.visible')
  cy.get('[data-mat-icon-name="gf-icon-search"]').click();
  //cy.xpath("//sq-icon[@class='mat-icon material-icons gf-icon-search mat-icon-no-color ng-star-inserted']").click();
  cy.wait(3000)
  })
}

 //testdropdown
  TestTubeRepe(){
  //Test drop down
  cy.get('[aria-label="Choose Assay"]').click()
  cy.wait(2000)
  cy.xpath("//span[normalize-space()='WNV']").click();
 cy.wait(2000)
    //Tube drop down
    cy.get('[aria-label="Choose Tube"]').click()
   cy.xpath("//span[normalize-space()='IDT']").click()
    //Repetition drop down
  cy.get('[aria-label="Choose Repetitions"]').click()
  cy.xpath("//span[normalize-space()='1']").click()
  cy.get('[style="flex: 1 1 100%; box-sizing: border-box; max-width: 50%;"] > [fxlayout="column"] > sq-button > .mat-flat-button').click().wait(1000)//add test btn
  cy.xpath("//div[@class='print-btn-section']//button[@type='button']").click({force: true});
 //  cy.get('.button-style > .print-btn-section > sq-button > .mat-flat-button').click();
  cy.wait(1000)
}


AddFlagsDonationPagePPrep(){
cy.get('[svgicon="more_horiz"]').invoke('show').wait(2000).click({force: true})
cy.get('[class="example-box"]').contains("Add Flags").click()
cy.xpath("//div[@class='title popup_header']").should('be.visible')
cy.xpath("//span[normalize-space()='QNS']").should('be.visible')
cy.xpath("//span[normalize-space()='Lipemic']").should('be.visible')
cy.xpath("//span[normalize-space()='Hemolytic']").should('be.visible')
cy.get('.flag-container .mat-checkbox-layout > .mat-checkbox-inner-container',{ timeout: 30000 }).first().click({force: true});
cy.get('.flag-container .mat-checkbox-layout > .mat-checkbox-inner-container',{ timeout: 30000 }).eq(1).click({force: true});
cy.get('.flag-container .mat-checkbox-layout > .mat-checkbox-inner-container',{ timeout: 30000 }).eq(2).click({force: true});

// cy.xpath("//span[normalize-space()='QNS']").should('be.visible').get('#mat-checkbox-83 > .mat-checkbox-layout > .mat-checkbox-inner-container').click().wait(1000)
// cy.xpath("//span[normalize-space()='QNS']").should('be.visible').get('#mat-checkbox-84 > .mat-checkbox-layout > .mat-checkbox-inner-container').click().wait(1000)
// cy.xpath("//span[normalize-space()='QNS']").should('be.visible').get('#mat-checkbox-85 > .mat-checkbox-layout > .mat-checkbox-inner-container').click().wait(1000)

cy.fixture('example').then((data)=>{
cy.xpath("//textarea[@placeholder='Leave a note...']").type(data.DonationPageAddFlagSlideout).wait(1000)
cy.get('.ribbon-button').click().wait(1000).get('.mat-snack-bar-container').should('be.visible')
})
}

FlagandNoteIconVisible(){
  cy.xpath("//sq-cell[@role='gridcell']//img[@alt='flag']").should('be.visible')
  cy.xpath("//img[@alt='addNote']").should('be.visible')
}

ActiveFilterLast30DaysPPrep(){
cy.get('.filter > .mat-button-wrapper', { timeout: 30000 }).click()
cy.get('.clear-filter > .flat_button', { timeout: 30000 }).click().wait(4000)
cy.get('.mat-radio-label', { timeout: 30000 })
.contains('Last 30 days')
.click({force: true});
cy.get('.mat-checkbox-label', { timeout: 30000 })
.contains('Pending Preparation')
.click({force: true});
cy.wait(4000)
cy.get('.save-filter > .flat_button').click({force: true});
cy.wait(3000)
cy.xpath("//div[@class='filter-container']").contains('Status: Pending Preparation')
}

ActiveFilterLast14DaysPTest(){
  cy.wait(3000)
  cy.get('.filter > .mat-button-wrapper', { timeout: 30000 }).click()
  cy.get('.clear-filter > .flat_button', { timeout: 30000 }).click().wait(4000)
  cy.get('.mat-radio-label', { timeout: 30000 })
  .contains('Last 14 days')
  .click({force: true});
  cy.get('.mat-checkbox-label', { timeout: 30000 })
  .contains('Pending Test')
  .click({force: true});
  cy.wait(4000)
  cy.get('.save-filter > .flat_button').click({force: true});
  cy.wait(3000)
  cy.get('.filter-container .mat-chip-ripple').contains('Pending Test')

}


AddFlagsDonationPagePT(){
cy.get('[svgicon="more_horiz"]').invoke('show').wait(2000).click({force: true})
cy.get('[class="example-box"]').contains("Add Flags").click()
cy.xpath("//div[@class='title popup_header']").should('be.visible')
cy.xpath("//span[normalize-space()='QNS']").should('be.visible')
cy.xpath("//span[normalize-space()='Lipemic']").should('be.visible')
cy.xpath("//span[normalize-space()='Hemolytic']").should('be.visible')
cy.get('.flag-container .mat-checkbox-layout > .mat-checkbox-inner-container',{ timeout: 30000 }).first().click({force: true});
cy.get('.flag-container .mat-checkbox-layout > .mat-checkbox-inner-container',{ timeout: 30000 }).eq(1).click({force: true});
cy.get('.flag-container .mat-checkbox-layout > .mat-checkbox-inner-container',{ timeout: 30000 }).eq(2).click({force: true});

// cy.xpath("//span[normalize-space()='QNS']").should('be.visible').get('#mat-checkbox-83 > .mat-checkbox-layout > .mat-checkbox-inner-container').click().wait(1000)
// cy.xpath("//span[normalize-space()='QNS']").should('be.visible').get('#mat-checkbox-84 > .mat-checkbox-layout > .mat-checkbox-inner-container').click().wait(1000)
// cy.xpath("//span[normalize-space()='QNS']").should('be.visible').get('#mat-checkbox-85 > .mat-checkbox-layout > .mat-checkbox-inner-container').click().wait(1000)

cy.fixture('example').then((data)=>{
cy.xpath("//textarea[@placeholder='Leave a note...']").type(data.DonationPageAddFlagSlideout).wait(1000)
cy.get('.ribbon-button').click().wait(1000).get('.mat-snack-bar-container').should('be.visible')
})
}

FlagandNoteIconVisible(){
  cy.xpath("//sq-cell[@role='gridcell']//img[@alt='flag']").should('be.visible')
  cy.xpath("//img[@alt='addNote']").should('be.visible')
}




}






   export default DonationPage



//Register new Donation for IDT sample
// RegisterNewDonationOneSample(){   
       // cy.get('sq-button.register-donation-button > .mat-flat-button').click(); //Reg New Donation Btn
       // cy.fixture('example').then((data)=>{
       // cy.get('.single-sample-id').click().type(data.Sample)                 //enter Sample 
       // cy.wait(2000)
       // cy.get('sq-button.ng-star-inserted > .mat-flat-button',{ timeout: 30000 }).click();
       // cy.wait(2000)
       // //Test drop down
       // cy.get('[aria-label="Choose Assay"]').click()
       // cy.wait(2000)
       // cy.xpath("//span[normalize-space()='WNV']").click()
       // cy.wait(2000)
       // //Tube drop down
       // cy.get('[aria-label="Choose Tube"]').click()
       // cy.xpath("//span[normalize-space()='IDT']").click()
       // //Repetition drop down
       // cy.get('[aria-label="Choose Repetitions"]').click()
       // cy.xpath("//span[normalize-space()='1']").click()
       // cy.get('[style="flex: 1 1 100%; box-sizing: border-box; max-width: 50%;"] > [fxlayout="column"] > sq-button > .mat-flat-button').click(); //add test btn
       // cy.get('.button-style > .print-btn-section > sq-button > .mat-flat-button').click();  //create test order btn
       // cy.wait(5000)
    
   ///// DD
   //     cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon > svg').click();
   //     cy.xpath("//span[normalize-space()='Donation ID']").click();
   //     cy.get('[placeholder="Search by column names"]').type('ABC53').should('be.visible')
   //     //cy.wait(3000)
   //     cy.xpath("//sq-icon[@class='mat-icon material-icons gf-icon-search mat-icon-no-color ng-star-inserted']").click()
   //     cy.wait(3000)
   //     cy.get('[svgicon="more_horiz"]').invoke('show').wait(2000).click({force: true})
   //     cy.wait(2000)
   //    cy.xpath("//div[@class='example-box nav-donation-details']").click()
   //  //  cy.wait(2000)
   //   // cy.xpath("//div[@class='status ng-star-inserted']").should('contain','Pending Test')
   //    /////EC
   //  cy.xpath("//span[contains(text(),'Edit Column')]").click()
   // cy.wait(2000)
   //cy.get('#cdk-drop-list-1 > :nth-child(10)').trigger('dragstart', { dataTransfer: new DataTransfer });
  //  cy.get('#cdk-drop-list-1 > :nth-child(10)').dragTo('#cdk-drop-list-1 > :nth-child(8)')

  //const dataTransfer = new DataTransfer;
  //cy.get("div[class='column-list-container'] div:nth-child(2)").eq(1).contains("Assays").click().drag("#cdk-drop-list-1 > :nth-child(9)");
//    cy.get("div[class='column-list-container'] div:nth-child(2)").trigger("dragstart", { dataTransfer });
// cy.get("#cdk-drop-list-1 > :nth-child(9)").trigger("drop", { dataTransfer });
// cy.get("div[class='column-list-container'] div:nth-child(2)").trigger("dragend");
// cy.get("div[class='column-list-container'] div:nth-child(2)").trigger("dragstart", { dataTransfer });
// cy.get("#cdk-drop-list-1 > :nth-child(9)").trigger("dragover");
// cy.get("#cdk-drop-list-1 > :nth-child(9)").trigger("drop", { dataTransfer });
// cy.get("div[class='column-list-container'] div:nth-child(2)").trigger("dragend");

//cy.get("div[class='column-list-container'] div:nth-child(2)").eq(1).contains("Assays").trigger("contextmenu")
     // cy.get("div[class='column-list-container'] div:nth-child(2)")
     //           .trigger('mousemove')
     //       cy.get('#cdk-drop-list-1 > :nth-child(9)')
     //           // .trigger('mousemove')
     //           .click()
             //   cy.get('.column-list-item').eq(1).contains('Assays').trigger('mousemove')            
             // cy.xpath("//span[normalize-space()='Client']").trigger('mousemove').click()
          //   cy.get('.column-list-item').contains('Assays').trigger('mousemove', { clientX: 200, clientY: 300 })
        //  cy.get('.sourceitem').drag('.targetitem')
          //cy.xpath("//span[normalize-space()='Assays']").drag('#cdk-drop-list-3 > :nth-child(9)')
          //cy.xpath("//span[normalize-space()='Assays']").drag('.column-list-item').eq(8).contains('Client')
         // cy.get('.column-list-item').eq(1).contains('Assays').move({ x: 100, y: 100 })
//dndNative(".column-list-item","#cdk-drop-list-1 > :nth-child(9)",true);
//cy.get('.column-list-item').eq(1).contains('Assays').wait(3000).drag('.column-list-item').eq(8).contains('Client')
//cy.xpath("//span[normalize-space()='Assays']").drag('.column-list-item')
 //  cy.get("//span[normalize-space()='Assays']")
 //     //  .first()
 //     //  .focus()
 //      .trigger('dragstart', { dataTransfer });
 //  cy.xpath("//span[normalize-space()='Client']")
 //      .eq(0)
 //      .trigger('drop', { dataTransfer });
 //  cy.xpath("//span[normalize-space()='Assays']")
 //      .first()
 //      .trigger('dragend');

    //cy.xpath("//span[normalize-space()='Assays']").drag(':nth-child(5) > .column-id')
    //cy.xpath("//span[normalize-space()='Assays']").drag('column-id').contains('Client').click()
//      cy.xpath("//span[normalize-space()='Assays']").contains('Assays').trigger('dragstart', { dataTransfer: new DataTransfer });
// cy.xpath("//span[normalize-space()='Client']").trigger('drop').trigger('dragend');
// cy.wait(2000)
//cy.xpath("//button[@class='mat-flat-button mat-button-base flat_button mat-primary ng-star-inserted']").click()
    

//  return this 
// }

   //Register new Donation Error message validation
 //   DuplicateSampleError(){   
 //     cy.get('sq-button.register-donation-button > .mat-flat-button').click(); 
 //     cy.fixture('example').then((data)=>{
 //     cy.get('.single-sample-id').click().type(data.Sample)   
 //     cy.get('sq-button.ng-star-inserted > .mat-flat-button',{ timeout: 30000 }).click();              
 //     cy.wait(5000)
 //     cy.get('.samples-already-exist-error').should('be.visible');
 //     cy.wait(2000)
 //     //Error message

 //   //cy.get('#sq-error-0').contains('Following samples already exist ');
 //   // cy.get('#sq-error-1',{ timeout: 30000 }).should('includes','Following samples already exist');
 //     //cy.get('#sq-select-3 > .mat-select-trigger > .mat-select-value',{ timeout: 30000 }).click({force: true});
 //     cy.wait(4000)
 //     cy.get('.gf-close-blue').click();
 //   })
 //    return this 
 //   }

 //   //Register new Donation for Pool sample
 //   RegisterNewDonationSampleRange(){    
     
 //     cy.get('sq-button.register-donation-button > .mat-flat-button').click()
 //     cy.fixture('example').then((data)=>{
 //     cy.get('input[type="radio"]').check({force: true})
     
 //     cy.get(':nth-child(1) > .input-text').type(data.Prefix);
 //     cy.get('#sq-input-2').type(data.Sample1)  
 //     cy.get('#sq-input-3').type(data.Sample4)  
 //     cy.get('sq-button.ng-star-inserted > .mat-flat-button').click();
 //     cy.wait(5000)
 //     //Tests drop down
 //     cy.get('[aria-label="Choose Assay"]').click().wait(3000)
 //     cy.xpath("//span[@class='mat-option-text']").click()
     
 //     //Tube drop down
 //     cy.get('[aria-label="Choose Tube"]').click().wait(3000)
 //     cy.xpath("//span[normalize-space()='POOL48']").click()
 //     cy.get('[style="flex: 1 1 100%; box-sizing: border-box; max-width: 50%;"] > [fxlayout="column"] > sq-button > .mat-flat-button').click(); //add test btn
 //     cy.get('.button-style > .print-btn-section > sq-button > .mat-flat-button').click();  //create test order btn
 //   })
 //   return this 
 // }
 //   DuplicateSampleRangeError(){   
 //     cy.get('sq-button.register-donation-button > .mat-flat-button').click()
 //     cy.fixture('example').then((data)=>{
 //     cy.get('input[type="radio"]').check({force: true})
 //     cy.xpath("//input[@placeholder='Barcode Prefix']").click().type(data.Prefix)
 //     cy.wait(3000)
 //     cy.get('[placeholder="Sample ID"]').first().click().type(data.Sample1)
 //     cy.get('[placeholder="Sample ID"]').last().click().type(data.Sample4)
 //     cy.get('sq-button.ng-star-inserted > .mat-flat-button').click();
 //     cy.wait(5000)
 //     cy.get('.samples-already-exist-error').should('be.visible');
 //     cy.wait(2000)
 //     cy.get('.mat-stroked-button').click()
   


   // cy.get('input[type="checkbox"]')
   // .each(($elem, index) => {
   //   if (index === 1) {
   //     cy.wrap($elem).click();
   //   }

   // cy.on('window:alert',(str) => {
   // expect(str).to.equal('Test Order created successfully')
   // }