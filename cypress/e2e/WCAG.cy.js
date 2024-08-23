
describe('Accessibility',()=>{

    it('should run accessibility audits',()=>{
        cy.visit('https://innovaminerals.cl/inicio');
        cy.injectAxe();
        cy.checkA11y();


    });

});