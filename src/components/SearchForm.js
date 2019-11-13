import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import Suggestions from './Suggestions';
import './SearchForm.css';

const API_URL = 'https://rickandmortyapi.com/api/character/';

class SearchForm extends Component {
  state = {
    query: '',
    results: []
  };

  getInfo = () => {
    axios.get(`${API_URL}?name=${this.state.query}`).then(({ data }) => {
      this.setState({
        results: data.results
      });
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 2) {
          this.getInfo();
        } else {
          this.setState({
            results: []
          });
        }
      }
    );
  };

  render() {
    return (
      <div className="searchbar">
        <label htmlFor="nameInput" />
        <input
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
          id="nameInput"
          class="form-control"
          type="text"
        />
        <Suggestions results={this.state.results} />
      </div>
    );
  }
}

export default SearchForm;
