import React, { Component } from 'react'
import {Button, Container, Header, Icon} from 'semantic-ui-react'
import _ from 'lodash'

const hands = ['rock', 'paper', 'scissor']
class App extends Component {

  state = {
    p1: hands[0],
    p2: hands[0],
    winner: ""
  }

  play = () => {
    this.setState({
      p2: hands[_.floor(_.random(_.size(hands)))],
      winner: this.selectWinner()
    })
  }

  chooseHand = () => {
    this.setState({
      p1: hands
    })
  }

  selectWinner = () => {
    const { p1, p2 } = this.state

    if (p1 === p2) {
      return 'Tie'
    } else if (
      (p1 === 'rock' && p2 === 'scissor') ||
      (p1 === 'scissor' && p2 === 'paper') ||
      (p1 === 'paper' && p2 === 'rock')
    ) {
      return 'You Won'
    } else {
      return 'You Lost'
    }
  }


  render() {
    const { winner } = this.state
    return (
      <>
        <Container >
          <Header id='header' as='h1' data-cy='game-header' textAlign='center'>R.P.S</Header>
          <Header id='score' data-cy='result' as='h3' textAlign='center'>{winner ? this.selectWinner() : null}</Header>
          <Container data-cy='game-container'>
            <Button.Group id='buttons' fluid>
              <Button data-cy='rock-btn' value="rock" size="massive" onClick={() => this.chooseHand[0], this.play }>
                <Icon name='rock hand' size='huge' />
                </Button>
              <Button data-cy='scissor-btn' value="scissor" size="massive" onClick={() => this.chooseHand[2], this.play }>
                <Icon name='hand scissors' size='huge'/>
                </Button>
              <Button data-cy='paper-btn' value="paper" size="massive" onClick={() => this.chooseHand[1], this.play }>
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