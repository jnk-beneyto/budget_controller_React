import React, { Fragment } from "react";
import { checkBudget } from "../helpers";

const BudgetControl = ({ totalBudget, diffBudget }) => {
	return (
		<Fragment>
			<div className="container alert alert-primary mt-3">
				Total: {totalBudget}
			</div>
			<div className={checkBudget(totalBudget, diffBudget)}>
				Diff: {diffBudget}
			</div>
		</Fragment>
	);
};

export default BudgetControl;
