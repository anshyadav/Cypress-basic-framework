import {
    registerUser,
    userLogin,
    userLoginWordPress,
    verifyMyAccountDashboard,
    verifyMyAccountEmptyOrders,
    logOut,
    verifyMyAccountTabs
} from '../../support/page_objects/my_account_page.js';
import {
    searchProduct
} from '../../support/page_objects/home_page.js';
import {
    clickProduct,
    verifyRecProducts,
    clickRecProduct
} from '../../support/page_objects/product_page.js';
import {clickBackToShop} from '../../support/page_objects/cart_page.js'

//Group 1
describe('Test Group', () => {

    beforeEach(() => {
        cy.visitHome();
    })

    before(()=>{
        console.log("starting test");
    })
    after(()=>{
        console.log("All tests completed");
    })

    it('test', () => {

        searchProduct("Jeans");
        clickProduct(2);
        verifyRecProducts();
        clickRecProduct();
    })

    it.only('new', () => {

        cy.visit("/my-account");
        registerUser();
        //userLoginWordPress();
        //userLogin();
        //verifyMyAccountTabs();
        //verifyMyAccountDashboard();
        //verifyMyAccountEmptyOrders();
        //logOut();
        //cy.visitCart();
        //clickBackToShop();
    })

})