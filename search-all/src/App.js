import { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home'


import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {

  render() {

    return (
      <div className="App">
          <Routes>
            <Route exact path='/' element={<Home/>} ></Route>
            <Route path="/detail/:id" element={<Detail/>} exact ></Route>
          </Routes>
      </div>
    );
  }
}

export default App;
