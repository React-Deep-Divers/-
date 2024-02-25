import { createBrowserRouter } from "react-router-dom";
import UseStatePage from "../pages/UseStatePage";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import UseImperativeHandlePage from "../pages/UseImperativeHandlePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/useState",
				element: <UseStatePage />,
			},
			{
				path: "/useImperativeHandle",
				element: <UseImperativeHandlePage />,
			},
		],
	},
]);

export default router;
