import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import toastMessSlice from "./toastMessSlice"

export default configureStore({
  reducer: {
    cart: cartSlice,
    toastMess: toastMessSlice,
  },
})
