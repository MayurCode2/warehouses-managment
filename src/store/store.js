import { configureStore } from '@reduxjs/toolkit';
import warehousesReducer from "../warehouseSlice/warehousesSlice"

const store = configureStore({
  reducer: {
    warehouses: warehousesReducer,
  },
});

export default store;
