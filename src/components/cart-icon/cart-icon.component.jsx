import React from "react";
import { ReactComponent as ShoppingIcon} from '../../assets/kartBag.svg';
import './cart-icon.styles.scss';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({toggleCartHidden, NumberOfCartItems}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">
            {NumberOfCartItems}
        </span>
    </div>
)

const mapStateToProps=createStructuredSelector({
    NumberOfCartItems : selectCartItemsCount
})

const mapDispatchToProps = dispatch =>({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);