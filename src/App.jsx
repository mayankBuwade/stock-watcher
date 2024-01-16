import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import CommonLayout from "./layout/CommonLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CommonLayout />}>
      <Route index element={<Home />} />
      <Route path="watchlist" element={<Watchlist />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
