import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from '../../components/ImageGalleryItem';

class ImageGallery extends Component {
  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  render() {
    const { list, handlerModal } = this.props;
    return (
      <ul className="ImageGallery">
        {list.map((el, indx) => (
          <ImageGalleryItem
            key={indx}
            webformatURL={el.webformatURL}
            tags={el.tags}
            id={el.id}
            handlerModal={handlerModal}
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
  handlerModal: PropTypes.func.isRequired,
};
export default ImageGallery;
