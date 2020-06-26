import React from "react";
import Outcome from "./Outcome";

const List = ({ outcomes }) => {
	return (
		<div className="container">
			<h5 className="text-center">List of outcomes</h5>
			{outcomes.map(outcome => (
				<Outcome key={outcome.id} outcome={outcome} />
			))}
		</div>
	);
};

export default List;
