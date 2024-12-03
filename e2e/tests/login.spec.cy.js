import loginPage from '../../pages/loginPage.js' 

const loginPageInstance = new loginPage() 


describe('Orange HRM', () => { 
 
      it('Login with Sucess',() => {

          loginPageInstance.acessLoginPage()

          const userData = loginPageInstance.getUserData().userSucess
 
          loginPageInstance.loginWithUser(userData.username,userData.password) 
       })
    
 
       it('Login Fail',() => { 
 
          loginPageInstance.acessLoginPage()
 
          const userFail = loginPageInstance.getUserData().userFail
    
          loginPageInstance.loginWithUser(userFail.username,userFail.password)
 
          loginPageInstance.checkInavalidCredential()
 
       })

})




  

  






