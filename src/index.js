import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyAYgpph-RNZFJbBv1C_nnqOSi6Z3M4Blq8";

// Create a new component. This component should produce some HTML. 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('surfboards');
  }

  // Takes string and makes new YTSearch
  videoSearch(term) {
    // Downwards data flow - only the most parent component in an application should be responsible for fetching data
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({ 
        videos,
        // first video is set to selectedVideo
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // Debounce takes inner function and returns a new function that can only be called once every 300ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          // Takes video and defines it on App's state; passing onVideoSelect as property to VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

// Put component's generated HTML and put it in the DOM. First argument is the instance of the class. Second argument is the placement location. 
ReactDOM.render(<App />, document.querySelector('.container'));