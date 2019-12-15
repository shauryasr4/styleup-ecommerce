import React from 'react';
import './collection-item.style.scss';

const CollectionItem = ({imageUrl, price, name}) => {
    return (
      <div className="item-card">
        <div className="image-holder">
          <img src={imageUrl} alt="" />
        </div>
        <div className="footer">
          <span>{name}</span>
          <span>{price}</span>
        </div>
      </div>
    );
}

export default CollectionItem;