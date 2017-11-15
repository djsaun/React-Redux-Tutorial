import React, { Component } from 'react';

// Functional component - literally is a function
// const SearchBar = () => {
//   return <input />
// };

// Class component - Used when we want a component to have internal record keeping
class SearchBar extends Component { // Declares new class with name 'SearchBar'; Class has access to functionality that React.Component class has
  render() { // Define render method on the class -- every class must have this
    return <input />; // Must return JSX
  }
}

export default SearchBar;