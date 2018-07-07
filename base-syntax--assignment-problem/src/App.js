import React, { Component } from 'react';
import './App.css';
import UserOutput from './component/UserOutput/UserOutput';
import UserInput from './component/UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Aniket'
  };

  nameHandler = (event)=> {
    this.setState({username: event.target.value})
  }

  render() {
    const style = 
    {
      width: `60%`,
      margin: `16px auto`,
      border: `2px solid #eee`,
    }

    return (
      <div className="App">
        <UserInput  name={this.state.username} nameHandler={this.nameHandler} /> 
        <UserOutput style={style} name={this.state.username} />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
      </div>
    );
  }
}

export default App;
