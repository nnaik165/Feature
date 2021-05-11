//<reference types="cypress" />

import LoginPage from '../BloodstreamPageObjects/LoginPage.spec'
describe('Login to Bloodstream', () =>{
  it('logins to Bloodstream', () =>{
    let lg = new LoginPage()
    lg.LoginToBS()
    lg.LogoutBS()
  })
})



/*
---------------------------------


import LoginPage from '../BloodstreamPageObjects/LoginPage.spec'
describe('Test Suite', () =>{
before(function(){
  cy.fixture('example').then(function(data)
  {
    this.data=data;
  })
})

it('LoginTest', function() {
  
  const LoginPageobj=new LoginPage();
  
  
  cy.visit("https://tw16-bdl-ins2/Bloodstream/login")
  LoginPageobj.getUserName().type(this.data.Username);
 
  
  LoginPageobj.getLoginButton().click();
 
  cy.title().should('be.equal', 'Bloodstream')

 

  })
})


//   it('Valid Login Test', () =>{
     
//       const lp = new LoginPageOB()
//       lp.visit()
//       lp.fillUsername('IM_ADMIN')
//       //lp.fillPassword()
//       lp.LoginButton()
//       cy.title().should('be.equal', 'Bloodstream')

//   })
// })

*/



