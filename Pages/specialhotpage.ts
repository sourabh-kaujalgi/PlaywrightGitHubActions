import {Page} from "@playwright/test"
import { strict } from "assert"
export default class Specialhotpage{
    constructor(public page:Page){ }
 

    async clickOnCOntinue(){
        await this.page.click("#button-continue")
        }


        async addProducttocart(){
            await this.page.hover("img[class='lazy-load']",{strict:false})
            await this.page.locator('fas fa-shopping-cart').locator('nth=0').click();
            
        }


}   