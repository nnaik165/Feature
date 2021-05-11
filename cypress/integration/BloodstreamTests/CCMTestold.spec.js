/// <reference types="cypress" />

import LoginPage from '../BloodstreamPageObjects/LoginPage.spec'
import CCMPage from '../BloodstreamPageObjects/CCMPage.spec'

describe('Test Suite', () =>{
  it('CCMTest', function() {
   
     let lg = new LoginPage()
     lg.LoginToBS()
     let cm =new CCMPage()
     cm.Configuration()
    // cy.wait(5000)
     lg.LogoutBS()
  })
})




 //-----------------------------
 /*
 describe('Test Suite', () =>{
  it('CCMTest', function() {
   
    const CCMPageobj=new CCMPage();
    
   
    cy.visit("https://tw16-bdl-ins2/Bloodstream/configuration")
    CCMPageobj.getConfigMenu().click();
    CCMPageobj.getClientParamTab().click();
    CCMPageobj.getAddClientCodeButton().click();
  })
  })
  */