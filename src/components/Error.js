import React from "react";
const Error = ({ message }) => {
	return (
		<div className="container">
			<div className="alert alert-danger">
				<h5 className="text text-center"> {message} </h5>{" "}
			</div>{" "}
		</div>
	);
};

export default Error;
