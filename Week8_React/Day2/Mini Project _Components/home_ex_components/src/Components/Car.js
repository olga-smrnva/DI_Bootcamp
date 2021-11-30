import React, { Component } from 'react';
import Garage from './Garage'; //Part3 

//Part1
// const Car = () => {
// 	return (
// 		<div>
// 			<h2>Hi, I am a Car!</h2>
// 		</div>
// 	);
// };

//Part2
class Car extends Component {
	constructor() {
		super();
		this.state = {
		  color: 'red',
		};
	};

	render() {
		const { info } = this.props;
		return (
			<div>
				<header>
					{info.name}
					{info.model}
				</header>
				<Garage size='small'/>
				<h2 style={{ color: this.state.color }}>Hi, I am a Car!</h2>
			</div>
		);
	}
}

export default Car;



