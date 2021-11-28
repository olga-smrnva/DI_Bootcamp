import './App.css';

function App() {
	//3.1.
	const myelement = <h2>I Love JSX!</h2>;
	const sum = 5+5;

	//4.2
	const listItems = 
		<ul>
			<li>Apples</li>
			<li>Bananas</li>
			<li>Cherries</li>
		</ul>

	//6
	const object = {
		first_name: 'Bob',
		last_name: 'Dylan'
	};

	//7
	const animals = ['Horse','Turtle','Elephant','Monkey'];
	const li_animals = animals.map((animal, index) => {
		return(
			<li key={index}>{animal}</li>
		);
	});

	const animals_new = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];
	const li_animals_new = animals_new.map((animal, index) => {
		return(
			<li key={index}>{animal.label}</li>
		);
	});

	
	return (
		<div className="App">
			#1. Hello World <br/>
			
			#3.1.{myelement}
			#3.2 React is {sum} times better with JSX
			
			<h1> #4.1 I am a header</h1> 
			<h1>I am a header too</h1>

			#4.2 {listItems}

			#5 <input type='text'/> <br/><br/>

			#6 My name is {object.first_name} <br/>
			My last name is {object.last_name} <br/><br/>

			#7.1 
			<ul> 
				{li_animals}
			</ul> 
			#7.2
			<ul> 
				{li_animals_new}
			</ul> 
		</div>
	);
}

export default App;
