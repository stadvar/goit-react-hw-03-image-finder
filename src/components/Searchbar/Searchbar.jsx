import PropTypes from 'prop-types';
import { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  state = { value: '' };
  handlerSearch = e => {
    this.setState({ value: e.currentTarget.value });
  };
  handlerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handlerSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handlerSearch}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
