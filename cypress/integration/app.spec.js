describe('앱 메인 화면', () => {
  it('메인 화면을 확인합니다', () => {
    cy.visit('http://localhost:3000/')

    cy.get('main > h1').contains(/수유 기록하기/i);
  });
});
