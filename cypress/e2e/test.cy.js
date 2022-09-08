/// <reference types="cypress" />


describe('UI tests framework', () => {
    beforeEach(() => {
        cy.visit('https://www.emag.ro/seturi-constructie/brand/lego/filter/colectie-f6613,duplo-v-1261807/c')
        // cy.url().should('contain', '/cpl/' )
    })
  
    it('Add two items to the cart', () => {
        cy.get('button[data-offer-id="7772468"]').should('be.visible').click()
        cy.get('.modal-header .mrg-sep-none').should('be.visible').and('contain', 'Produsul a fost adaugat in cos')
        cy.get('.modal-header button').should('be.visible').find('i').click()
        cy.get('button[data-offer-id="7772468"]').should('be.visible').click()
        cy.get('.modal-header .mrg-sep-none').should('be.visible').and('contain', 'Produsul a fost adaugat in cos')
        cy.get('.modal-header button').should('be.visible').find('i').click()
        cy.get('[id="my_cart"] .jewel.jewel-danger').should('be.visible').and('contain', '2')
        
    })

    it('Remove one item from the cart', () => {
        cy.get('[id="my_cart"]').should('be.visible').click()
        cy.get('.select2-selection__clear').should('be.visible').and('contain', '1')
    })

    // it('Remove second item from the cart', () => {
    //     cy.get('[id="my_cart"]').should('be.visible').click()
    //     cy.get('[id="empty-cart"]>div').eq(0).should('be.visible').and('contain', 'Cosul tau este gol')
    //     cy.get('.empty-cart-primary-btn').should('be.visible')
        
    // })

  


})
