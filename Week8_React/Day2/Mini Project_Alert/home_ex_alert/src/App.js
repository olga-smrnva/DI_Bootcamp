import './App.css';
import Alert from './components/Alert';
import "bootstrap/dist/css/bootstrap.min.css"; 

//Ex1
const message = 'OMG! Something really bad has happended!'

function App() {
	return (
		<div className="App">
			<Alert text={message}/>
		</div>
	);
}

export default App;
