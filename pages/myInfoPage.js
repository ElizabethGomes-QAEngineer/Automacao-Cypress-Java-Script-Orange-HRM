class myInfoPage { 

    selectorsList () {

         const selectors = { 

              firstName: "[name='firstName']",
              middleName:"[name='middleName']",
              lastName:  "[name='lastName']",
              genericField: ".oxd-input--active",
              nationality: ".oxd-select-text--after",
              maritalStatus: "[tabindex='0']",
              genericData: "[placeholder='yyyy-dd-mm']",
              gender: ".oxd-grid-item",
              saveButton: "[type='submit']"

         }  
         
         return selectors
     }


    personalDetails(firstName,middleName,lastName) {

              cy.get(this.selectorsList().genericField).eq(1).type(firstName)
              cy.get(this.selectorsList().genericField).eq(2).clear().type(middleName)
              cy.get(this.selectorsList().genericField).eq(3).clear().type(lastName)

     }


    employeeData(employeeId,otherId,driveLicenseNumber) {

              cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
              cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
              cy.get(this.selectorsList().genericField).eq(6).clear().type(driveLicenseNumber)
              cy.get(this.selectorsList().genericData).eq(0).type('2024-10-10')
              cy.get(this.selectorsList().nationality).eq(0).click({force: true})

     }

    employeeStatus() {

             cy.get(this.selectorsList().maritalStatus).eq(1).click({force:true})
             cy.get(this.selectorsList().genericData).eq(1).type('2024-10-10')
             cy.get(this.selectorsList().gender).eq(8).click()

     }

    saveForm () {

             cy.get(this.selectorsList().saveButton).eq(1).click()

     }

   }


export default myInfoPage