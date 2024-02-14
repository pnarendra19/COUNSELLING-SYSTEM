import React, { Component } from 'react'

class Message extends Component {

constructor(props) {
  super(props)

  this.state = {
     Message:'Welcome to Visiters'
  }
}   
changeMessage(){
    this.setState({
        Message: 'Thank You For Subscribing'
     })
}

render() {
    return (
      <div><center>
      <h1>{this.state.Message}</h1>
      <button onClick={()=>this.changeMessage()}>Subscribe</button></center></div>
    )
  }
}

export default Message