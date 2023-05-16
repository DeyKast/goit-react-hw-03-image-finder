import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.searchValue) {
      Notify.failure('Enter a search request !');
      return;
    }
    this.props.handleSubmit(this.state.searchValue);
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.onSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              placeholder="Search images and photos"
              onChange={this.onChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
