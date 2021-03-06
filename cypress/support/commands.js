import 'cypress-mailosaur'
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("testSetUp", () => {
    cy.visit('https://shop.demoqa.com/');
    cy.log('Webiste loaded.');
    cy.clearCookies({log:true});
    
});

Cypress.Commands.add("visitHome", () => {
    cy.visit('https://shop.demoqa.com/');
    cy.log('Webiste loaded.');
});

Cypress.Commands.add("visitCart", () => {
    cy.visit('https://shop.demoqa.com/cart/');
    cy.log('Webiste loaded.');
});

Cypress.Commands.add('deleteAllMailosaurMessages', () => {
    cy.mailosaurDeleteAllMessages("o3cv0vxv");
})

Cypress.Commands.add('verifySubjectOfMailosaurMessage', (subjectLine) => {
    cy.mailosaurGetMessage('o3cv0vxv', {
        subject: subjectLine
    }).then((message) => {
        assert.equal(message.subject,subjectLine,"Mail subject not equal");
    });
})