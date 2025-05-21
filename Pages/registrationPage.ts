import {Page} from "@playwright/test"

export default class ResgistartionPage{
  

    constructor(public page:Page){

    }
   async enterFirstName(firstname:string){

       await this.page.locator("#input-firstname")
       .fill(firstname)
    }

    async enterLasttName(lastname:string){

        await this.page.locator("#input-lastname")
        .fill(lastname)
        
     }

     async enterEmail(email:string){

        await this.page.locator("#input-email")
        .fill(email)
        
     }

     async enterTelephone(telephone:string){

        await this.page.locator("#input-telephone")
        .fill(telephone)
     }
     async enterPassword(password:string){

        await this.page.locator("#input-password")
        .fill(password)
     }
     async enterConfirmPassword(conirmpassword:string){

        await this.page.locator("#input-confirm")
        .fill(conirmpassword)
     }
   
     async clickTermandCondition(){
        await this.page.locator("input[id='input-agree']")
      //  window.getComputedStyle(document.querySelector('.agree'),'::after').getPropertyValue('background')
     // const someCSSPropertyValue=await this.page.locator('<selector>').first()
     // .evaluate(el =>  window.getComputedStyle(el, ':after').someCSSProperty)
     }
     async clicktoRegister(){
        await this.page.click("input[value='Continue']")
     }


   
}