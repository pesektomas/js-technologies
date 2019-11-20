import React from "react";

export default class TestElement extends React.Component {

	state = {
		counter: 0
	}

	handleClick = () => {
		console.log('clicked');
		this.setState(state => ({
			counter: ++ state.counter
		}));
	}

	render() {
		return <>
			<div>{this.props.title}</div>
			
			<div><button onClick={this.handleClick}>click me</button></div>
			
			<div>counter: {this.state.counter}</div>
		</>;
	}
}
