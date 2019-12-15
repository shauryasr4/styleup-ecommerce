import React from 'react';
import './collection-preview.style.scss';

import CollectionItem from '../collection-item/collection-item.component';

class CollectionPreview extends React.Component {

    render() {
        const props = this.props;
        return (
          <div className="collection-container">
            <h1 className="left-align">{props.title}</h1>
            <div className="card-container">
              {props.items
                .filter((collection, index) => {
                  return index < 4;
                })
                .map(({ id, ...itemProps }) => {
                  return <CollectionItem id={id} {...itemProps} />;
                })}
            </div>
          </div>
        );
    }
}

export default CollectionPreview;