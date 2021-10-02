import React from "react";
import { addItemToCart, clearItemFromCart, removeItemInCart } from "../../redux/cart/cart.actions";
import './checkout-page-item.styles.scss';
import { connect } from "react-redux";

const CheckOutPageItem =({cartItem,addItemToCart, removeItemInCart, clearItemFromCart})=>{
    const {name,imageUrl,price,quantity}=cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className="AddOrRemove">
                <div className='arrow' onClick={() => removeItemInCart(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                    &#10095;
                </div>
            </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearItemFromCart(cartItem)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    addItemToCart : (item)=>{
        dispatch(addItemToCart(item))
    },
    removeItemInCart : (item)=>{
        dispatch(removeItemInCart(item))
    },
    clearItemFromCart : (item)=>{
        dispatch(clearItemFromCart(item))
    }
})



export default connect(null, mapDispatchToProps)(CheckOutPageItem);