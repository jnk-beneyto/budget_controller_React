import React from "react";
const Form = () => {
	return (
		<div className="container bg-light">
			<h3 className="text text-center my-2">Set data</h3>
			<form>
				<div className="form-group">
					<label htmlFor="title"> Subject: </label>{" "}
					<input type="text" name="title" placeholder="f.i. : transport" />
				</div>
				<div className="form-group">
					<label htmlFor="quantity"> Quantity: </label>{" "}
					<input type="number" name="quantity" placeholder="200" />
				</div>
				<div className="form-group pb-2">
					<input type="submit" value="Add" className="btn btn-primary" />
				</div>
			</form>
		</div>
	);
};

export default Form;
