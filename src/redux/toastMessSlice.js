import { createSlice } from "@reduxjs/toolkit"

export const toastMessSlice = createSlice({
  name: "toastMess",
  initialState: {
    status: false,
    type: "",
  },
  reducers: {
    addToCart: (state) => {
      state.status = true
      state.type = "addToCart"
    },
    likeItem: (state) => {
      state.status = true
      state.type = "like"
    },
    deleteFromCart: (state) => {
      state.status = true
      state.type = "deleteFromCart"
    },
    autoHide: (state) => {
      state.status = false
      state.type = ""
    },
  },
})

export const { addToCart, likeItem, deleteFromCart, autoHide } =
  toastMessSlice.actions
export default toastMessSlice.reducer
