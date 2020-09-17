import React, { Component } from 'react'


export default class Message extends Component {
  render(){
    return(
      <>
        <div id= "message">
          <h2>{this.props.gameResult}</h2>
        </div>
      </>
    )
  }

}
