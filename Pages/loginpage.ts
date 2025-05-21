
import {Page} from "@playwright/test"
export default class loginPage{

    constructor(public page:Page){

    }
async enterUsername(username:string){

    await this.page.getByPlaceholder('E-Mail Address')
    .fill(username)
 }

 async enterPassword(password:string){

     await this.page.getByPlaceholder('Password')
     .fill(password)
  }

  async clickloginbutton(password:string){

    await this.page.click("input[value='Login']")
 }
}
