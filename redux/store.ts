import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slices/filtersSlice"

export default configureStore({
  reducer: {
    filters: filterReducer
  }
})