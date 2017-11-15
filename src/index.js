import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML. 
const App = () => {
  return <div>Hi!</div>;
}

// Put component's generated HTML and put it in the DOM. First argument is the instance of the class. Second argument is the placement location. 
ReactDOM.render(<App />, document.querySelector('.container'));