import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

export default class Search extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  state = {
    topic: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch({ ...this.state });
  };

  handleTopic = ({ target }) => {
    this.setState({ topic: target.value });
  };

  render() {
    const { topic } = this.state;

    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <label>
          Search For:&nbsp;
          <input value={topic} onChange={this.handleTopic}/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}