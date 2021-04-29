describe('User can see the game board', () => {
  it('visits the page', () => {
    cy.visit('/')
  });

  it('displays the game', () => {
    cy.get('[data-cy=game-header]').should('contain', 'R.P.S')
    cy.get('[data-cy=game-container]').within(() => {
      cy.get('[data-cy=rock-btn]').should('have.value', 'rock')
      cy.get('[data-cy=scissor-btn]').should('have.value', 'scissor')
      cy.get('[data-cy=paper-btn]').should('have.value', 'paper')
    })
  });
})
