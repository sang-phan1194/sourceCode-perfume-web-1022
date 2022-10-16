import { createSlice } from "@reduxjs/toolkit"

/* Set up to work with localStorage */
const savedListItem = localStorage.getItem("savedListItem") || "[]"
const saveToLocalStorage = (list) => {
  localStorage.setItem("savedListItem", JSON.stringify(list))
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: JSON.parse(savedListItem),
  },
  reducers: {
    add_item: (state, action) => {
      const addedListItem = [...state.itemList]
      let index = addedListItem.findIndex(
        (item) => item.productName === action.payload.productName
      )
      if (index > -1) {
        addedListItem[index].itemCount += action.payload.itemCount
      } else {
        addedListItem.push(action.payload)
      }
      saveToLocalStorage(addedListItem)
      state.itemList = [...addedListItem]
    },
    minus_item: (state, action) => {
      const minusItemList = [...state.itemList]
      minusItemList[action.payload].itemCount -= 1
      saveToLocalStorage(minusItemList)
      state.itemList = [...minusItemList]
    },
    remove_item: (state, action) => {
      const removedListItem = [...state.itemList].filter(
        (item) => item.productName !== action.payload
      )
      saveToLocalStorage(removedListItem)
      state.itemList = [...removedListItem]
    },
  },
})

export const { add_item, minus_item, remove_item } = cartSlice.actions
export default cartSlice.reducer
