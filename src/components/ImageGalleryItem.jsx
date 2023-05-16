import React from 'react';

class ImageGalleryItem extends React.Component {
  render() {
    return this.props.items.map(item => (
      <li className="ImageGalleryItem" key={item.id}>
        <img
          className="ImageGalleryItem-image"
          src={item.largeImageURL}
          alt={item.tags}
          onClick={() => this.props.openModal(item.largeImageURL)}
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
