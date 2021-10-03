import React from "react";
import './collections-overview.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import  CollectionPreview  from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview }  from '../../redux/shop/shop.selectors'

const CollectionsOverView = ({ collections })=>{
    console.log(collections);
    return(
        <div className="collections-overview">
            {
                collections.map(item=>(
                    <CollectionPreview 
                    key={item.id}
                    {...item}
                    />
                ))
            }
        </div>
)}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverView);