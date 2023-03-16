import { createSlice } from '@reduxjs/toolkit'
import { FilterCriteria } from 'shared/types/filter.type'

const initialState: FilterCriteria = {
  name: "",
  status: "all",
  specie: "",
  gender: "all",
  type: ""
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    changeState: (state, newState ) => {
      state.name = newState.payload.name
      state.status = newState.payload.status
      state.gender = newState.payload.gender
      state.specie = newState.payload.specie
      state.type = newState.payload.type
    }
  }
})


export default filterSlice.reducer