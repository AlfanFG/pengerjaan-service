import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  order_id: 0,
  order_no: "",
  services: [],
  services_json: [],
  time_stamp: ""
}

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.order_id = action.payload.order_id
      state.order_no = action.payload.order_no
      state.services = action.payload.services
      state.services_json = action.payload.services_json
      state.time_stamp = action.payload.time_stamp
     
    },
    setDefaultServices: (state) => {
      state = {
        order_id: 0,
  order_no: "",
  services: [],
  services_json: [],
  time_stamp: ""
      }
    },
  },
})

export const {
    setServices,
    setDefaultServices,
} = servicesSlice.actions

export default servicesSlice.reducer
