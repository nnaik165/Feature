//<reference types="cypress" />

class InstrumentThresholdPage {      
   InstrumentThresholdScreen(){
     cy.get(':nth-child(7) > .mat-list-item-content > span > .menu-block > .content-alignment').invoke('show')
     cy.contains('INSTRUMENT THRESHOLDS').click({force: true});
     cy.url().should('include','instrument-threshold').wait(6000)
        return this      
   }
   SetTime(){
  //Default TIME values in tips, mtu, waste , fluids
  cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true}).wait(1000).get('#mat-input-2').should('have.value', '15');
 cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-8').should('have.value', '15');
 cy.get('#mat-radio-10 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-14').should('have.value', '15');
 cy.get('#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-20').should('have.value', '15').wait(1000)
//Now erase default data and update with new config values 0,35,999 for only fluids in time
 cy.fixture('example').then((data)=>{
 cy.get('#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-20').clear().type(data.CriticalTime)
 cy.get('#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-21').clear().type(data.WarningTime)
 cy.get('#mat-radio-14 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-22').clear().type(data.SoonTime).wait(1000)
 })
 //maintenance & caliberation exp default Time values
 cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force: true}).wait(1000).get('#mat-input-29').should('have.value', '15');
 cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force: true}).wait(1000).get('#mat-input-32').should('have.value', '15');
 cy.get('.save-button'). click();
  return this 
 }

  SetCount(){
    cy.wait(2000)
  cy.get('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true}).wait(1000).get('#mat-input-5').should('have.value', '15');
  cy.get('#mat-radio-8 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-11').should('have.value', '15');
  cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-17').should('have.value', '15');
  cy.get('#mat-radio-16 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-23').should('have.value', '15');
  cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force: true}).wait(1000).get('#mat-input-26').should('have.value', '15');
  cy.get('.save-button'). click().wait(1000)
  return this 
}


ThresholdConfigErrorMsg(){
  cy.fixture('example').then((data)=>{
  cy.get('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({force: true}).wait(1000).get('#mat-input-5').clear().type(data.ErrorCriticalCount)
  cy.get('#mat-radio-8 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle').click({force: true}).wait(1000).get('#mat-input-6').clear().type(data.ErrorWarningCount).wait(1000)
cy.get('[class="threshold-error"]').eq(1).should('be.visible').wait(1000)
  // cy.xpath("//sq-error[@id='mat-error-0']").should('be.visible').wait(1000)
  cy.get('.cancel-button').click().wait(5000)
  })
}
  

ShiftConfigTabST(){
  cy.get('#mat-tab-label-0-1').click().wait(5000)
  cy.get('[d="M-1 1h24v24H-1z"]').first().click()
  cy.fixture('example').then((data)=>{
  //cy.get(':nth-child(2) > .start-time-header > div[_ngcontent-lnk-c525=""] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-prefix > .mat-icon > svg > :nth-child(2) > g > path').click()
  cy.xpath("//owl-date-time-timer-box[1]//label[1]//input[1]").clear().type(data.STHr).wait(1000)
  cy.xpath("//owl-date-time-timer-box[2]//label[1]//input[1]").clear().type(data.STHr).wait(1000)
  cy.get('.owl-dt-timer-hour12 > .owl-dt-control-button > .owl-dt-control-button-content').click().xpath("//span[normalize-space()='Set']").click().wait(1000)
 // cy.xpath("//span[normalize-space()='AM']").click().xpath("//span[normalize-space()='Set']").click()    
  })
}


ShiftConfigTabET(){
 
  cy.get('[d="M-1 1h24v24H-1z"]').eq(1).click()
  cy.fixture('example').then((data)=>{
  //cy.get(':nth-child(2) > .start-time-header > div[_ngcontent-lnk-c525=""] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-prefix > .mat-icon > svg > :nth-child(2) > g > path').click()
  cy.xpath("//owl-date-time-timer-box[1]//label[1]//input[1]").clear().type(data.ETHr).wait(1000)
  cy.xpath("//owl-date-time-timer-box[2]//label[1]//input[1]").clear().type(data.ETMin).wait(1000)
  cy.get('.owl-dt-timer-hour12 > .owl-dt-control-button > .owl-dt-control-button-content').click().xpath("//span[normalize-space()='Set']").click().wait(1000)  
  //cy.get('.owl-dt-timer-hour12 > .owl-dt-control-button > .owl-dt-control-button-content').click().xpath("//span[normalize-space()='Set']").click().wait(1000)  
  //cy.xpath("//span[normalize-space()='PM']").click().xpath("//span[normalize-space()='Set']").click().wait(1000)  
  cy.xpath("//button[@type='submit']").click().wait(3000)
  })
}



  // cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container').click({force: true}).wait(3000).
      //get('#mat-input-5',{ timeout: 10000 }).should('be.visible');
     



      ShiftOverlapErrorMessage(){
 cy.get('[d="M-1 1h24v24H-1z"]').eq(2).click()
 cy.fixture('example').then((data)=>{
  //cy.get(':nth-child(2) > .start-time-header > div[_ngcontent-lnk-c525=""] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-prefix > .mat-icon > svg > :nth-child(2) > g > path').click()
  cy.xpath("//owl-date-time-timer-box[1]//label[1]//input[1]").clear().type(data.ErrorSTHr).wait(1000)
  cy.xpath("//owl-date-time-timer-box[2]//label[1]//input[1]").clear().type(data.ErrorSTMin).wait(1000)
  cy.get('.owl-dt-timer-hour12 > .owl-dt-control-button > .owl-dt-control-button-content').click().xpath("//span[normalize-space()='Set']").click().wait(1000)  
 
  //cy.get('.owl-dt-timer-hour12 > .owl-dt-control-button > .owl-dt-control-button-content').click().xpath("//span[normalize-space()='Set']").click()    
 // cy.xpath("//span[normalize-space()='AM']").click().xpath("//span[normalize-space()='Set']").click()

  cy.get('[d="M-1 1h24v24H-1z"]').eq(3).click()
  //cy.get(':nth-child(2) > .start-time-header > div[_ngcontent-lnk-c525=""] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-prefix > .mat-icon > svg > :nth-child(2) > g > path').click()
  cy.xpath("//owl-date-time-timer-box[1]//label[1]//input[1]").clear().type(data.ErrorETHr).wait(1000)
  cy.xpath("//owl-date-time-timer-box[2]//label[1]//input[1]").clear().type(data.ErrorETMin).wait(1000)
  cy.get('.owl-dt-timer-hour12 > .owl-dt-control-button > .owl-dt-control-button-content').click().xpath("//span[normalize-space()='Set']").click().wait(1000)  
 
  //cy.get('.owl-dt-timer-hour12 > .owl-dt-control-button > .owl-dt-control-button-content').click().xpath("//span[normalize-space()='Set']").click().wait(1000)  
  //cy.xpath("//span[normalize-space()='PM']").click().xpath("//span[normalize-space()='Set']").click().wait(1000)  
   cy.xpath("//button[@type='submit']").click()
   cy.xpath("//span[contains(text(),'Shift Overlap - A time period cannot be associated')]").should('be.visible').wait(1000)
   cy.get(':nth-child(2) > .trash-icon > .mat-icon').click().wait(1000).get('.save-button').click().wait(1000)  
 })
  }
     
    
}
export default  InstrumentThresholdPage
