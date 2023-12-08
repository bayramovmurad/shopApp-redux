import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";


const initialState = {
    amount:0,
    total:0,
    cartItems,
    searchTerm: "",
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        clear: state => {
            state.cartItems = []
        },
        comeBackData: state => {
            state.cartItems = cartItems
        },
        remove: (state,action) =>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },



        dec: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            if (cartItem.amount === 1) {
                
                state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
            }
            cartItem.amount = cartItem.amount - 1
        },
  

        inc: (state, {payload})=> {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            if(cartItem.amount < 10){
                cartItem.amount = cartItem.amount + 1
            }
        },
        more: (state, action) => {
            const itemId = action.payload;
            cartItems.map(item => ({ ...item, showMore: false }));
            const cartItem = state.cartItems.find((item) => item.id === itemId);
            cartItem.showMore = !cartItem.showMore;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },

    }
})


export default cartSlice.reducer
export  const {clear,remove,dec,inc, calculateTotals,more,comeBackData,setSearchTerm} =  cartSlice.actions