import { useEffect } from "react";
import Example2 from "../components/useState/example2";
import Example1 from "../components/useState/example1";

const UseStatePage = () => {
	const [state, setState] = setState(0);

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
};

export default UseStatePage;
