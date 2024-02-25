import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UseStatePage from "./pages/UseStatePage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}>
				<Route path="/useState" element={<UseStatePage />} />
				<Route
					path="/useImperativeHandle"
					element={<useImperativeHandlePage />}
				/>
			</Route>
		</Routes>
	);
};
export default App;
