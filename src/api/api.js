import axios from "axios";
import { cleanJsonKeys } from "../helpers/helpers";

//import.meta.env.VITE_SOME_KEY
const instance = axios.create({
  baseURL: "https://www.alphavantage.co/",
});

const api = {
  getLatestPrice: async (symbol) => {
    const response = await instance.get(
      `query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${
        import.meta.env.VITE_ALPHAVANTAGE_KEY
      }`
    );

    const cleanData = cleanJsonKeys(response.data["Global Quote"]);
    return { data: cleanData };
  },
  getCompaniesDetails: async (searchedText) => {
    const response = await instance.get(
      `query?function=SYMBOL_SEARCH&keywords=${searchedText}&apikey=${
        import.meta.env.VITE_ALPHAVANTAGE_KEY
      }`
    );

    const mergedResponse = await Promise.all(
      response.data.bestMatches.map(async (data) => {
        const cleanData1 = cleanJsonKeys(data);
        const res = await instance.get(
          `query?function=GLOBAL_QUOTE&symbol=${cleanData1.symbol}&apikey=${
            import.meta.env.VITE_ALPHAVANTAGE_KEY
          }`
        );
        const cleanData2 = cleanJsonKeys(res.data["Global Quote"]);
        return { ...cleanData1, ...cleanData2, isSaved: false };
      })
    );

    return { data: mergedResponse };
  },
};

export default api;
