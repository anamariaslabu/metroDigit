
export class itemPage{

    addToCart() {
        return cy.get('.add-to-cart-text')
    }

    selectSizeButton() {
        return cy.get('.size-selected') //verificare data-selen="sezi-selected" > ... text
    }

    dropdownSize() {
        return cy.get('.size-list-overlay.visible')
    }

    selectSizeFromGroup() {
        return cy.get('[data-selen="product-size-group"]') //.find('li') // list with sizes
    }

 





}

export const itemPage = new ItemPage