import React from "react";
const Error = ({ message }) => {
	return (
		<div className="container">
			<div className="alert alert-error">
				<h5 className="text text-center">{message}</h5>
			</div>
		</div>
	);
};

export default Error;
