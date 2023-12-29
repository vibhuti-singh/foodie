import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext()
export const CartProvider =({children})=>{
const initialState ={  
    Cartitems : [

 ],
};
const [state, dispatch]=useReducer(CartReducer, initialState)
    return(
        <CartContext.Provider value={{...state, dispatch}}>
{children}
        </CartContext.Provider>
    )
}
export default CartContext