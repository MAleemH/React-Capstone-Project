import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDetail = createAsyncThunk('fetchDetail', async ({ lat, lon }) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=097fd047f72f00d9c172c861170a0b0d`);
  const data = await response.json();
  return data;
});

const detailsSlice = createSlice({
  name: 'detail',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.fulfilled, (state, action) => action.payload);
  },
});

export default detailsSlice.reducer;
