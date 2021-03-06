declare namespace Cypress{
    interface Chainable<Subject>{
        /**
         * Redirects you to the home page of the website
         * @example
         * cy.visitHome()
         */
        visitHome(): Chainable<any>
    }
    interface Chainable<Subject>{
        /**
         * Redirects you to the cart page of the website
         * @example
         * cy.visitCart()
         */
        visitCart(): Chainable<any>
    }
    interface Chainable<Subject>{
        /**
         * Deletes all the messages from Mailosaur
         * @example
         * cy.deleteAllMailosaurMessages()
         */
         deleteAllMailosaurMessages(): Chainable<any>
    }
}