import { CartActionTypes } from "./cart.actiontypes";

export const toggleCartHidden = () => {
    return{
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

export const addItemToCart = (item)=>{
    return{
        type: CartActionTypes.ADD_ITEM,
        payload : item
    }
}
