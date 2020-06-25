import React, { Fragment } from "react";
const SetBudget = () => {
	return (
		<Fragment>
			<div className="container bg-light mt-2">
				<div className="row">
					<div className="col-md-4 offset-md-4">
						<form>
							<div className="form-group">
								<label htmlFor="nombre"> Set amount in Euros: </label>{" "}
								<input
									type="number"
									name="budget"
									className="form-control"
									placeholder="300"
								/>
							</div>
							<div className="form-group">
								<input
									type="submit"
									name="add"
									className="form-control btn btn-success"
									value="add"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default SetBudget;
