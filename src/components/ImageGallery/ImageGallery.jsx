import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from '../../components/ImageGalleryItem';

class ImageGallery extends Component {
  state = { top: 0 };
  componentDidUpdate(prevProps, prevState) {
    // const doc1 = document.documentElement.clientHeight;
    // const doc2 = document.documentElement.scrollHeight;
    // // console.log(doc1, doc2);
    // const res = doc2 - doc1;
    // console.log('res', res);
    // console.log('prevSt', prevState.top);
    // if (prevState.top !== this.state.top) {
    // }
    // const doc1 = document.documentElement.clientHeight;
    // const doc2 = document.documentElement.scrollHeight;
    // console.log(doc1, doc2);
    // const res = doc2 - doc1;
    // console.log(res);
    // this.setState({ top: res });
    // window.scrollTo({
    //   top: res, //document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
  }
  render() {
    const { list, handlerItemClick } = this.props;
    return (
      <ul className="ImageGallery">
        {list.map((el, indx) => (
          <ImageGalleryItem
            key={indx}
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
