// <reference types="cypress" />

import LoginPage from '../BloodstreamPageObjects/LoginPage.spec'

import NotificationConfigPage from '../BloodstreamPageObjects/NotificationConfigPage.spec'


describe('Test Suite', () =>{
  it('NotificationConfigTest', function() {
   
     let lg = new LoginPage()
     lg.LoginToBS()
   
    let nc =new NotificationConfigPage()
     nc.NotificationConfigScreen()
     nc.SeverityConfigTab()
   
    
    // // reg.AddTests()
    //  cy.wait(3000)
     lg.LogoutBS()
  })
})
