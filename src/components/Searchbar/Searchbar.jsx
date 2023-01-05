import React, { Component } from 'react';
import styles from "./Searchbar.module.css";
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
        imgName: '',
    };

handleNameChange = e => {
  this.setState({imgName: e.currentTarget.value.toLowerCase()});
  
    }; 
handleSubmit = e => {
    e.preventDefault();

      if (this.state.imgName.trim() === ``) {
          Notiflix.Notify.failure(`Please enter the text request`)
          return;
  }
    this.props.onSubmit(this.state.imgName);
        this.setState({ imgName: '' });
}

  render() {
    return (
  <header className={styles.Searchbar}>
    <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
    <button type="submit" className={styles.SearchFormButton}>
    <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

    <input
    className={styles.SearchFormInput}
    type="text"
    name="imgName"
     value={this.state.imgName}
     onChange={this.handleNameChange}
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    />
  </form>
</header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};






