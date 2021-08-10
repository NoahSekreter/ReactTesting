import React from 'react'

// You can put in { title, author, img } in place of props to get the same results as the const below
// You can place anything within an object by placing the "children" variable
const Book = ({ title, author, img, children }) => {
    // console.log(props)
    // When returning javascript, use {} to write functions into it.
    // This below saves us the trouble of putting in "props." before every variable
    // If you want to use the {...object} instead of object={object} your const should just be 'props' instead of props.object  

    // Adding in 'e' into the parameters lets you examine the event
    const referenceFunction = (e) => {
        alert("Hello!");
        console.log(e)
    }

    const complexExample = (author) => {
        console.log(author)
    }

    // // If you want, you can swap the parameters for this object to the const below and change the param to just 'props'
    // const { title, author, img, children } = props
    return <article className="book" onMouseOver={() => {
        console.log(title);
    }}>
        <img src={img} alt={title + ', by ' + author} width="200px" />
        {/* This is an inline onClick function */}
        <h3 onClick={() => console.log(title)}>{title}</h3>
        <h4>{author}</h4>
        {children}
        {/* To create an event, you will need an attribute, eventHandler */}
        <button type="button" onClick={referenceFunction}>Test Button</button>
        {/* When setting up a function that requires an arguement, set up the inline "() =>" so it doesn't run when the site loads */}
        <button type="button" onClick={() => complexExample(author)}>Complex Button</button>
    </article>
}

export default Book
