import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
// import { withRouter } from "react-router";

const CartDropDown = ({cartItems, toggleCartHidden}) =>{
    let history = useHistory();
    const handleClick = ()=>{
        history.push("/checkout");
        toggleCartHidden();
      }
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                (cartItems.map(cartItem =>( 
                <CartItem key={cartItem.id} item={cartItem}/>
            )))
            :
            <span className="empty-message">YOUR CART IS EMPTY</span>
            }
        </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

const mapDispatchToProps = (dispatch)=>({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
})


export default connect(mapStateToProps,mapDispatchToProps)(CartDropDown);

// export default withRouter(connect(mapStateToProps)(CartDropDown));
// const CartDropDown = ({cartItems, history}) =>{
/* <CustomButton onClick={()=> history.push("/checkout")}>GO TO CHECKOUT</CustomButton> */