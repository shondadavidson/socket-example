import React, { Component } from 'react';
import io from 'socket.io-client'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      message: '',
      messages: [],
      userId: 0,
      friendId: 0,
      room: 0,
      user: ''
    }
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    this.socket.disconnect()
  }

  

  joinRoom = () => {
    
  }


  sendMessage = () => {

  }

  render() {
    const mappedMessages = this.state.messages.map((message, i) => {
      return (
        <div key={i}>
          <p>name: {message.user}</p>
          <p>Message: {message.msg}</p>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>Learn Socket.IO</h1>
        <p>What is your name?</p>
        <input
          type="text"
          placeholder='name'
          value={this.state.user}
          onChange={(e) => this.setState({ user: e.target.value })} />
        <p>What room do you want to join?</p>
        <input
          type="integer"
          placeholder='room'
          value={this.state.room}
          onChange={(e) => this.setState({ room: e.target.value })} />

        {/* <p>What is your ID?</p>
       
        <button onClick={this.joinRoom}>Join Room</button>

        <input
          type="integer"
          placeholder='userId'
          value={this.state.userId}
          onChange={(e) => this.setState({ userId: e.target.value })} />

        <p>What is your friend Id?</p>
        <input
          type="integer"
          placeholder='friendId'
          value={this.state.friendId}
          onChange={(e) => this.setState({ friendId: e.target.value })} />

        <button onClick={() => this.joinRoom(this.state.userId, this.state.friendId)}>Join Room</button> */}


        <h5>You are in room {this.state.room}</h5>
        <p>What would you like to say?</p>
        <input
          type="text"
          placeholder='message'
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })} />
        <button onClick={this.sendMessage}>Send Message</button>
        {mappedMessages}
      </div>
    );
  }
}


export default App;
