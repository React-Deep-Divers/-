import { useState } from "react";

export default function Example1() {
	const [number, setNumber] = useState(0);

	const increase = () => {
		setNumber(number + 1);
	};

	const increaseAsync = () => {
		setTimeout(() => {
			setNumber(number + 1);
		}, 2000);
	};

	return (
		<>
			<button onClick={increase} style={{ marginBottom: "1rem" }}>
				increase1
			</button>
			<button onClick={increaseAsync}>increaseAsync1</button>
			<h1>{number}</h1>
		</>
	);
}
