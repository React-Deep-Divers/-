import { useState } from "react";

const UseMemoPage = () => {
	const [text, setText] = useState("default");

	const handleChange = (e) => {
		const { value } = e.target;
		setText(value);
	};

	const users = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

	// 렌더링 될 때마다 users.reduce가 실행된다.
	// users는 변하지 않기 때문에 무의미한 연산이 낭비된다.
	const count = users.reduce((acc) => {
		console.log("users 수 세는 중...");
		return (acc += 1);
	}, 0);

	// useMemo를 사용한 코드
	// const count = useMemo(countingUsers, users);
	// 두 번째 인자의 값이 변화한다면, 첫 번째 인자인 함수가 실행된다.
	// 그리고 함수의 결과 값이 count에 저장된다.

	return (
		<div>
			<div>
				text 입력 : <input type="text" onChange={handleChange}></input>
			</div>
			<div>입력된 text : {text}</div>
			<div>user 수 : {count}</div>
		</div>
	);
};

export default UseMemoPage;
