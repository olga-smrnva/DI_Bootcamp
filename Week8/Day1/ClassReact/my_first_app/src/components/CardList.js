import Card from "./Card";

const CardList = (props) => {
	const {arr_robots} = props;
	return(
		<div>
			{
				arr_robots.map(item => {
					return<Card robot={item} />
				})
			}
		</div>
	)
};
export default CardList;