import React from 'react';
import './collection.style.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollection} from '../../redux/shop/shop.selectors';


import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage =({collection}) => {
    const {title, items} = collection;
    return(
        <div className='collection-page'>
            <h1 className='title'>{title}</h1>
            <div className='items-container'>
                {items.map(function(item) {
                    return <CollectionItem key={item.id} item={item}/>
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    collection: selectCollection(ownProps.match.params.category)
});

export default connect(mapStateToProps)(CollectionPage);