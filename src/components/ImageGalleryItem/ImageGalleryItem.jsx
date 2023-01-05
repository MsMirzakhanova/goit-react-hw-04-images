import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'


export const ImageGalleryItem = ({ webformatURL, largeImageURL, onImgClick}) => {
    return (
        <li className={css.ImageGalleryItem} onClick={() =>onImgClick(largeImageURL)} >
            <img src={webformatURL} alt={webformatURL} className={css.ImageGalleryItemImage} />
        </li>)
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onImgClick: PropTypes.func.isRequired,

};