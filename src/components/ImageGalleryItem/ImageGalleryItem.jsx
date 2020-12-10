import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ webformatURL, tags, id, handlerItemClick }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        handlerItemClick(id);
      }}
    >
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  handlerItemClick: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default ImageGalleryItem;
