import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { Component } from 'react';
import { MoviesList }  from './components/MoviesList';

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  }



  render() {
    return (
      <div className='container is-max-desktop'>
        <div className="notification is-danger">
          <div className="App">
            <Title> Searching...</Title>
            <div className='SearchForm-wrapper'>
              <SearchForm onResults={this._handleResults} />
            </div>
            {this.state.results.length === 0
              ? <p>Sin Resultados</p>
              : <MoviesList movies={this.state.results}/>
            }
          </div>
        </div>
      </div>
    );
  }
}




export default App;
