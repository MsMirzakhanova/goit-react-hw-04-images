import React, { Component } from 'react';
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }
    
    componentWillUnmount() {
        console.log(`Modal component`);
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = e => {
        console.log(e.code);
        if (e.code === "Escape") {
            this.props.onClose();
        }
    }

    handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
 }  
}    

render() {
        const {largeImageURL} = this.props;
    return createPortal (
 <div className={styles.overlay} onClick={this.handleOverlayClick}>
  <div className={styles.modal}>
    <img src={largeImageURL} alt={largeImageURL} />
  </div>
</div> , modalRoot      
    );
}
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};