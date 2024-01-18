import { useState } from "react";
import "./SearchBar.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/thunks/searchDataThunk";
import { deleteSearchData } from "../../redux/slices/searchDataSlice";

const SearchBar = () => {
  const [searchedText, setSearchedText] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchedText(e.target.value);
  };

  const handleClearSearch = () => {
    dispatch(deleteSearchData());
    setSearchedText("");
  };

  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (searchedText) {
        dispatch(fetchData(searchedText));
      } else {
        dispatch(deleteSearchData());
      }
    }, 450);

    return () => clearTimeout(delaySearch);
  }, [searchedText, dispatch]);

  return (
    <div className="searchbar-container">
      <input
        placeholder="Search Stocks"
        className="search-input"
        value={searchedText}
        onChange={handleSearch}
      />
      <button className="clear-button" onClick={handleClearSearch}>
        Clear Result
      </button>
    </div>
  );
};
export default SearchBar;
