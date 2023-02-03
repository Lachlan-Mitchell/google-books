import React, { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ book,isOpen, handleClose }) => {

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <h2>{book.volumeInfo.title}</h2>
            <span className={styles.modal_close} onClick={handleClose}>&times;</span>
          </div>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
          <p>{book.volumeInfo.authors.join(', ')}</p>
          <p>{book.volumeInfo.description}</p>
        </div>
      </div>
  );
};


export default Modal;