import React from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import unsplash from './api/unsplash';

class App extends React.Component {
  state = { images: [] };

  onFormSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
