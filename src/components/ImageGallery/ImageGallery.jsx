
import PropTypes from 'prop-types';
import styles from "./ImageGallery.module.css";
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';



export function ImageGallery({ searchImages, onImgClick })  {
  return (
      <ul className={styles.gallery}>
          {searchImages.map(({ webformatURL, id, largeImageURL}) => (
             <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  onImgClick={onImgClick} 
                  largeImageURL = {largeImageURL}
              />
          ))}
      </ul>
    );
}
  
ImageGallery.propTypes = {
    searchImages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ),
    onImgClick: PropTypes.func.isRequired,
};