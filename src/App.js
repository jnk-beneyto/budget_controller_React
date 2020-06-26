import React, { Fragment, useState } from "react";
import SetBudget from "./components/SetBudget";
// import Error from "./components/Error";
import Form from "./components/Form";
import List from "./components/List";

import "./App.css";

function App() {
	//setting total budget to 0
	const [totalBudget, setTotalBudget] = useState(0);

	//setting diff budget to 0
	const [diffBudget, setDiffBudget] = useState(0);

	//showing components
	const [showSetBudget, setShowSetBudget] = useState(true);

	//setting outcomes
	const [outcomes, setOutcomes] = useState([]);

	//function sent to Form in order to use there
	const addNewOutcomes = outcome => {
		setOutcomes([...outcomes, outcome]);
		console.log(outcomes);
	};

	return (
		<Fragment>
			<div className="container mt-3">
				<h1 className="text text-center">Budget Controller</h1>
				{showSetBudget ? (
					<div className="row">
						<SetBudget
							setTotalBudget={setTotalBudget}
							setDiffBudget={setDiffBudget}
							setShowSetBudget={setShowSetBudget}
						/>
					</div>
				) : (
					<div className="row">
						<div className="col ">
							<Form addNewOutcomes={addNewOutcomes} />
						</div>
						<div className="col bg-primary">
							<div className="container">
								<List outcomes={outcomes} />
							</div>
						</div>
					</div>
				)}
			</div>
		</Fragment>
	);
}

export default App;
