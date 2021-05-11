//<reference types="cypress" />

class TestsPage {      
    TestsScreen(){
        cy.get(':nth-child(2) > .mat-list-item-content > span > .menu-block > .content-alignment')
       .get('.dropdown-content')
       .invoke('show')
       .contains('TESTS')
       .click({force: true})
        cy.wait(4000)  
   }
 //Search Test IDT in Donation Screen
 SearchIDTTestsScreen(){
  cy.fixture('example').then((data)=>{
   cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon > svg').click();
   cy.xpath("//span[normalize-space()='Tube ID']").click();
   cy.get('[placeholder="Search by column names"]').click().type(data.PT_TubeID).should('be.visible')
  cy.get(':nth-child(3) > .mat-button-wrapper > .mat-icon').click().wait(3000)
  // cy.xpath("//sq-icon[@class='mat-icon material-icons gf-icon-search mat-icon-no-color ng-star-inserted']").click().wait(3000)
   cy.xpath("//mat-cell[normalize-space()='Pending Test']").should('contain','Pending Test') 
   cy.wait(3000)
  })
 }

//Testpagefilter
TestPageActiveFilterPT(){
  cy.xpath("//span[normalize-space()='+ Filters']").click()
  cy.get('.mat-checkbox-label', { timeout: 30000 })
  .contains('Pending Test')
  .click({force: true});
 // cy.get('.div.custom-filter-content.ng-star-inserted').contains('Pending Test').click()
 // cy.xpath("//div[@class='filter-options']").should('contain','Pending Test').should('be.visible').get('.status > :nth-child(6) > .ng-untouched > #undefined > .mat-checkbox-layout > .mat-checkbox-label').click({force: true});
 //cy.get('.status > :nth-child(6) > .ng-untouched > #undefined > .mat-checkbox-layout > .mat-checkbox-label').click({force: true});
 // cy.xpath("//label[@for='mat-checkbox-1142-input']//span[@class='mat-checkbox-label']").click()
  cy.xpath("//span[normalize-space()='Apply']").click().wait(3000)

}

//Testpagefilter
TestPageActiveFilterPL(){
  cy.xpath("//span[normalize-space()='+ Filters']").click()
  cy.get('.mat-checkbox-label', { timeout: 30000 })
  .contains('Pending Lysate')
  .click({force: true});
 // cy.get('.div.custom-filter-content.ng-star-inserted').contains('Pending Test').click()
 // cy.xpath("//div[@class='filter-options']").should('contain','Pending Test').should('be.visible').get('.status > :nth-child(6) > .ng-untouched > #undefined > .mat-checkbox-layout > .mat-checkbox-label').click({force: true});
 //cy.get('.status > :nth-child(6) > .ng-untouched > #undefined > .mat-checkbox-layout > .mat-checkbox-label').click({force: true});
 // cy.xpath("//label[@for='mat-checkbox-1142-input']//span[@class='mat-checkbox-label']").click()
  cy.xpath("//span[normalize-space()='Apply']").click().wait(3000)

}
TestPageActiveFilterPP(){
  cy.xpath("//span[normalize-space()='+ Filters']").click()
  cy.get('.mat-checkbox-label', { timeout: 30000 })
  .contains('Pending Pool')
  .click({force: true});
 // cy.get('.div.custom-filter-content.ng-star-inserted').contains('Pending Test').click()
 // cy.xpath("//div[@class='filter-options']").should('contain','Pending Test').should('be.visible').get('.status > :nth-child(6) > .ng-untouched > #undefined > .mat-checkbox-layout > .mat-checkbox-label').click({force: true});
 //cy.get('.status > :nth-child(6) > .ng-untouched > #undefined > .mat-checkbox-layout > .mat-checkbox-label').click({force: true});
 // cy.xpath("//label[@for='mat-checkbox-1142-input']//span[@class='mat-checkbox-label']").click()
  cy.xpath("//span[normalize-space()='Apply']").click().wait(3000)

}


  //Add Test order for IDT sample in Donation Page
  AddTestsTestPage(){   
    cy.get('.mat-checkbox-inner-container').eq(1).wait(1000).click().xpath("//span[normalize-space()='Add Test Order']").should('be.visible').click().wait(1000)
   // cy.get('.mat-checkbox-inner-container').first().wait(1000).click().xpath("//span[normalize-space()='Add Test Order']").should('be.visible').click()
    return this 
}  


//testdropdown
TestTubeRepeIDT_SingleAssays(){
    //Test drop down
  //  cy.xpath("#mat-select-0").click(
    cy.get('[role="combobox"]').eq(1).click().xpath("//span[normalize-space()='WNV']").click() 
    cy.wait(2000)
    cy.get('[role="combobox"]').eq(2).click().xpath("//span[normalize-space()='IDT']").click()
    cy.wait(2000)
    cy.get('[role="combobox"]').eq(3).click().xpath("//span[normalize-space()='1']").click()
    cy.xpath("//span[normalize-space()='Add Test']").click().wait(1000)
    cy.xpath("//span[normalize-space()='Create Test Order']").click({force: true});
   // cy.get('[style="flex: 1 1 100%; box-sizing: border-box; max-width: 50%;"] > [fxlayout="column"] > sq-button > .mat-flat-button').click().wait(1000)//add test btn
  //cy.get('.print-btn-section > sq-button > .mat-flat-button').click()
    // cy.xpath("//div[@class='print-btn-section']//button[@type='button']").click({force: true});
   //  cy.get('.button-style > .print-btn-section > sq-button > .mat-flat-button').click();
    cy.wait(1000)
  }
  
  TestTubeRepeIDT_MultipleAssays(){
      //Test drop down
    //  cy.xpath("#mat-select-0").click(
      cy.get('[role="combobox"]').eq(1).click().xpath("//span[normalize-space()='WNV']").click() 
      cy.wait(2000)
      cy.get('[role="combobox"]').eq(2).click().xpath("//span[normalize-space()='IDT']").click()
      cy.wait(2000)
      cy.get('[role="combobox"]').eq(3).click().xpath("//span[normalize-space()='1']").click()
      cy.xpath("//span[normalize-space()='Add Test']").click().wait(1000)

      cy.get('[role="combobox"]').eq(1).click().xpath("//span[normalize-space()='DENV']").click() 
      cy.wait(2000)
      cy.get('[role="combobox"]').eq(2).click().xpath("//span[normalize-space()='IDT']").click()
      cy.wait(2000)
      cy.get('[role="combobox"]').eq(3).click().xpath("//span[normalize-space()='1']").click()
      cy.xpath("//span[normalize-space()='Add Test']").click().wait(1000)
      cy.xpath("//span[normalize-space()='Create Test Order']").click({force: true});
     // cy.get('[style="flex: 1 1 100%; box-sizing: border-box; max-width: 50%;"] > [fxlayout="column"] > sq-button > .mat-flat-button').click().wait(1000)//add test btn
    //cy.get('.print-btn-section > sq-button > .mat-flat-button').click()
      // cy.xpath("//div[@class='print-btn-section']//button[@type='button']").click({force: true});
     //  cy.get('.button-style > .print-btn-section > sq-button > .mat-flat-button').click();
      cy.wait(1000)
    }

//testdropdown
TestTubeRepePool(){
  //Test drop down
  cy.get('[role="combobox"]').eq(0).click().xpath("//span[normalize-space()='WNV']").click() 
    cy.wait(2000)
    cy.get('[role="combobox"]').eq(1).click().xpath("//span[normalize-space()='POOL4']").click()
    cy.wait(2000)
    cy.xpath("//span[normalize-space()='Add Test']").click().wait(1000)
    cy.xpath("//span[normalize-space()='Create Test Order']").click({force: true});
  
//   cy.get('[style="flex: 1 1 100%; box-sizing: border-box; max-width: 50%;"] > [fxlayout="column"] > sq-button > .mat-flat-button').click().wait(1000)//add test btn
// cy.get('.print-btn-section > sq-button > .mat-flat-button').click()
  // cy.xpath("//div[@class='print-btn-section']//button[@type='button']").click({force: true});
 //  cy.get('.button-style > .print-btn-section > sq-button > .mat-flat-button').click();
  cy.wait(1000)
}

AddFlags_Tests(){
  
        cy.get('[svgicon="more_horiz"]').invoke('show').wait(2000).first().click({force: true})
        cy.wait(5000)
       cy.get('[class="example-box"]').should('be.visible').click().wait(1000)
       cy.get('.flag-container .mat-checkbox-layout > .mat-checkbox-inner-container',{ timeout: 30000 }).first().click({force: true});
      // cy.xpath("//span[normalize-space()='QNS']").click().wait(1000)
       cy.xpath("//span[normalize-space()='Add Flags']").click()
   // cy.get('.mat-checkbox-inner-container').eq(1).wait(1000).click().get('[class="example-box"]').should('be.visible').click().wait(1000)
   // cy.get('.mat-checkbox-inner-container').first().wait(1000).click().xpath("//span[normalize-space()='Add Test Order']").should('be.visible').click()
   return this 

}


//Search Test IDT in Donation Screen
SearchPoolTestsScreen(){
  cy.fixture('example').then((data)=>{
      //cy.xpath("//span[normalize-space()='Clear Filter']").click()
      cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon > svg').click();
      cy.xpath("//span[normalize-space()='Tube ID']").click();
      cy.get('[placeholder="Search by column names"]').type(data.PP_TubeID).should('be.visible')
      cy.get(':nth-child(3) > .mat-button-wrapper > .mat-icon').click().wait(3000)
    // cy.xpath("//sq-icon[@class='mat-icon material-icons gf-icon-search mat-icon-no-color ng-star-inserted']").click().wait(3000)
      cy.xpath("//mat-cell[normalize-space()='Pending Test']").should('contain','Pending Pool') 
      cy.wait(3000)
  })
}

//Search Test IDT in Donation Screen
SearchPoolTestsScreen_PL(){
  cy.fixture('example').then((data)=>{
      cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon > svg').click();
      cy.xpath("//span[normalize-space()='Tube ID']").click();
      cy.get('[placeholder="Search by column names"]').click().wait(1000).type(data.PL).should('be.visible')
      cy.get(':nth-child(3) > .mat-button-wrapper > .mat-icon').click().wait(3000)
    // cy.xpath("//sq-icon[@class='mat-icon material-icons gf-icon-search mat-icon-no-color ng-star-inserted']").click().wait(3000)
      cy.xpath("//mat-cell[normalize-space()='Pending Lysate']").should('contain','Pending Lysate') 
      cy.wait(3000)

  })
}


AddFlags_PL(){
  cy.xpath("//span[normalize-space()='+ Filters']").click()
  cy.get('.mat-checkbox-label', { timeout: 30000 })
  .contains('Pending Lysate')
  .click({force: true});
 // cy.get('.div.custom-filter-content.ng-star-inserted').contains('Pending Test').click()
 // cy.xpath("//div[@class='filter-options']").should('contain','Pending Test').should('be.visible').get('.status > :nth-child(6) > .ng-untouched > #undefined > .mat-checkbox-layout > .mat-checkbox-label').click({force: true});
 //cy.get('.status > :nth-child(6) > .ng-untouched > #undefined > .mat-checkbox-layout > .mat-checkbox-label').click({force: true});
 // cy.xpath("//label[@for='mat-checkbox-1142-input']//span[@class='mat-checkbox-label']").click()
  cy.xpath("//span[normalize-space()='Apply']").click().wait(3000)


  
}



TestPageAddNotes(){
  cy.fixture('example').then((data)=>{
  cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon > svg').click();
      cy.xpath("//span[normalize-space()='Tube ID']").click();
      cy.get('[placeholder="Search by column names"]').type(data.PT_TubeID).should('be.visible')
      cy.get(':nth-child(3) > .mat-button-wrapper > .mat-icon').click().wait(3000)
      cy.get('[svgicon="more_horiz"]').invoke('show').wait(2000).first().click({force: true})
      cy.wait(5000)
      cy.get('[data-mat-icon-name="gf-add-note"]').click().wait(3000).xpath("//textarea[@placeholder='Leave a note']").wait(1000).type(data.TestPageAddNote).wait(2000)
      //cy.get('.example-list > :nth-child(4)').click().wait(3000).xpath("//textarea[@placeholder='Leave a note']").wait(1000).type(data.TestPageAddNote).wait(2000)
      cy.xpath("//span[contains(text(),'Post')]").click()
      cy.get('[alt="addNote"]').first().should('be.visible')

      cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon > svg').click();
      cy.xpath("//span[normalize-space()='Tube ID']").click();
      cy.get('[placeholder="Search by column names"]').type(data.PT_TubeID).should('be.visible')
      cy.get(':nth-child(3) > .mat-button-wrapper > .mat-icon').click().wait(3000)
      cy.get('[svgicon="more_horiz"]').invoke('show').wait(2000).eq(0).click({force: true})
      cy.get('[data-mat-icon-name="gf-add-note"]').click().wait(3000).get(':nth-child(1) > .message-text').should('be.visible').wait(1000)
      cy.xpath("//div[@class='gf-close-blue']").click()
  })
  }



}

 export default TestsPage