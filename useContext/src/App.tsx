import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NameInput from "./components/Step01";

/**@todo provider로 감싸세요 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <NameInput />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
