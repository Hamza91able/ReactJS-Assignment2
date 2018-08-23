import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello World",
      toggle: true
    }
  }

  updateState() {
    this.setState({
      text: (this.state.toggle) ? "Hello Pakistan" : "Hello World",
      toggle: !this.state.toggle
    })
  }

  renderDifference() {
    const myFuncTxt = "{this.myFunc}"
    const myFuncTxtThis = "{() => this.myFunc()}"
    const myFuncTxtThisBind = "{this.myFunc.bind(this)}"
    const myFuncTxtThisBindExample = "{this.myFunc.bind(this,arg1,arg2,arg3)}"
    return (
      <div>
        <h3>Difference between onClick={myFuncTxt}, onClick={myFuncTxtThis} & onClick={myFuncTxtThisBind} and when to use which one</h3>
        <h4>1. {myFuncTxt}</h4>
        <p>
          {myFuncTxt} stores the myFunc function into the onClick event and when the event is triggered then the function is also triggered. Downside of using this method is we can't pass arguments in the function and we can't use "this" to refer parent class's elements.
        </p>
        <h4>2. {myFuncTxtThis}</h4>
        <p>
          Using a call back (Arrow) functions allows the function to attain the parent class's "this" allowing us to use "this" to refer parent class's elements inside the function. This is possible because of the nature of arrow function.
        </p>
        <h4>3. {myFuncTxtThisBind}</h4>
        <p>
          This is similar to {myFuncTxt} but in this we can't use "this" so to overcome this problem we use the keyword "bind" to data bind "this" to the "myFunc" function. This results in "this" being binded to the function which in return allows us to use "this" in function to access parent class's elements. It also allows us to pass arguments in function. Eg: {myFuncTxtThisBindExample}
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={() => this.updateState()}>{this.state.text}</h1>
        </header>
        {this.renderDifference()}
      </div>
    );
  }
}

export default App;
