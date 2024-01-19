import { useDispatch } from "react-redux";
import "./DataListBar.css";
import { addStock, deleteStock } from "../../redux/slices/watchlistDataSlice";
const DataListBar = ({ data, watchlistSymbols }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (isSaved) => {
    if (isSaved) {
      dispatch(deleteStock(data.symbol));
    } else {
      dispatch(addStock(data));
    }
  };

  const isSaved = watchlistSymbols.includes(data.symbol);
  return (
    <div className="data-container">
      <div className="company-detail-sec">
        <h1 className="c-name">{data.name}</h1>
        <h2 className="c-symbol">{data.symbol}</h2>
      </div>
      <div className="company-stock-sec">
        <h1 className="c-price">
          {data.price} {data.currency}
        </h1>
        <button
          className="add-button"
          onClick={() => handleStatusChange(isSaved)}
        >
          {isSaved ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
};
export default DataListBar;
