import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Administrador extends Component {
    render(){
        return(
            <div className="mt-5 container mb-2 d-flex align-items-center flex-column">
                <Link to="/administrador/plazaBotero" style={{color:'#8cc63f',textDecoration:'none', fontSize:'25px'}}>
                    <p>
                        Plaza Botero
                    </p>
                </Link>
                <Link to="/administrador/pueblitoPaisa" style={{color:'#8cc63f',textDecoration:'none', fontSize:'25px'}}>
                    <p>
                        Pueblito Paisa
                    </p>
                </Link>
                <Link to="/administrador/pasajeBastilla" style={{color:'#8cc63f',textDecoration:'none', fontSize:'25px'}}>
                    <p>
                        Pasaje de la Bastilla
                    </p>
                </Link>
            </div>
        );
    }
}