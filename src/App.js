import React, { Component } from 'react'
import Square from './components/Square'
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
      turns += 1
    }
  }


  const checkWinner = () => {
    let { squares } = this.state
    [0, 1, 2],
      [3, 4, 5],
    [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  }

  checkWinningCombo = () => {
    for
  }

  render() {
    let { squares, turns } = this.state
    let square = squares.map((square, index) => {
      return (
        <Square
          handleLocation={this.handleLocation}
          xoMark={square}
          index={index}
        />
      )
    })
    return (
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div id="gameBoard">
          {square}
        </div>
      </React.Fragment>
    )
  }
}
export default App
