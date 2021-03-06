describe('Device Based Tests',()=>{
    beforeEach(() => {
        cy.testSetUp();
    })

    before(()=>{
        cy.log("Starting test");
    })

    after(()=>{
        cy.log("All tests completed");
    })

    it('720p',()=>{
        cy.viewport(1280,720);
        cy.visit('/');
        cy.wait(5000);

    })
    it('1080p',()=>{
        cy.viewport(1980,1080);
        cy.visit('/');
        cy.wait(5000);

    })
    it('iPad',()=>{
        cy.viewport('ipad-2');
        cy.visit('/');
        cy.wait(5000);

    })
    it('macbook',()=>{
        cy.viewport('macbook-16');
        cy.visit('/');
        cy.wait(5000);

    })
})