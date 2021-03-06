const productsList = 'div.noo-product-inner >h3 >a';

export function clickProduct(productIndex){

    cy.get(productsList, {timeout:3000}).should('have.length',4).eq(productIndex).click();
    cy.get('.product_title').should('be.visible').should('contain.text','jeans');
    cy.url().should('include','https://shop.demoqa.com/product/');
}

export function verifyRecProducts(){
    cy.get('div.products.noo-row').find('h3>a');
}

export function clickRecProduct(){
    cy.get('div.products.noo-row').find('h3>a').eq(2).click();
}