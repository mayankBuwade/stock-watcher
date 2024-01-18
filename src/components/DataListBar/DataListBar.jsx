import { useDispatch } from "react-redux";
import "./DataListBar.css";
import { changeStockSaveStatus } from "../../redux/slices/searchDataSlice";
const DataListBar = ({ data }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (symbol) => {
    dispatch(changeStockSaveStatus(symbol));
  };

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
          onClick={() => handleStatusChange(data.symbol)}
        >
          {data.isSaved ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
};
export default DataListBar;
