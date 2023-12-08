import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../redux/cartSlice'
import cartModal from "./cartModal";


export const store = configureStore({
    reducer:{
        cart:cartSlice,
        modal:cartModal
    }
})