import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Lugares extends Component{
    render(){
        const lugares = {
            maxWidth:'100%',
            background: '#1b8981'
        }
        const linkLugares = {
            color: 'white',
            textDecoration:'none',
        }

        const nav = {
            maxWidth:'100%',
            background: '#00a99d'
        }

        const tituloLugares = {
            fontSize:'45px'
        }
        
        const absolute = {
            position:'absolute',
            width:'100%',
            zIndex:'1'
        }

        return(
            <div style={absolute}>
                <Row>
                    <Col xs={8} sm={6} md={4} lg={3}>
                        <div style={lugares}>
                            <Link to="/pueblitopaisa" style={linkLugares} className="p-3 ">
                                <div className="px-3 mt-4 mb-5">
                                    <h1 className="display-4" style={tituloLugares}>Lugares Turísticos</h1>
                                </div>
                                <div className="px-3">
                                    El Pueblito Paisa
                                </div>
                            </Link>
                            <Link to="/pasaje" style={linkLugares} className="p-3">
                                <div className="px-3">
                                    El Pasaje de la Bastilla
                                </div>
                            </Link>
                            <Link to="/plaza" style={linkLugares} className="p-3">
                                <div className="px-3 mb-5">
                                    Plaza Botero
                                </div>
                            </Link>
                        </div>

                        <div style={nav}>
                            <Link to="/" style={linkLugares} className="p-3 ">
                                <div className="px-3 mt-2">
                                    Mapa
                                </div>
                            </Link>
                            <Link to="/" style={linkLugares} className="p-3">
                                <div className="px-3 mb-2">
                                    Cerrar
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={4} sm={6} md={8} lg={9}/>
                </Row>
            </div>
        );
    }
}

export default Lugares;