// <reference types="cypress" />

import LoginPage from '../BloodstreamPageObjects/LoginPage.spec'
import RegNewDonationPage from '../BloodstreamPageObjects/RegNewDonationPage.spec'
import AddTestOrderPage from '../BloodstreamPageObjects/AddTestOrderPage.spec'


describe('Test Suite', () =>{
  it('AddTestOrderPagetest', function() {
   
     let lg = new LoginPage()
     lg.LoginToBS()
    let reg =new RegNewDonationPage()
     reg.DonationScreen()
     let ato =new AddTestOrderPage()
     ato.AddTestDonationOneSample()
    // reg.TestTubeRepe()
    
    // reg.AddTests()
     cy.wait(3000)
    lg.LogoutBS()
  })
})
