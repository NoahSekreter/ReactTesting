import React from 'react';
import ReactDOM from 'react-dom';
// Don't forget the './' for retrieving items in the same location as this file
import './index.css';

// JSX Rules
// A function should always return a single HTML element, not multiple. Do note that the element can be nested
// Instead of returning a div, consider returning a React.Fragment to avoid creating redundant divs
// Always use camelCase, and the functions should start with a capital letter
// className instead of class for HTML elements
// A closing tag for every element is necessary

// // Random test variables
// const title = "Dracula"
// const author = "Bram Stoker"
// img = 'https://youngentertainmentmag.com/wp-content/uploads/2015/09/dracula-book-cover-e1368750274302.jpg'

const books = [{
  title: 'Dracula',
  author: 'Bram Stoker',
  img: 'https://youngentertainmentmag.com/wp-content/uploads/2015/09/dracula-book-cover-e1368750274302.jpg'
}, {
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  img: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781499806250/pride-and-prejudice-9781499806250_hr.jpg'
}, {
  title: 'The Jewish-Japanese Sex & Cookbook and How to Raise Wolves',
  author: 'Jack Douglas',
  img: 'https://images-na.ssl-images-amazon.com/images/I/51XS6q8o0ML._SX218_BO1,204,203,200_QL40_.jpg'
}]

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
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { title, author, img } = book;
        return <Book book={book}></Book>;
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

// You can put in { title, author, img } in place of props to get the same results as the const below
// You can place anything within an object by placing the "children" variable
const Book = (props) => {
  // console.log(props)
  // When returning javascript, use {} to write functions into it.
  // This below saves us the trouble of putting in "props." before every variable
  const { title, author, img, children } = props.book
  return <article className="book">
    <img src={img} alt={title + ', by ' + author} width="200px" />
    <h3>{title}</h3>
    <h4>{author}</h4>
    {children}
  </article>
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
