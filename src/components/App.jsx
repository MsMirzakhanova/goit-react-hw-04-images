import React, { useState, useEffect} from 'react';
import { Loader } from "./Loader/Loader";
import styles from "./app.module.css";
import { fetchImages } from './fetchimages';
import { Searchbar } from './Searchbar/Searchbar';
import {Modal} from './Modal/Modal';
import {ImageGallery} from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';


export function App() {
  const [searchImages, setSearchImages] = useState([]);
  const [imgName, setImgName] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!imgName) {
      return;
    }
    setLoading(true);
    fetchImages(imgName, page)
      .then(data => {
        setSearchImages(searchImages => [...searchImages, ...data.hits]);
      })
      .catch(error => {
        setError(error)
      })
      .finally(setLoading(false));
}, [page,imgName ]);
  


  const handleFormSubmit = imgName => {
     if (setImgName !== imgName) {
      setImgName(imgName)
      setPage(1)
      setSearchImages([])
        }
  };
  
  const toggleModal = () => {
setShowModal(!showModal)
  };

    const loadMore = () => {
        setPage(page + 1)
    };
    const onImgClick = largeImageURL => {
        setLargeImageURL(largeImageURL);
        toggleModal();
    };

    const isSearchImages = Boolean(searchImages.length);
    return (
    <div className={styles.app}>
        <Searchbar onSubmit={handleFormSubmit} />
        {loading && <Loader />}
        {error && <p>Restart page or modify the request</p>}
        {isSearchImages && <ImageGallery searchImages={searchImages} onImgClick={onImgClick} />}
        {isSearchImages  && <Button onClick={loadMore} />}
        {showModal && (<Modal onClose={toggleModal} largeImageURL={largeImageURL} />)}
    </div>
 ) 
}
