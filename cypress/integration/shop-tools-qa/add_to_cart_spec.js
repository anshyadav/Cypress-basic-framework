import {
    searchProduct
} from '../../support/page_objects/home_page.js';
import {
    clickProduct,
    verifyRecProducts,
    clickRecProduct
} from '../../support/page_objects/product_page.js';
import {clickBackToShop} from '../../support/page_objects/cart_page.js'


describe('Cart Functionality', () => {

    beforeEach(() => {
        cy.testSetUp();
    })

    before(()=>{
        cy.log("Starting test");
    })

    after(()=>{
        cy.log("All tests completed");
    })

    it('Adding a product to cart', () => {

        searchProduct("Jeans");
        clickProduct(2);
        verifyRecProducts();
        clickRecProduct();
    })

    it('Checking empty cart',()=>{

        cy.visitCart();
        clickBackToShop();
    })
})