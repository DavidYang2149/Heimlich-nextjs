describe('입력 화면', () => {
  it('메인 화면을 확인합니다', () => {
    cy.visit('http://localhost:3000/lactation')

    cy.get('main > h1').contains(/수유 일지/i);
  });
});
