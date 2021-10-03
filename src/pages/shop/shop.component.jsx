import React from "react";
import  CollectionsOverView  from '../../components/collections-overview/collections-overview.component';
import { Route } from "react-router-dom";
import collectionPage from "../collection/collection.component";

const ShopPage = ({ match })=>{
    console.log(match);
    return(
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverView} />
        <Route path={`${match.path}/:collectionId`} component={collectionPage} />
    </div>
)}

export default ShopPage;