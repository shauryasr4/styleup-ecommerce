import React from 'react';
import './shop-page.style.scss';

import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => {

    return (
        <div className='shop-container'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:category`} component={CollectionPage}/>
        </div>
    )
}


export default ShopPage;