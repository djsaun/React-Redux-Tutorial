import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = "AIzaSyAYgpph-RNZFJbBv1C_nnqOSi6Z3M4Blq8";

// Create a new component. This component should produce some HTML. 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // Downwards data flow - only the most parent component in an application should be responsible for fetching data
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Put component's generated HTML and put it in the DOM. First argument is the instance of the class. Second argument is the placement location. 
ReactDOM.render(<App />, document.querySelector('.container'));