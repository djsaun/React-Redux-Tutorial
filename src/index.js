import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = "AIzaSyAYgpph-RNZFJbBv1C_nnqOSi6Z3M4Blq8";

// Create a new component. This component should produce some HTML. 
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Put component's generated HTML and put it in the DOM. First argument is the instance of the class. Second argument is the placement location. 
ReactDOM.render(<App />, document.querySelector('.container'));