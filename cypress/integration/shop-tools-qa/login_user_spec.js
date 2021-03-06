import {
    userLogin,
    verifyMyAccountDashboard,
    verifyMyAccountEmptyOrders,
    logOut,
    verifyMyAccountTabs
} from '../../support/page_objects/my_account_page.js';

describe('Login Functionality',()=>{

    beforeEach(() => {
        cy.visitHome();
    })

    before(()=>{
        cy.log("Starting test");
    })

    after(()=>{
        cy.log("All tests completed");
    })

    it('Login a user',()=>{

        cy.visit("/my-account");
        userLogin();
        verifyMyAccountTabs();
        verifyMyAccountDashboard();
        verifyMyAccountEmptyOrders();
        logOut();
    })
})