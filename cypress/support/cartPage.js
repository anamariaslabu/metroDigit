
export class cartPage{

    getFirstItem() {
        return cy.get('[data-id="3330659"] a')
    }

    getSecondItem() {
        return cy.get('[data-id="3310801"] a')
    }

 





}

export const cartPage = new CartPage