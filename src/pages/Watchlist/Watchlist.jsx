import { useDispatch, useSelector } from "react-redux";
import "./Watchlist.css";
import WatchListBar from "../../components/WatchListBar/WatchListBar";
import { useEffect } from "react";
import { fetchLatestPrice } from "../../redux/thunks/watchlistDataThunk";

const Watchlist = () => {
  const dispatch = useDispatch();
  const watchlistData = useSelector((state) => state.watchlistData);

  useEffect(() => {
    if (watchlistData.watchlist) {
      const symbols = watchlistData.watchlist.map((data) => data.symbol);
      symbols.map((symbol) => {
        dispatch(fetchLatestPrice(symbol));
      });
    }
  }, []);

  if (watchlistData.watchlist.length === 0) {
    return <div className="empty-list">List is empty!!!</div>;
  }
  return (
    <div className="watchlist-container">
      <ul>
        {watchlistData.watchlist.map((data) => {
          return (
            <li key={data.symbol}>
              <WatchListBar data={data} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Watchlist;
