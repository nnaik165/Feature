
class CCMPage {  
    Configuration(){
       
        cy.get(':nth-child(7) > .mat-list-item-content > span > .menu-block > .content-alignment').invoke('show')
        cy.contains('CLIENT CODE MATRIX').click({force: true});
        cy.url().should('include','configuration')

        //  ASSAY CONFIG TAB
    //     cy.fixture('example').then((data)=>{
    //     cy.get('.button-border > sq-button > .mat-flat-button').click()
    //     cy.wait(3000);
    //     cy.get('[placeholder="Add new assay"]').last().click().type(data.Assay).should('be.visible');
    //     cy.wait(3000)
    //     cy.get('[placeholder="Add display name"]').last().click().type(data.AssayDesc).should('be.visible');
    //     cy.get('[placeholder="Add assay abbreviation"]').last().click().type(data.AssayAbbr).should('be.visible');
    //     cy.wait(3000)
    //     cy.get('#undefined > label > div').last().click()
    //     cy.get('[aria-label="Choose parent assays"]').last().click({ timeout: 30000 })
    //   //  cy.get('mat-select-placeholder').last().click()
    //     cy.xpath("//span[normalize-space()='WNV']").wait(1000).click({force: true});
    //     cy.get('[fxlayout="row-reverse"] > [color="primary"] > .mat-flat-button').click()
    //     cy.wait(5000)
    //     })

    //   //  ADD CLIENT CODE TAB
    //     cy.xpath("//div[contains(text(),'CLIENT PARAMETERS')]").click()
    //     cy.wait(5000)
    //     cy.xpath("//span[normalize-space()='Add Client Code']").click()
    //     cy.wait(5000)
    //     cy.fixture('example').then((data)=>{
    //     cy.get('[placeholder="Add new client code"]').last().wait(3000).click().type(data.Code).wait(3000)
    //     cy.get('[placeholder="DESCRIPTION"]').last().type(data.Description).click().wait(1000).should('be.visible');
    //     cy.xpath("//span[normalize-space()='Client Codes']").dblclick();
    //     cy.get('.field-height > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').last().dblclick({force: true});
    //     cy.get('[aria-label="Choose Assay"]').click().xpath("//span[@class='mat-option-text'][normalize-space()='WNV']").click();
    //     cy.wait(1000)
    //     cy.get('[aria-label="POOL SIZE *"]').click().xpath("//span[normalize-space()='48']").click().wait(3000)
    //    // cy.get('mat-cell cdk-column-intermediateMasterPool mat-column-intermediateMasterPool ng-star-inserted ng-touched ng-dirty ng-invalid').should('be.enabled')
    //     cy.get('[aria-label=" INTERMEDIATE MASTER POOL *"]').click().xpath("//span[@class='mat-option-text'][normalize-space()='8']").click();
    //     cy.get('sq-button.save-button > .mat-flat-button').click({force: true});
    //     })
        
    //    // Pooling Prefixes
    //     cy.xpath("//div[contains(text(),'POOLING PREFIXES')]").click()
    //     cy.fixture('example').then((data)=>{
    //     cy.wait(3000)
    //     cy.get('[formarrayname="lysatePrefix"]').last().click().type(data.lysatePrefix).wait(1000).should('be.visible');
    //     cy.get('[formarrayname="masterPrefix"]').last().click().type(data.masterPrefix).wait(1000).should('be.visible');
    //     cy.get('[formarrayname="largePrefix"]').last().click().type(data.largePrefix).wait(1000).should('be.visible');
    //     cy.get('.mat-flat-button').click({force: true});
    // })

    //   //Validate Duplicate Assay error message
    //     cy.xpath("//div[contains(text(),'ASSAY CONFIGURATION')]").click()
    //     cy.fixture('example').then((data)=>{
    //     cy.get('.button-border > sq-button > .mat-flat-button').click()
    //     cy.wait(3000);
    //     cy.get('[placeholder="Add new assay"]').last().click().type(data.Assay)
    //     cy.wait(3000)
    //     cy.get('[placeholder="Add display name"]').last().click()
    //     cy.get('.display-error ').last().should('be.visible')
    //     cy.xpath("//span[normalize-space()='Cancel']").click()
    //     cy.wait(3000)
    //     })
    //  //Validate Duplicate Client Code error message
    //     cy.xpath("//div[contains(text(),'CLIENT PARAMETERS')]").click()
    //     cy.wait(5000)
    //     cy.xpath("//span[normalize-space()='Add Client Code']").click()
    //     cy.wait(5000)
    //     cy.fixture('example').then((data)=>{
    //     cy.get('[placeholder="Add new client code"]').last().wait(3000).click().type(data.Code).wait(3000)
    //     cy.get('[placeholder="DESCRIPTION"]').last().type(data.Description).click()
    //     cy.get('.mat-error ').last().should('be.visible')
    //     cy.xpath("//span[normalize-space()='Cancel']").click()
    //     cy.wait(3000)
    //     })
    // //Validate Duplicate Prefix error message
    //      cy.xpath("//div[contains(text(),'POOLING PREFIXES')]").click()
    //      cy.wait(3000)
    //      cy.fixture('example').then((data)=>{
    //      cy.wait(3000)
    //      cy.get('[formarrayname="lysatePrefix"]').last().click().type(data.lysatePrefix).wait(1000).should('be.visible');
    //      cy.get('[formarrayname="masterPrefix"]').last().click()
    //      cy.get('.mat-error ').last().should('be.visible')
    //      cy.xpath("//span[normalize-space()='Cancel']").click()
    //      cy.wait(3000)
    //     })

        //Update the Assay desc
        cy.xpath("//div[contains(text(),'ASSAY CONFIGURATION')]").click()
        cy.fixture('example').then((data)=>{
       // cy.get('.button-border > sq-button > .mat-flat-button').click()
      //  cy.wait(3000);
      
       cy.xpath("//sq-cell[normalize-space()='COR']").get('[placeholder="Add assay abbreviation"]').contains('CORNA').click()
       //xpath("//sq-row[2]//sq-cell[3]").click({force: true}).wait(2000)
       cy.clear()
       //click().clear().type(data.AssayDescUpdate)
        //get('mat-form-field-label-wrapper').contains('COR').click()
        //get('[placeholder="Add assay abbreviation"]').wait(1000).clear()
        cy.get('[fxlayout="row-reverse"] > [color="primary"] > .mat-flat-button').click({force: true});
        // cy.get('[placeholder="Add new assay"]').last().click().type(data.AssayDescUpdate)
        // cy.wait(3000)
       
        //cy.xpath("//span[normalize-space()='Cancel']").click()
        cy.wait(3000)
        })

    //    //Delete  the Assay desc
    //     cy.xpath("//div[contains(text(),'ASSAY CONFIGURATION')]").click()
    //     cy.fixture('example').then((data)=>{
    //    // cy.get('.button-border > sq-button > .mat-flat-button').click()
    //   //  cy.wait(3000);
    //     cy.xpath("//sq-cell[normalize-space()='COR']").xpath("//sq-row[2]//sq-cell[8]//span[1]//sq-icon[1]").click()    
    //     cy.wait(2000)
    //      cy.get('[fxlayout="row-reverse"] > [color="primary"] > .mat-flat-button').click({force: true});
    //     cy.wait(3000)
    //     })
    return this 
    }
}

    export default CCMPage
        
        
           
















    //     cy.get('.link-selected > .mat-list-item-content > span > .menu-block > .content-alignment').click();
    //     cy.get('.virtual-scroll').scrollTo('bottom')
    //     cy.get('#mat-tab-label-0-1').click();
    //      cy.get('sq-button.ng-star-inserted > .mat-flat-button').click();
        
    
    //    //prefix page
        
    //      cy.get(' #mat-tab-label-0-2').click();
    //       cy.get('#master-pool-prefixes > :nth-child(5) > .field-height > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    //       cy.get('.mat-flat-button').click();



    // return this 
    //        }
    //        }
        
       