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

export const removeItemInCart = (item)=>{
    return{
        type:CartActionTypes.REMOVE_ITEM,
        payload : item
    }
}

export const clearItemFromCart = (item)=>{
    return{
        type: CartActionTypes.CLEAR_ITEM,
        payload:item
    }
}
