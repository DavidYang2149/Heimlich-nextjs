describe('입력 화면', () => {
  it('입력 화면을 확인합니다', () => {
    cy.visit('http://localhost:3000/lactation')

    cy.get('main > h1').contains(/수유 일지/i);
  });

  it('분유 버튼을 클릭합니다', () => {
    cy.get('#breastMilk').should('be.checked').and('have.value', 'breastMilk')

    cy.get('#PowderedBottleMilk').check();

    cy.get('#breastMilk').should('not.be.checked').and('have.value', 'breastMilk')
    cy.get('#PowderedBottleMilk').should('be.checked').and('have.value', 'PowderedBottleMilk')
  });

  it('수유 용량을 입력합니다', () => {
    cy.get('#amount').should('have.value', 0);

    cy.get('#amount').type('{backspace}')
    cy.get('#amount').type(40);

    cy.get('#amount').should('have.value', 40);
  });
});
