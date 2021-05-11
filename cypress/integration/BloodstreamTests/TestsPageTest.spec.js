// <reference types="cypress" />

import LoginPage from '../BloodstreamPageObjects/LoginPage.spec'
import TestsPage from '../BloodstreamPageObjects/TestsPage.spec'

describe('Test Suite', () =>{
  it('TestsPageTest', function() {
   
     let lg = new LoginPage()
     lg.LoginToBS()
      let Tests =new TestsPage()
      Tests.TestsScreen()
     // Tests.SearchPoolTestsScreen()
 //Tests.SearchIDTTestsScreen() 
  //  Tests.TestPageActiveFilterPL()
  Tests.SearchPoolTestsScreen_PL()
  Tests.AddFlags_Tests()
      //Tests.TestPageActiveFilterPT()
      //Tests.AddTestsTestPage()
   //   Tests.TestTubeRepeIDT()
//   Tests.TestTubeRepeIDT_MultipleAssays()
   //   Tests.SearchIDTTestsScreen()

      // Tests.SearchIDTTestsScreen()
      // Tests.TestPageActiveFilterPT()
      // Tests.AddTestsTestPage()
      // Tests.TestTubeRepePool()
      // Tests.SearchPoolTestsScreen()
 // Tests.TestPageAddNotes()

//Tests.AddFlags_Tests()

  //reg.RegisterNewDonationOneSample()
   //reg.SearchIDTDonationScreen()
  //reg.DuplicateSampleError()
  //reg.RegisterNewDonationSampleRange()
 // reg.DuplicateSampleRangeError()
    // cy.wait(5000)
    // reg.AddTests()
    // cy.wait(5000)
    // lg.LogoutBS()
  })

 
  //Tests.AddFlags_PL()
  

  //reg.DuplicateSampleError()
  //reg.RegisterNewDonationSampleRange()
 // reg.DuplicateSampleRangeError()
    // cy.wait(5000)
    // reg.AddTests()
    // cy.wait(5000)
    // lg.LogoutBS()

})