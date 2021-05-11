// <reference types="cypress" />

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


