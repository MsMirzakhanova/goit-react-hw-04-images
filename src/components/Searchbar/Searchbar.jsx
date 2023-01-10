import  { useState} from 'react';
import styles from "./Searchbar.module.css";
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export const Searchbar = ({onSubmit}) => {
    
  const [imgName, setImgName] = useState('');

const handleNameChange = e => {
  setImgName(e.currentTarget.value.toLowerCase());
  
    }; 
const handleSubmit = e => {
    e.preventDefault();

      if (imgName.trim() === ``) {
          Notiflix.Notify.failure(`Please enter the text request`)
          return;
  }
  onSubmit(imgName);
        setImgName('');
}

    return (
  <header className={styles.Searchbar}>
    <form onSubmit={handleSubmit} className={styles.SearchForm}>
    <button type="submit" className={styles.SearchFormButton}>
    <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

    <input
    className={styles.SearchFormInput}
    type="text"
    name="imgName"
     value={imgName}
     onChange={handleNameChange}
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    />
  </form>
</header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};






