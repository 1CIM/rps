const hands = ['rock', 'paper', 'scissor']

describe('User can play the game', () => {
  it('visits the page', () => {
    cy.visit('/')
  });

  it('plays the game', () => {
    cy.get('[data-cy=game-container]').within(() => {
      cy.get('[data-cy=rock-btn]').click()
      cy.get('[data-cy=result]').should('be.visible')
    })
  });
})
