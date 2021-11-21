import './App.css';
import React from 'react';
import CardList from './components/CardList';

const robots = [
	{id:1, name:'John', email:'robobo@gmail.com', username:'johnjohn'},
	{id:2, name:'Don', email:'ololo@gmail.com', username:'dondon'}
];

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			arr:[],
			// textInput:'ololo'
		};
		console.log('constructor');
	};

	componentDidMount(){
		console.log('CDM');
		// fetch('')
	};
	
	render() {
		console.log('render');
		const {arr} = this.state;
		console.log(arr);
		return (
			<div >
				<h1>Robots</h1>
				{/* {textInput} */}
				{/* <CardList arr_robots={robots} /> */}
			</div>
	)};
};

export default App;
