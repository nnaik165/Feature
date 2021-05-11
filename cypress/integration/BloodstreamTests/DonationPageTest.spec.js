// <reference types="cypress" />

import LoginPage from '../BloodstreamPageObjects/LoginPage.spec'
import DonationPage from '../BloodstreamPageObjects/DonationPage.spec'

describe('Test Suite', () =>{
  it('DonationPagetest', function() {
   
     let lg = new LoginPage()
     lg.LoginToBS()
     let reg =new DonationPage()
     reg.DonationScreen()
    // reg.ActiveFilterLast30DaysPPrep() 
   //  reg.ActiveFilterLast14DaysPTest()
    // reg.SearchIDTDonationScreenPPrep()
   // reg.AddFlagsDonationPagePPrep()
   reg.SearchIDTDonationScreenPTest()
  // reg.AddFlagsDonationPagePT()
    //  reg.SearchIDTDonationScreenPPrep()
    //  reg.AddFlagsDonationPagePT()
    //  reg.FlagandNoteIconVisible()
  //   reg.ActiveFilterLast14DaysPTest()
  //reg.RegisterNewDonationOneSample()
 // reg.SearchIDTDonationScreen()
  //reg.DuplicateSampleError()
  //reg.RegisterNewDonationSampleRange()
 // reg.DuplicateSampleRangeError()
     cy.wait(5000)
    // reg.AddTests()
    // cy.wait(5000)
  //  lg.LogoutBS()
  })
})
