import React from 'react';
import './shop-page.style.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';



import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {collections: SHOP_DATA}
    }

    render() {
        return (
            <div className='shop-container'> 
                {this.state.collections.map(({id, ...collectionProps}) => {
                    return <CollectionPreview id={id} {...collectionProps}/>
                })}
            </div>
        )
    }
}

export default ShopPage;