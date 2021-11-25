import './Card.css'
const Card = (props) => {
	const {robot} = props;
	const {id, name, email, username} = robot;
		return(
			<div className="txt-align-center">
				<img src={`https://robohash.org/${id}?size=200x200`} />
				<h2>{name}</h2>
				<p>{email}</p>
				<h4>{username}</h4>
			</div>
		) 
};

export default Card;