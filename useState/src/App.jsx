import React, { useState, useEffect } from "react";
import "./App.css";
import Example1 from "./Compare/example1";
import Example2 from "./Compare/example2";

function App() {
	const [state, setState] = useState(0);

	useEffect(() => {
		console.log("useEffect 안 setState 전", state);
		setState(state + 1);
		console.log("useEffect 안 상태 setState 후", state);
	}, []);

	const onClickBtn = () => {
		console.log("클릭 안 setState 전", state);
		setState(state + 1);
		console.log("클릭 안 setState 후", state);
	};

	return (
		<>
			<div className="state" onClick={onClickBtn}>
				{state}
			</div>
			<Example1 />
			<Example2 />
		</>
	);
}

export default App;
