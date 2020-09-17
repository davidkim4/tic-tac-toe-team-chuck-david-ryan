import React, { Component } from 'react'
import Square from './components/Square'
import Message from './components/Message'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [...Array(9).fill("")],
      turns: 0
    }
  }

  handleLocation = (indexLocation) => {
    let { squares, turns } = this.state
    if (turns === 9) {
      alert("Game Over")
    }
    else if (squares[indexLocation] === "x" || squares[indexLocation] === "o") {
      alert("Already Selected")
    }
    else {
      if (turns % 2 === 0) {
        squares[indexLocation] = "x"
      }
      else {
        squares[indexLocation] = "o"
      }
      this.setState({squares: squares})
      turns += 1
      this.setState({turns: turns})
      console.log(squares)
    }
  }


   checkWinner = () => {
    let { squares } = this.state

    const winningCombo =
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < winningCombo.length; i++){
    const [a, b, c] = winningCombo[i]
    let winner = squares[a]
      if(squares[a] === squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return winner
      }
    }
  }

  gameResult = () => {
    let{squares, turns} = this.state
    let winner = this.checkWinner
      if (winner === "x" || winner === "o"){
        alert(winner + 'is the winner')
      }
      else if(turns === squares.length){
        alert( "Cats Game")
      }

  }


  render() {
    let { squares, turns } = this.state
    let square = squares.map((square, index) => {
      return (
        <Square
          handleLocation={this.handleLocation}
          xoMark={square}
          index={index}
          checkWinner={this.checkWinner}
        />
      )
    })
    return (
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div id="gameBoard">
          {square}
        </div>
        <Message
          gameResult={this.gameResult}
        />

      </React.Fragment>
    )
  }
}
export default App
