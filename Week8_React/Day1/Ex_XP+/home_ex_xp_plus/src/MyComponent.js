import React from 'react';
import logo from './logo.svg';
import './MyComponent.css'

const mystyle = {
	color: "white",
	backgroundColor: "DodgerBlue",
	padding: "10px",
	fontFamity: "Arial"
};

const mySuperStyle = {
	color: "yellow",
	fontSize: "16px",
	fontWeight: "bold",
	border: "1px solid yellow",
	backgroundColor: "black",
	padding: "5px",
	borderRadius: "8px",
	margin: "10px",
	coursor: "pointer"

};

const MyComponent = () => {
	return (
		<div>
			<h1 style={{"color": "red", "background": "lightblue"}}>Hello Style</h1>
			<h1 style={mystyle}>Hello Style!</h1>
			<button style={mySuperStyle}>I'm a stylish button</button>
				
			<h1 className='newStyle'>This is a header</h1> 
			<p>
				This is a paragraph
			</p>
			<a href='#'>This is a link</a>
			<h2>This is a form</h2>
			<form>
				<label>Enter your name</label> <br/>
				<input type='text'></input>
				<input type='submit'></input>
			</form>
			<h3>Here is an Image</h3>
			<img src={logo}></img>
			<h3>Here is a List</h3>
			<ul>
				<li>Coffee</li>
				<li>Tee</li>
				<li>Milk</li>
			</ul>
		</div>
	);
};

export default MyComponent;