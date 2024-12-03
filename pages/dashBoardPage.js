class dashBoardPage { 
 
    selectorsList() {
 
        return {

              dashBoardTopBar: ".oxd-topbar " ,
              dashBoardLayout:".oxd-layout" ,
              locationUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
               
               }
    }

    dashBoardAcessVerification() {
  

              cy.location('pathname').should('equal','/web/index.php/dashboard/index')

              cy.get(this.selectorsList().dashBoardLayout).should('be.visible')

              cy.get(this.selectorsList().dashBoardTopBar).click()


    }
}

export default dashBoardPage


