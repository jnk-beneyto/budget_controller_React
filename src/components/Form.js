import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Form = ({ setOutcome, setCreateOutC }) => {
	const [error, setError] = useState(false);
	const [amount, setAmount] = useState(0);
	const [subject, setSubject] = useState("");

	const getQuantity = e => {
		setAmount(parseInt(e.target.value));
	};

	const getSubject = e => {
		setSubject(e.target.value);
	};

	const addOutcome = e => {
		e.preventDefault();

		//validating
		if (amount < 1 || isNaN(amount) || subject === "") {
			setError(true);
			return;
		}

		setError(false);

		//building object
		const outcome = {
			subject,
			amount,
			id: shortid.generate()
		};

		//passing outcome to App component
		setOutcome(outcome);

		//turn true list line
		setCreateOutC(true);

		//reset form
		setAmount(0);
		setSubject("");
	};

	return (
		<div className="container bg-light">
			<h3 className="text text-center my-2"> Set data </h3>{" "}
			{error ? <Error message={"missing or incorrect data"} /> : null}
			<div className="row">
				<form onSubmit={addOutcome}>
					<div className="form-group ml-3">
						<label htmlFor="subject"> Subject: </label>{" "}
						<input
							type="text"
							name="subject"
							placeholder="f.i. : transport"
							value={subject}
							onChange={getSubject}
						/>{" "}
					</div>{" "}
					<div className="form-group ml-3">
						<label htmlFor="amount"> Quantity: </label>{" "}
						<input
							type="number"
							name="amount"
							placeholder={200}
							value={amount}
							onChange={getQuantity}
						/>{" "}
					</div>{" "}
					<div className="form-group pb-2 ml-3">
						<input type="submit" value="Add" className="btn btn-primary" />
					</div>{" "}
				</form>{" "}
			</div>{" "}
		</div>
	);
};

export default Form;
