import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

//components
import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Login from './components/login/login.js';
import Register from './components/login/register.js';
import Lugar from './components/main/lugares/lugar.js';
import CrearReseña from './components/main/lugares/crearReseña/crearReseña';
import Agradecimiento from './components/main/reseñas/agradecimiento';
import Reseñas from './components/main/reseñas/reseñas';
import Resena from './components/main/reseñas/reseña';
import Administrador from './components/main/administrador/administrador'
import DispoSitio from './components/main/administrador/dispoSitio'
import mapGeneral from './components/maps/mapGeneral';

class App extends Component{

  state = {
    user:null
  }

  render(){
    
    return (
        <Router>
          <Header />
          <Switch>
            <Route path="/map/:id" component={mapGeneral}/>
            <Route path="/map" component={mapGeneral}/>
            <Route path="/inicio/:administrator" component={Main}/>
            <Route path="/inicio" component={Main}/>
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
            <Route path="/crearReseña/:id" component={CrearReseña} />
            <Route exact path="/sitios/:lugar" component={Lugar}/>
            <Route path="/administrador/:sitio" component={DispoSitio}/>
            <Route path="/administrador" component={Administrador} />
            <Route path="/" component={Login} />
          </Switch>   
        </Router>
    );
  }
}

export default App;
