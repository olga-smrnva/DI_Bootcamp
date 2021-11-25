const Hello = (props) => {
	// console.log(props.name);
	const{name, username} = props;
	return(
		<>
			<h1>Hello {props.name}</h1>
			<h3>{props.username}</h3>
		</>
	);
};
export default Hello;