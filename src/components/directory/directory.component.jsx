import React from 'react';
import './directory.style.scss'

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'normal',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'normal',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    size: 'normal',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'Women',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/women'
                },
                {
                    title: 'Men',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/men'
                }
            ]
        }
    }

    render() {
        const { sections } = this.state;
        return (
            <div className='directory-menu'>
                {sections.map(function ({title, imageUrl, id, size}) {
                    return <MenuItem  key={id} title={title} imageUrl={imageUrl} size={size} />
                })}
            </div>
        )
    }
}

export default Directory;