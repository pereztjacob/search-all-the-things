import React, { Component } from 'react';
// import styles from './App.css';
// import Search from './Search';
// import Pagify from './Pagify';
// import Books from './Books';
import { search } from '../services/#';

export default class App extends Component {

    state = {
      books: null,
      topic: '',
      page: 1,
      perPage: 20,
      totalResults: 0,
      loading: false,
      error: null
    };

    searchBooks = () => {
      const { topic, pageSize, startIndex } = this.state;

      this.setState({ loading: true, error: null });
      search(topic, pageSize, startIndex)
        .then(
          ({ books, totalResults }) => {
            this.setState({ books, totalResults });
          },
          error => this.setState({ error }))
        .then(() => {
          this.setState({ loading: false });
        });
    };

    handleSearch = (search) => {
      this.setState(search, this.searchNews);
    };

    // handlePrev = () => ;
    // handleNext = () => ;

    // handlePagify = incr => {

    // };

    render(){
      const { books, error, loading, page, topic, totalResults } = this.state;

      return (
        <div/*className={styles.app}*/>
          <header>
            {/* <Search onSearch = {this.handleSearch}/> */}
          </header>
          <main>
            <div className = "search-header">
              {books ?
                <div>
                  <h4>Search for &quot;{topic}&quot; found {totalResults} matches</h4>
                </div>
                :
                <div>Please Search</div>
              }
            </div>
            <div>{loading && 'Loading...'}</div>
            <pre className="error">{error && error.message}</pre>

            {books && (
              <div>
                {/* <Pagify totalResults={totalResults}
                  page={page}
                  perPage={pageSize}
                  onPrev={this.handlePrev}
                  onNext={this.handleNext}/>
                <Books books={books}/> */}
              </div>
            )}
          </main>
        </div>
      )


    }

}