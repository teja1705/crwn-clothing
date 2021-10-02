import { CartActionTypes } from "./cart.actiontypes"
import { addItem, clearItem, removeItem } from "./cart.utils"
const INITIAL_STATE ={
    hidden:true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems : addItem(state.cartItems, action.payload),
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems : removeItem(state.cartItems, action.payload),
            }
        case CartActionTypes.CLEAR_ITEM:
            return{
                ...state,
                cartItems : clearItem(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;