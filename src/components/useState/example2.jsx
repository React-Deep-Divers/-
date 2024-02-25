import { useState } from "react";

export default function Example2() {
	const [number, setNumber] = useState(0);

	const increase = () => {
		setNumber(number + 1);
	};

	const increaseAsync = () => {
		setTimeout(() => {
			setNumber((currentNumber) => currentNumber + 1);
		}, 2000);
	};

	return (
		<>
			<button style={{ marginBottom: "1rem" }} onClick={increase}>
				increase2
			</button>
			<button onClick={increaseAsync}>increaseAsync2</button>
			<h1>{number}</h1>
		</>
	);
}
