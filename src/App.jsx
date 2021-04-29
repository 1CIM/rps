import React, { Component } from 'react'
import {Button, Container, Header, Icon} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Header data-cy='game-header' >R.P.S</Header>
          <Container data-cy='game-container'>
            <Button.Group>
              <Button data-cy='rock-btn' value="rock">
                <Icon name='rock hand' size='huge' />
                </Button>
              <Button data-cy='scissor-btn' value="scissor">
                <Icon name='hand scissors' size='huge'/>
                </Button>
              <Button data-cy='paper-btn' value="paper">
                <Icon name='paper hand' size='huge'/>
                </Button>
            </Button.Group>
          </Container>
        </Container>
      </>
    )
  }
}

export default App