import React from 'react';
import '../App.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    this.props.onFormSubmit(this.state.term);

    e.preventDefault();
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="image-search" className="search-bar__label">
              Image Search
            </label>
            <input
              className="search-bar__input"
              type="text"
              id="image-search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
