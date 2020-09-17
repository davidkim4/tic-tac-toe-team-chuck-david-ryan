import React, { Component } from 'react'

class Square extends Component {

  handleClick = () => {
    this.props.handleLocation(this.props.index)
    this.props.gameResult(this.props.checkWinner())
  }

  render() {
    return (
      <React.Fragment>
        <div id="square" onClick={this.handleClick}>
          {this.props.xoMark}
        </div>
      </React.Fragment>
    )
  }
}
export default Square
