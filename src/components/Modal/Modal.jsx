import  { useEffect } from 'react';
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({onClose, largeImageURL}) => {

    useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
    window.removeEventListener("keydown", handleKeyDown);
    };
  });

    const handleKeyDown = e => {
        if (e.code === "Escape") {
       onClose();
        }
    }

    const handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
 onClose();
 }  
}    

return createPortal (
 <div className={styles.overlay} onClick={handleOverlayClick}>
  <div className={styles.modal}>
    <img src={largeImageURL} alt={largeImageURL} />
  </div>
</div> , modalRoot      
    );
}


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};