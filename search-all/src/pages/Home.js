import React, { Component } from "react";
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList }  from '../components/MoviesList';



export class Home extends Component {
    state = { usedSearch: false, results: [] }

    _handleResults = (results) => {
      this.setState({ results, usedSearch: true })
    }
  
    _renderResults () {
      return this.state.results.length === 0
        ? <p>Sorry! No encontramos lo que buscas 😔 </p>
        : <MoviesList movies={this.state.results}/>
    }
   
  
    render() {
        return (
            <div className='container is-max-desktop'>
                <div className="notification is-danger">
                        <Title> ¿Necesitas informacion de una pelicula?</Title>
                        <Title> Nosotros te la enseñamos...</Title>
                        <div className='SearchForm-wrapper'>
                            <SearchForm onResults={this._handleResults} />
                        </div>
                        {
                            this.state.usedSearch
                                ? this._renderResults()
                                : <small> Use el formulario para buscar una pelicula </small>
                        }
                    </div>
                </div>
        )
    }
}