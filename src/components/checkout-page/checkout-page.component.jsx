import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectTotalCost } from "../../redux/cart/cart.selectors";
import CheckOutPageItem from "../checkout-page-item/checkout-page-item.component";
import './checkout-page.styles.scss';

const CheckOutPage = ({cartItems,TotalCost})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
            {
                cartItems.map(cartItem =>(
                    <CheckOutPageItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
        <div className="totalcost">
            <span>TOTAL COST : ${TotalCost}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    TotalCost : selectTotalCost
})

export default connect(mapStateToProps)(CheckOutPage);