import React from 'react';
import './shop-page.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import selectCollections from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ collections }) => {

    return (
        <div className='shop-container'>
            {collections.map(({ id, ...collectionProps }) => {
                return <CollectionPreview key={id} id={id} {...collectionProps} />
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);