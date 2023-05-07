import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  }

  _renderResults() {
    const { results } = this.state
    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
  }

  render() {
    return (
      <div className='container is-max-widescreen'>
        <div className="notification is-danger">
          <div className="App">
            <Title> Searching...</Title>
            <div className='SearchForm-wrapper'>
              <SearchForm onResults={this._handleResults} />
            </div>
            {this.state.results.length === 0
              ? <p>Sin Resultados</p>
              : this._renderResults()
            }
          </div>
        </div>
      </div>
    );
  }
}




export default App;
