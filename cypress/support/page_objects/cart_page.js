const returnToShopButton = 'a.wc-backward';

export function clickBackToShop(){
    cy.get(returnToShopButton).invoke('attr', 'href').should('include','https://shop.demoqa.com/shop/');
    cy.get(returnToShopButton).invoke('removeAttr','href');
    cy.get(returnToShopButton).click();
    cy.go('back');
    cy.go('forward');
    cy.get(returnToShopButton).click();
}