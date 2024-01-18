import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchPresentor from "../../components/SearchPresentor/SearchPresentor";
import "./Home.css";

const Home = () => {
  const [loadingState, setLoadingState] = useState("empty");

  return (
    <div className="home-container">
      <SearchBar setLoadingState={setLoadingState} />
      <SearchPresentor loadingState={loadingState} />
    </div>
  );
};
export default Home;
