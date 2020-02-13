import React from 'react';
import './collections-overview.style.scss';

import {connect} from 'react-redux';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({collections}) => {
    return(
        <div className='collections-overview'>
            {collections.map(({ id, ...collectionProps }) => {
                return <CollectionPreview key={id} id={id} {...collectionProps} />
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);