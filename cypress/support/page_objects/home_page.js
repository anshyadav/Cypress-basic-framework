const searchIcon = '.noo-search';
const searchInput = 'input.form-control';


export function searchProduct(searchTerm){

    cy.get('div.search-header').should('not.have.class','search-header-eff');
    cy.get(searchIcon).click().then(()=>{
        cy.get('div.search-header').should('have.class','search-header-eff');
        cy.get(searchInput).type(searchTerm+ '{enter}');
    })
    
}

