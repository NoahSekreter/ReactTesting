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

function BookList() {
  return (
    <section>
      <h1>Booklist</h1>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>
    <Title />
    <Author />
    <Image />
  </article>
}

// Implicit functions, using = () => variable. This does not use the return keyword
const Title = () => <h3>Dracula</h3>
const Author = () => <h4>Bram Stoker</h4>

// Explicit function, using = () => { return }. This requires the return variable
const Image = () => {
  return <img src="https://youngentertainmentmag.com/wp-content/uploads/2015/09/dracula-book-cover-e1368750274302.jpg" alt="" width="100px" />
}

// const Testing = () => {
//   return React.createElement('h1', {}, 'Hello World')
// }

ReactDOM.render(<BookList />, document.getElementById('root'));
