import React from "react";
const Outocome = ({ outcome }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-10">{outcome.subject}</div>
				<div className="col-2 float-right">$ {outcome.amount}</div>
			</div>
		</div>
	);
};

export default Outocome;
