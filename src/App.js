import React, { Fragment, useState } from "react";
import SetBudget from "./components/SetBudget";
import Error from "./components/Error";
import Form from "./components/Form";

import "./App.css";

function App() {
	// set default Error state false
	const [error, setError] = useState(false);

	return (
		<Fragment>
			<div className="container mt-3">
				<h1 className="text text-center">Budget Controller</h1>
				<div className="row">{error ? <Error /> : null}</div>
				<div className="row">
					<SetBudget />
				</div>
				<div className="row">
					<div className="col ">
						<Form />
					</div>
					<div className="col bg-primary">2</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
