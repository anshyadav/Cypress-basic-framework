import {
    registerUser,
    userLoginWordPress,
} from '../../support/page_objects/my_account_page.js';

describe('Registeration Functionality',()=>{

    beforeEach(() => {
        cy.visitHome();
    })

    before(()=>{
        cy.log("Starting test");
    })

    after(()=>{
        cy.log("All tests completed");
    })

    it('Register a new user', () => {

        cy.visit("/my-account");
        registerUser();
        userLoginWordPress();
    })
})