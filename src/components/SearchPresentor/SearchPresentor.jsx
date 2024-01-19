import "./SearchPresentor.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import DataListBar from "../DataListBar/DataListBar";
import { useEffect, useState } from "react";

const SearchPresentor = () => {
  const searchData = useSelector((state) => state.searchData);
  const watchlist = useSelector((state) => state.watchlistData.watchlist);
  const [watchlistSymbols, setWatchlistSymbols] = useState([]);

  useEffect(() => {
    if (watchlist) {
      setWatchlistSymbols(watchlist.map((data) => data.symbol));
    }
  }, [watchlist, setWatchlistSymbols]);

  return (
    <div className="search-presentor-container">
      {searchData.loading ? (
        <Skeleton
          height="1.75rem"
          style={{
            marginBottom: "1rem",
          }}
          count={5}
          baseColor="#D3D3D3"
          highlightColor="#E5E4E2"
        />
      ) : searchData.results?.length > 0 ? (
        <div className="data-set-container">
          <ul>
            {searchData.results.map((data) => {
              return (
                <li key={data.symbol}>
                  <DataListBar
                    data={data}
                    watchlistSymbols={watchlistSymbols}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default SearchPresentor;
