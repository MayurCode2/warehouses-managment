import { createSlice } from '@reduxjs/toolkit';
import warehousesData from '../data';

const initialState = {
  warehouses: warehousesData,
  selectedWarehouse: null,
};

const warehousesSlice = createSlice({
  name: 'warehouses',
  initialState,
  reducers: {
    setSelectedWarehouse: (state, action) => {
      state.selectedWarehouse = action.payload;
    },
  },
});

export const { setSelectedWarehouse } = warehousesSlice.actions;
export default warehousesSlice.reducer;
