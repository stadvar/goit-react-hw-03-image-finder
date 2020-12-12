import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from '../../components/ImageGalleryItem';

class ImageGallery extends Component {
  state = { top: 0 };

  render() {
    const { list, handlerItemClick } = this.props;
    return (
      <ul className="ImageGallery">
        {list.map((el, indx) => (
          <ImageGalleryItem
            key={el.key_id}
            webformatURL={el.webformatURL}
            tags={el.tags}
            id={el.id}
            handlerItemClick={handlerItemClick}
          />
        ))}
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  handlerItemClick: PropTypes.func.isRequired,
};
export default ImageGallery;
