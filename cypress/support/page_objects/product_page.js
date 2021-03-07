const productsList = 'div.noo-product-inner >h3 >a';
const colorSelectBox = '#pa_color';
const sizeSelectBox = '#pa_size';
const addToCartButton = '.single_add_to_cart_button';

export function clickProduct(productIndex){

    cy.get(productsList, {timeout:3000}).should('have.length',4).eq(productIndex).click();
    cy.get('.product_title').should('be.visible').should('contain.text','jeans');
    cy.url().should('include','https://shop.demoqa.com/product/');
    cy.get(colorSelectBox).select('Dark Blue');
    cy.get(sizeSelectBox).select('37');
    cy.get(addToCartButton).click();

}

export function verifyRecProducts(){
    cy.get('div.products.noo-row').find('h3>a');
}

export function clickRecProduct(){
    cy.get('div.products.noo-row').find('h3>a').eq(2).click();
}