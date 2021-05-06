import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	     this.state = {data:""};
	};
	
     

    render() {
    	return(
    		<div id="main">
		       <p id="para">{this.state.data}</p>
                    <button id="click" onClick={() => this.setState({ data: this.state.data="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy" })}>
                  Click me
                 </button>
            </div>
    	);
    }
}


export default App;

