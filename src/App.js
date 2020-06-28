import React, { Fragment, useState, useEffect } from "react";
import SetBudget from "./components/SetBudget";
// import Error from "./components/Error";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

import "./App.css";

function App() {
	//setting total budget to 0
	const [totalBudget, setTotalBudget] = useState(0);

	//setting diff budget to 0
	const [diffBudget, setDiffBudget] = useState(0);

	//showing components
	const [showSetBudget, setShowSetBudget] = useState(true);

	//setting outcomes array
	const [outcomes, setOutcomes] = useState([]);

	//setting outcome object
	const [outcome, setOutcome] = useState({});

	//control list line
	const [createOutC, setCreateOutC] = useState(false);

	useEffect(() => {
		if (createOutC) {
			setOutcomes([...outcomes, outcome]);

			//after new outcome gets money left
			const newDiff = diffBudget - outcome.amount;
			console.log("diffBudget: " + diffBudget);
			console.log("outcome.amount: " + outcome.amount);
			console.log("newDiff: " + newDiff);

			setDiffBudget(newDiff);
		}

		//set List line false
		setCreateOutC(false);
	}, [outcome, outcomes, createOutC, diffBudget]);

	return (
		<Fragment>
			<div className="container mt-3">
				<h1 className="text text-center">Budget Controller</h1>
				{showSetBudget ? (
					<div className="row">
						<SetBudget
							setShowSetBudget={setShowSetBudget}
							setTotalBudget={setTotalBudget}
							setDiffBudget={setDiffBudget}
						/>
					</div>
				) : (
					<div className="row">
						<div className="col ">
							<Form setOutcome={setOutcome} setCreateOutC={setCreateOutC} />
						</div>
						<div className="col bg-light">
							<div className="container">
								<BudgetControl
									totalBudget={totalBudget}
									diffBudget={diffBudget}
								/>
							</div>
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
