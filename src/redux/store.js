import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchDataReducer from "./slices/searchDataSlice";
import watchlistDataReducer from "./slices/watchlistDataSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "watchlist",
  storage,
};

const rootReducer = combineReducers({
  searchData: searchDataReducer,
  watchlistData: persistReducer(persistConfig, watchlistDataReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default { store, persistor };
