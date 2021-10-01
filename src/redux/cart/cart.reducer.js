import { CartActionTypes } from "./cart.actiontypes"
import { addItem } from "./cart.utils"
const INITIAL_STATE ={
    hidden:true,
    cartItems : [],
    NumberOfCartItems : 0
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
                NumberOfCartItems : state.NumberOfCartItems + 1
            }
        default:
            return state
    }
}

export default cartReducer;