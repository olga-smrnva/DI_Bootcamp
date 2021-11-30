import React from 'react';

const Alert = (props) => {
	const { text, show } = props;
	return (
		<div class="alert alert-danger" role="alert">
			{text}
		</div>
	);
};

export default Alert;