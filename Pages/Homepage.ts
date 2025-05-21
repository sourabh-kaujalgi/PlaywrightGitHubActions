
import {Page} from "@playwright/test"
export default class HomePage{
    constructor(public page:Page){ }

   async clickONSpecialHotMenu(){
    await this.page.getByText("Special").click();
    
    }

    


}