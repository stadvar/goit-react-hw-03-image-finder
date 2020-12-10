import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ webformatURL, tags, id, handlerModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        handlerModal(id);
      }}
    >
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  handlerModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default ImageGalleryItem;
