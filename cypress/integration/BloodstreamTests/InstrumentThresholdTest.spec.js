// <reference types="cypress" />

import LoginPage from '../BloodstreamPageObjects/LoginPage.spec'

import InstrumentThresholdPage from '../BloodstreamPageObjects/InstrumentThresholdPage.spec'

describe('Test Suite', () =>{
  it('InstrumentThresholdPageTest', function() {
   
     let lg = new LoginPage()
     lg.LoginToBS()
    // let reg =new RegNewDonationPage()
    //  reg.DonationScreen()
    //  let ato =new AddTestOrderPage()
    //  ato.AddTestDonationOneSample()
     
   let IT = new InstrumentThresholdPage()
   IT.InstrumentThresholdScreen()
   IT.SetTime()
   cy.wait(2000)
   IT.SetCount()
   IT.ThresholdConfigErrorMsg()
   cy.wait(3000)
  IT.ShiftConfigTabST()
  IT.ShiftConfigTabET()
  IT.ShiftOverlapErrorMessage()
    // reg.TestTubeRepe()
    
    // reg.AddTests()
     cy.wait(3000)
    lg.LogoutBS()
  })
})
