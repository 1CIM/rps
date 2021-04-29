describe('User can play the game', () => {
 
  it('plays and loose the game', () => {
    cy.visit('/', {
      onBeforeLoad(window) {
        cy.stub(window.Math, 'random').returns(0);
      }
    });
    cy.get('[data-cy=game-container]').within(() => {
      cy.get('[data-cy=rock-btn]').click()
    })
    cy.get('[data-cy=result]').should('contain', 'Tie')
  });

  it('plays tie the game', () => {
    cy.visit('/', {
      onBeforeLoad(window) {
        cy.stub(window.Math, 'random').returns(1)
      }
    });
    cy.get('[data-cy=game-container]').within(() => {
      cy.get('[data-cy=paper-btn]').click()
    })
    cy.get('[data-cy=result]').should('contain', 'You Lost')
  });

  it('plays and win the game', () => {
    cy.visit('/', {
      onBeforeLoad(window) {
        cy.stub(window.Math, 'random').returns(2)
      }
    });
    cy.get('[data-cy=game-container]').within(() => {
      cy.get('[data-cy=scissor-btn]').click()
    })
    cy.get('[data-cy=result]').should('contain', 'You Won')
  });
})