const hands = ['rock', 'paper', 'scissor']

describe('User can play the game', () => {
  it('visits the page', () => {
    cy.visit('/')
  });

  it('plays and loose the game', () => {
    cy.get('[data-cy=game-container]').within(() => {
      cy.get('[data-cy=rock-btn]').click()
    })
    cy.get('[data-cy=result]').should('contain', 'You Lost')
  });

  it('plays and tie the game', () => {
    cy.get('[data-cy=game-container]').within(() => {
      cy.get('[data-cy=paper-btn]').click()
    })
    cy.get('[data-cy=result]').should('contain', 'Tie')
  });

  it('plays and win the game', () => {
    cy.get('[data-cy=game-container]').within(() => {
      cy.get('[data-cy=scissor-btn]').click()
    })
    cy.get('[data-cy=result]').should('contain', 'You Won')
  });
})
