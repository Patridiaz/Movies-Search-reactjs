import React, {Component} from "react";

const API_KEY = 'af1dc589'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit= (e) => {
        e.preventDefault()
        const { inputMovie } = this.state   

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then( res => res.json())
        .then(results => {
            const { Search = [], totalResults = "0" } = results
            console.log({Search, totalResults })
            this.props.onResults(Search)
        })
    }

    render () {
        return (
            <form onSubmit={ this._handleSubmit}>
            <div class="field has-addons">
            <div class="control">
              <input className="input"
              onChange={this._handleChange} 
              type="text" 
              placeholder="Movie to search..!"/>
            </div>
            <div class="control">
              <button class="button is-info">
                Search
              </button>
            </div>
          </div>
          </form>
        )
    }
}