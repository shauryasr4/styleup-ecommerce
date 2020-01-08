import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

import './collection-item.style.scss';

const CollectionItem = ({item, addItemToCart}) => {
  const { imageUrl, price, name} = item;
  return (
    <div className="item-card">
      <div className="image-holder">
        <img src={imageUrl} alt="" />
        <CustomButton inverted onClick={()=>{addItemToCart(item)}}> Add to Cart </CustomButton>
      </div>
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemToCart(item))
  }
}

export default connect(null, mapDispatchToProps)(CollectionItem);