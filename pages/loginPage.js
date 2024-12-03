class loginPage { 

    getUserData() { 

         return {

              userSucess:{username:'Admin', password:'admin123'},
              userFail:{username:'test',password:'test'}

          }
    }
  
    selectorsList() { 
     
        const Selectors = { 
    
              userNameField: "[name='username']",
              passwordField:"[name='password']",
              buttonField:"[type='submit']",
              wrongCredentialAlert:"[role='alert'] "

         }
         
         return Selectors 
    } 

    acessLoginPage() {cy.visit('auth/login')}

    
    loginWithUser(username,password) { 

              cy.get(this.selectorsList().userNameField).type(username)
              cy.get(this.selectorsList().passwordField).type(password)
              cy.get(this.selectorsList().buttonField).click()
    
    }

    checkInavalidCredential () {

              cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible').and('contain', 'Invalid credentials')

    }

} 

export default loginPage