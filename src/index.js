import React from 'react';
import ReactDOM from 'react-dom';
// Don't forget the './' for retrieving items in the same location as this file
import './index.css';
// The 'export' keyword before a function lets you do this. Don't forget, you don't need the .js extension when importing JS
import { book_collection } from './books';
import Book from './Book';

// JSX Rules
// A function should always return a single HTML element, not multiple. Do note that the element can be nested
// Instead of returning a div, consider returning a React.Fragment to avoid creating redundant divs
// Always use camelCase, and the functions should start with a capital letter
// className instead of class for HTML elements
// A closing tag for every element is necessary

// const firstBook = {
//   title: 'Dracula',
//   author: 'Bram Stoker',
//   img: 'https://youngentertainmentmag.com/wp-content/uploads/2015/09/dracula-book-cover-e1368750274302.jpg'
// }

// const secondBook = {
//   title: 'Pride and Prejudice',
//   author: 'Jane Austen',
//   img: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781499806250/pride-and-prejudice-9781499806250_hr.jpg'
// }

function BookList() {
  // The books.map is how you run through an array in jsx
  // Anything in curly brackets is a snippet of jsx
  // Turns out you can have multiple returns in a function, such as below for the section and then each of the books
  return (
    <section className="booklist">
      {book_collection.map((book) => {
        // const { title, author, img } = book;
        // return <Book key={book.id} book={book}></Book>;
        // the {...book} section will take every variable from the object and factor it into the class. Props becomes an object
        return <Book key={book.id} {...book}></Book>;
      })}
      {/* <Book title={firstBook.title} author={firstBook.author} img={firstBook.img}>
        <p>lorem ipsum</p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
      <Book title='Dracula' author='Bram Stoker' img={firstBook.img} />
      <Book title='Pride and Prejudice' author='Jane Austen' img={secondBook.img} /> */}
    </section>
  );
}

// // Implicit functions, using = () => variable. This does not use the return keyword
// const Title = () => <h3>Dracula</h3>
// const Author = () => <h4 style={{ color: '#222' }}>Bram Stoker</h4>

// // Explicit function, using = () => { return }. This requires the return variable
// const Image = () => {
//   return <img src="https://youngentertainmentmag.com/wp-content/uploads/2015/09/dracula-book-cover-e1368750274302.jpg" alt="" width="100px" />
// }

// const Testing = () => {
//   return React.createElement('h1', {}, 'Hello World')
// }

ReactDOM.render(<BookList />, document.getElementById('root'));
