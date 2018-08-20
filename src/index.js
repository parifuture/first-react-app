import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = "AIzaSyCQMeIF4KjeQBhZmJ7PxRB3f-s_dzb0eIM";

YTSearch({key:API_KEY,term:'reactjs'},function(data) {
    console.log(data);
});

class App extends Component {
    render() {
        return <div>
            <SearchBar />
          </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
