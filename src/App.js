import React, { Fragment } from "react";
import SetBudget from "./components/SetBudget";

import "./App.css";

function App() {
	return (
		<Fragment>
			<div className="container mt-3">
				<h1 className="text text-center">Budget Controller</h1>
				<div className="row">
					<SetBudget />
				</div>
			</div>
		</Fragment>
	);
}

export default App;
