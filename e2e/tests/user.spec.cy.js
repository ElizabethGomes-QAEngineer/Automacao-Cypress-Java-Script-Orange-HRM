import loginPage from '../../pages/loginPage.js' 

import dashBoardPage from '../../pages/dashBoardPage.js'

import acessMyInfoPage from '../../pages/acessMyInfoPage.js'

import myInfoPage from '../../pages/myInfoPage.js'


const Chance = require('chance') 
const chance = new Chance()
const loginPageInstance = new loginPage() 
const dashBoardPageInstance= new dashBoardPage()
const acessMyInfoInstance= new acessMyInfoPage()
const myInfoPageInstance = new myInfoPage ()



describe('Orange HRM',()=> {
 
      beforeEach(() => {
          

            loginPageInstance.acessLoginPage()

            const userData = loginPageInstance.getUserData().userSucess
            
            loginPageInstance.loginWithUser(userData.username,userData.password) 
      
      })

    
      it('Tests : dashBoard , acess my info , personal details ',()=> {


            dashBoardPageInstance.dashBoardAcessVerification()

            acessMyInfoInstance.acessMyInfo() 

            myInfoPageInstance.personalDetails( chance.name(),chance.string(),chance.last()) 
    
            myInfoPageInstance.employeeData(chance.string(),chance.ssn(),chance.ssn()) 
    
            myInfoPageInstance.employeeStatus() 
     
            myInfoPageInstance.saveForm() 

      })

}) 






 
