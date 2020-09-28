import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Login from './components/login/login.js';
import Register from './components/login/register.js';
import Lugar from './components/main/lugares/lugar.js';
import CrearReseña from './components/main/lugares/crearReseña/crearReseña';
import lugaresData from './components/main/lugares/lugares.json';
import Agradecimiento from './components/main/reseñas/agradecimiento';
import Reseñas from './components/main/reseñas/reseñas';
import Resena from './components/main/reseñas/reseña';

class App extends Component{

  state = {
    user:null
  }

  render(){
    
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/agradecimientos">
            <Agradecimiento />
          </Route>
          <Route path="/reseña/:handle" component={Resena} />
          <Route path="/reseñas">
            <Reseñas />
          </Route>
          <Route path="/agradecimiento">
            <Agradecimiento />
          </Route>
          <Route path="/crearReseña">
            <CrearReseña/>
          </Route>
          <Route path="/pueblitopaisa">
            <Lugar descripcionSitio={lugaresData.Pueblito.descripcionSitio} disponibilidadSitio={lugaresData.Pueblito.disponibilidadSitio}/>
          </Route>
          <Route path="/pasaje">
            <Lugar descripcionSitio={lugaresData.Pasaje.descripcionSitio} disponibilidadSitio={lugaresData.Pasaje.disponibilidadSitio}/>
          </Route>
          <Route path="/plaza">
            <Lugar descripcionSitio={lugaresData.Plaza.descripcionSitio} disponibilidadSitio={lugaresData.Plaza.disponibilidadSitio}/>
          </Route>    
          <Route path="/">
            <Main />
          </Route>
        </Switch>   
      </Router>
    );
  }
}

export default App;
