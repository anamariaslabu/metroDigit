/// <reference types="cypress" />


describe('UI tests framework', () => {
    before(() => {
        cy.visit('https://www.emag.ro/seturi-constructie/brand/lego/filter/colectie-f6613,duplo-v-1261807/c')
        cy.clearCookies()
    })

   
  
    it('Add two items to the cart', () => {
        cy.get('[data-pnk^="DDM8QGBBM"] button').should('be.visible').click()
        cy.get('.modal-header .mrg-sep-none').should('be.visible').and('contain', 'Produsul a fost adaugat in cos')
        cy.get('.modal-header button').should('be.visible').find('i').click()
        cy.get('[data-pnk^="DNWQ6KMBM"] button').eq(0).should('be.visible').click()
        cy.get('.modal-header .mrg-sep-none').should('be.visible').and('contain', 'Produsul a fost adaugat in cos')
        cy.get('.modal-header button').should('be.visible').find('i').click()
        cy.get('[id="my_cart"] .jewel.jewel-danger').should('be.visible').and('contain', '2')

        Cypress.Cookies.defaults({
            preserve: ['_dc_gtm_UA-220157-3','eab773', 'site_version_11', '_pdr_internal', 'ltuid', 'EMAGROSESSID', 'EMAGUUID', 
        'cart_summary', 'token1', 'eab_allocation', 'EMAGVISITOR']
        })
        
    })

    it('Remove one item from the cart', () => {
        cy.get('[id="my_cart"]').should('be.visible').click()
        cy.get('.btn-remove-product').eq(0).should('be.visible').click()
        cy.get('[id="my_cart"]').should('be.visible').click()
        cy.get('[id="my_cart"] .jewel.jewel-danger').should('be.visible').and('contain', '1')

        Cypress.Cookies.defaults({
            preserve: ['_dc_gtm_UA-220157-3','eab773', 'site_version_11', '_pdr_internal', 'ltuid', 'EMAGROSESSID', 'EMAGUUID', 
        'cart_summary', 'token1', 'eab_allocation', 'EMAGVISITOR']
        })
    })

    it('Remove second item from the cart', () => {
        cy.get('[id="my_cart"]').should('be.visible').click()
        cy.get('.btn-remove-product').should('be.visible').click()
        cy.get('[id="empty-cart"]>div').eq(0).should('be.visible').and('contain', 'Cosul tau este gol')
        cy.get('.empty-cart-primary-btn').should('be.visible')  
        
    })

  


})
