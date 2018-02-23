import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { title, authors, description, publishedDate, url } = this.props.article.volumeInfo;
    const imageLinks = this.props.article.volumeInfo.imageLinks;

    return (
      <li>
        <a href={url} target="_blank">
          <h2>{title} by {authors} on {publishedDate}</h2>
          <p>{description}</p>
          {imageLinks ? <img src={imageLinks.thumbnail}/> : <div>no image</div>}
        </a>
      </li>
    );
  }
}