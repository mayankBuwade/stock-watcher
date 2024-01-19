import SearchBar from "../../components/SearchBar/SearchBar";
import SearchPresentor from "../../components/SearchPresentor/SearchPresentor";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <SearchPresentor />
    </div>
  );
};
export default Home;
