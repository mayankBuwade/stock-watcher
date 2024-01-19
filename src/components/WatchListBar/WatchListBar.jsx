import { useDispatch } from "react-redux";
import "./WatchListBar.css";
import { deleteStock } from "../../redux/slices/watchlistDataSlice";

const WatchListBar = ({ data }) => {
  const dispatch = useDispatch();

  const removeData = () => {
    dispatch(deleteStock(data.symbol));
  };

  return (
    <div className="data-container-wl">
      <div className="company-detail-sec-wl">
        <h1 className="c-name-wl">{data.name}</h1>
        <h2 className="c-symbol-wl">{data.symbol}</h2>
      </div>
      <div className="company-stock-sec-wl">
        <h1 className="c-price-wl">
          {data.price} {data.currency}
        </h1>
        <button className="remove-button-wl" onClick={removeData}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default WatchListBar;
