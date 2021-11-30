import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; //Ex2

//Ex1
const PrintHello = () => {
	return(<h1>I am a React Component</h1>)
};

//Ex2
const BootstrapCard = (props) => {
	const { info } = props;
	return(
		<div className="card m-5" style={{ width: "30rem" }}>
		<img className="card-img-top" src={info.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{info.title}</h5>
				<p className="card-text">{info.description}</p>
				<a href={info.buttonUrl} className="btn btn-primary">
				{info.buttonLabel}
				</a>
			</div>
	  </div>
	);
};

//Ex3
const infoPaulMccartney = {
	title: "McCartney",
	imageUrl:
	  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
	buttonLabel: "Go to Wikipedia",
	buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
	description:
	  "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.",
};

const infoBobDylan = {
	title: "Bob Dylan",
	imageUrl: "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
	buttonLabel: "Go to Wikipedia",
	buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
	description:
	  "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
};

//Ex4
const Jumbotron = (props) => {
	const { info } = props;
	return(
		<div className="p-5 bg-light">
			<h1 className="mb-3">{info.title}</h1>
			<h4 className="mb-3">{info.description}</h4>
			<a className="btn btn-primary" href={info.buttonURL} role="button">
			{info.buttonLabel}
			</a>
		</div>
	);
};

const jumboInfo = {
	title: "Welcome to React!",
	description: "React is the most popular rendering library in the world",
	buttonLabel: "Go to the official website",
	buttonURL: "https://reactjs.org/",
};

function App() {
	return (
		<div className='App'>
			{/* <PrintHello /> */}
			<BootstrapCard info={infoPaulMccartney} />
      		<BootstrapCard info={infoBobDylan} />

			<Jumbotron info={jumboInfo} />
			
		</div>
	);
};

export default App;
