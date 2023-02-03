import React, { useState } from 'react';
import SearchBar from './component/SearchBar/SearchBar';
import styles from './App.module.scss'
import Modal from './component/Modal/Modal';

function App() {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  const handleOpen = (book) => {
    setIsOpen(true);
    setCurrentBook(book);
  }

  return (
    <div className={styles.background}>
      <SearchBar setBooks={setBooks}/>
      
        <div className={styles.books_grid}>
          {
            books.map(book => (
              <div className={styles.book} key={book.id} onClick={() => handleOpen(book)}>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                <div className={styles.book_info}>
                  <h2>{book.volumeInfo.title}</h2>
                  <p>{book.volumeInfo.authors.join(', ')}</p>
                  <p>{book.volumeInfo.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      {isOpen && (
        <Modal book={currentBook} isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default App;
