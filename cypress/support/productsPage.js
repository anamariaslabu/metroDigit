
export class ProductsPage{

    getCookieOKButton() {
        return cy.get('#cookiebotDialogOkButton')
    }

    getFirstItem() {
        return cy.get('[data-id="3330659"]')
    }

    getSecondItem() {
        return cy.get('[data-id="3310801"] a')
    }

 





}

export const productsPage = new ProductsPage