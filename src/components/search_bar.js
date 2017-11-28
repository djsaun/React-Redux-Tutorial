import React, { Component } from 'react';

// Functional component - literally is a function
// const SearchBar = () => {
//   return <input />
// };

// Class component - Used when we want a component to have internal record keeping
class SearchBar extends Component { // Declares new class with name 'SearchBar'; Class has access to functionality that React.Component class has
  // Initializes state in a class-based component
  constructor(props) { // Constructor function is the first and only function called automatically whenever a new instance of a class is created
    super(props); 

    // Initialize state by creating a new object and assigning it to this.state
    this.state = { term: '' }; // Object contains properties that we want to record on the state
  }

  render() { // Define render method on the class -- every class must have this
    // A controlled field is a form element that's value is set by the state rather than the other way around
    return (
      <div className="search-bar">
        { /* Must return JSX; onChange is a react-specific property; Use this.setState to update state */ }
        { /* When we tell input that value is provided by this.state.term, we turn the input into a controlled component */ }
        {/* A controlled component has its value set by state, so its value only changes when its state changes */}
        <input 
          value={this.state.term} 
          onChange={event => this.onInputChange(event.target.value)} /> 
      </div>
    );
  }

  // Create event handler
  onInputChange(term) { // term object describes the context/information about the event that occurred
    // set state with term
    this.setState({term});
    // call the callback that we got from the App with the new term
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;