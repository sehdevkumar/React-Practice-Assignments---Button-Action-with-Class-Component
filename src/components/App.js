import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    
    constructor(props) {
        super(props);
    this.state = {
      isShow: false
    }
    this.btnClick = this.btnClick.bind(this);
    };
    
  btnClick() {
    //console.log('btn clicked');
    this.setState({isShow: true})
  }
    
    render() {
        return(
            <div id="main">
                { /* Do not remove this main div!! */ }
      <h1>hello manisha</h1>
      <button id="click" onClick={this.btnClick}>click me</button>
      {this.state.isShow && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
            </div>
        );
    }
}


export default App;
