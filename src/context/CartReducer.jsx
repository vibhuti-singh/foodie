const CartReducer=(state, action)=>{
    switch(action.type){
case "ADD_ITEM":
    return{
        ...state,
        Cartitems:[action.payload, ...state.Cartitems]
    }



case "REMOVE_ITEM":
    return{
        ...state,
        Cartitems :state.Cartitems.filter(item=>item.id !==action.payload)
    }

case "INCREASE_QUANTITY":
    return{
        ...state,
        Cartitems:state.Cartitems.map(item=>
            item.id===action.payload?{...item, quantity:item.quantity+1}:item)
    }

    case "DECREASE_QUANTITY":
        return{
            ...state,
        Cartitems:state.Cartitems.map(item=>
            item.id===action.payload?{...item, quantity:item.quantity>1? item.quantity-1:item.quantity}:item)
        }

        default :
        return state
    }
   
}
export default CartReducer;