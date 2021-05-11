// <reference types="cypress" />

import LoginPage from '../BloodstreamPageObjects/LoginPage.spec'
import AutoApprovalConfigPage from '../BloodstreamPageObjects/AutoApprovalConfigPage.spec'

describe('Test Suite', () =>{
  it('AutoApprovalConfigPageTest', function() {
    let lg = new LoginPage()
     lg.LoginToBS()
     let APC =new AutoApprovalConfigPage()
     APC.ApprovalConfigScreen()
     lg.LogoutBS()
    })
  })
  