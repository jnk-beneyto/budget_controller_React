import React, { Fragment, useState } from "react";
import Error from "./Error";

const SetBudget = ({ setTotalBudget, setDiffBudget, setShowSetBudget }) => {
	// set default amount state 0
	const [amount, setAmount] = useState(0);
	// set default Error state false
	const [error, setError] = useState(false);

	//fetching data from input
	const defineAmount = e => {
		setAmount(parseInt(e.target.value));
	};

	//validating data
	const submitBudget = e => {
		e.preventDefault();

		if (amount < 1 || isNaN(amount)) {
			setError(true);
			return;
		}

		setError(false);

		//modyfiyng totalBudget and diffBudget
		setTotalBudget(amount);
		setDiffBudget(amount);
		setShowSetBudget(false);
	};

	return (
		<Fragment>
			<div className="container bg-light mt-2">
				<div className="row">
					<div className="col-md-4 offset-md-4">
						{" "}
						{error ? <Error message="There's an error" /> : null}{" "}
					</div>{" "}
					<div className="col-md-4 offset-md-4">
						<form onSubmit={submitBudget}>
							<div className="form-group">
								<label htmlFor="nombre"> Set amount in Euros: </label>{" "}
								<input
									type="number"
									name="budget"
									className="form-control"
									placeholder="300"
									onChange={defineAmount}
								/>{" "}
							</div>{" "}
							<div className="form-group">
								<input
									type="submit"
									name="add"
									className="form-control btn btn-success"
									value="add"
								/>
							</div>{" "}
						</form>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</Fragment>
	);
};

export default SetBudget;
