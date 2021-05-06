import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
	state={
	data:""
	};
    constructor(props) {
		super(props);
	  
	};
	
     
  btnClick(){
  
	this.setState({data:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"});
  
  };	

    render() {
    	return(
    		<div id="main">
		       <p id="para">{this.state.data}</p>
                    <button id="click" onClick={this.btnClick}>Click me</button>
            </div>
    	);
    }
}


export default App;

