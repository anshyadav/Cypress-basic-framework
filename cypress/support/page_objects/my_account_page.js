const registrationUsernameInput = '#reg_username';
const registrationEmailInput = '#reg_email';
const registrationPasswordInput = '#reg_password';
const registrationButton = '.woocommerce-Button';
const loginWPUsernameInput = '#user_login';
const loginWPPassowrdInput = '#user_pass';
const loginWPButton = '#wp-submit';
const loginUsernameInput = '#username';
const loginPassowrdInput = '#password';
const loginRememberMe = '#rememberme';
const loginButton = 'button.woocommerce-form-login__submit';
const dashboardContent = '.woocommerce-MyAccount-content > p';
const mailhog = require("mailhog")();

export async function registerUser() {
    cy.deleteAllMailosaurMessages();
    let date = Date.now();
    let name = "Dummy_Holder_" + date;
    let email =date + "@o3cv0vxv.mailosaur.net";
    let password = "UnlockMe101!@#";
    cy.get(registrationUsernameInput).type(name);
    cy.get(registrationEmailInput).type(email);;
    cy.get(registrationPasswordInput).type(password);
    cy.get(registrationButton).click();

    cy.writeFile('cypress/fixtures/registered_users.json', {
        id: 1,
        name: name,
        email: email,
        password: password
    })
    cy.wait(5000);
    cy.verifySubjectOfMailosaurMessage("Your ToolsQA Demo Site account has been created!");
}

export function userLoginWordPress() {

    cy.fixture('registered_users').then(user => {
        cy.get(loginWPUsernameInput).type(user.name);
        cy.get(loginWPPassowrdInput).type(user.password);
        cy.get(loginWPButton).click();
    });
}

export function userLogin() {

    cy.fixture('registered_users').then(user => {
        cy.get(loginUsernameInput).trigger('focus').type(user.name);
        cy.get(loginPassowrdInput).type(user.password);
        cy.get(loginRememberMe).click();
        cy.get(loginButton).click();
    });
    cy.title().should('have.text','My Account – ToolsQA Demo Site');
}

//verify all the tabs of my account. Here using should function instead of then because then function will not retry but should will.
export function verifyMyAccountTabs(){
    cy.get('nav>ul>li>a').should(item =>{
        expect(item[0]).to.contain.text('Dashboard');
        expect(item[1]).to.contain.text('Orders');
        expect(item[2]).to.contain.text('Downloads');
        expect(item[3]).to.contain.text('Addresses');
        expect(item[4]).to.contain.text('Account details');
        expect(item[5]).to.contain.text('Logout');
    })
}

export function verifyMyAccountDashboard() {

    cy.fixture('registered_users').then(user => {
        cy.get(dashboardContent).should('have.text', '\n\tHello ' + user.name + ' (not ' + user.name + '? Log out)\n\tFrom your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.')
    });

}

export function verifyMyAccountEmptyOrders() {

    cy.visit('https://shop.demoqa.com/my-account/orders/');
    cy.get('.woocommerce-message').should('have.text', '\n\t\tBrowse products\n\t\tNo order has been made yet.\t');

}

export function logOut() {
    //you can trigger JS events by trigger()
    cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').trigger('focus');
    cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click();
    cy.get('.u-column2').should('be.visible');
}