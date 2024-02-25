import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();
	return (
		<div>
			<button onClick={() => navigate("/useState")}>useState</button>
			<button onClick={() => navigate("useImperativeHandle")}>
				useImperativeHandle
			</button>
		</div>
	);
};

export default HomePage;
