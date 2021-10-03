import React from "react";
import './collection.styles.scss';
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
const collectionPage = ({ match, collection})=>{
    const { collectionId }=match.params;
    return(
    <div className="collection">
        <h2 className="title">{collectionId.toUpperCase()}</h2>
        <div className="preview">
            {
                collection.items
                .map(item => (
                    <CollectionItem key={item.id} {...item} />
                ))
            }
        </div>
    </div>
)}
const mapStateToProps = (state, ownProps)=>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(collectionPage);