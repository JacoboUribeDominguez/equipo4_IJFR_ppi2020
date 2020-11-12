import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Lugares() {

    const history = useHistory();

    const lugares = {
        maxWidth: '100%',
        background: '#1b8981'
    }
    const linkLugares = {
        border:'none',
        background:'none',
        color:'white',
        width:'100%',
        textDecoration:'none'
    }

    const nav = {
        maxWidth: '100%',
        background: '#00a99d'
    }

    const tituloLugares = {
        color:'white',
        fontSize: '45px',
        textDecoration:'none'
    }

    const absolute = {
        position: 'absolute',
        width: '100%',
        zIndex: '1'
    }

    if(cookies.get('usuario')){
        return (
            <div style={absolute}>
                <Row>
                    <Col xs={8} sm={6} md={4} lg={3}>
                        <div style={lugares}>
                            <Link to="/" style={linkLugares} className="p-3">
                                <div className="px-3 mt-4 mb-5" >
                                    <h1 className="display-4" style={tituloLugares}>Lugares Turísticos</h1>
                                </div>
                            </Link>
                            <Link to="/sitios/1" style={linkLugares} className="p-3">
                                <div className="px-3">
                                    El Pueblito Paisa
                                    </div>
                            </Link>
                            <Link to="/sitios/2" style={linkLugares} className="p-3">
                                <div className="px-3">
                                    El Pasaje de la Bastilla
                                    </div>
                            </Link>
                            <Link to="/sitios/3" style={linkLugares} className="p-3">
                                <div className="px-3 mb-5">
                                    Plaza Botero
                                    </div>
                            </Link>
                        </div>
    
                        <div style={nav}>
                            <button onClick={e => history.push("/map")} style={linkLugares} className="p-3 ">
                                <div className="mt-2 text-left">
                                    Mapa
                                    </div>
                            </button>
                            <button 
                                onClick={
                                    e => {
                                        cookies.remove('codigoUsuario'); 
                                        cookies.remove('usuario')
                                        cookies.remove('administrador')
                                        history.push('/')
                                    }
                                } 
                                style={linkLugares}
                                className="py-3 px-3"
                            >
                                <div className="text-left">
                                    Cerrar Sesión
                                </div>
                            </button>
                            <button onClick={e => history.push("/inicio")} style={linkLugares} className="p-3">
                                <div className="mb-2 text-left">
                                    Cerrar
                                    </div>
                            </button>
                        </div>
                    </Col>
                    <Col xs={4} sm={6} md={8} lg={9} />
                </Row>
            </div>
        );
    }else{
        return (
            <div style={absolute}>
                <Row>
                    <Col xs={8} sm={6} md={4} lg={3}>
                        <div style={lugares}>
                            <Link to="/" style={linkLugares} className="p-3">
                                <div className="px-3 mt-4 mb-5" >
                                    <h1 className="display-4" style={tituloLugares}>Lugares Turísticos</h1>
                                </div>
                            </Link>
                            <Link to="/sitios/1" style={linkLugares} className="p-3">
                                <div className="px-3">
                                    El Pueblito Paisa
                                    </div>
                            </Link>
                            <Link to="/sitios/2" style={linkLugares} className="p-3">
                                <div className="px-3">
                                    El Pasaje de la Bastilla
                                    </div>
                            </Link>
                            <Link to="/sitios/3" style={linkLugares} className="p-3">
                                <div className="px-3 mb-5">
                                    Plaza Botero
                                    </div>
                            </Link>
                        </div>
    
                        <div style={nav}>
                            <button onClick={e => history.push("/map")} style={linkLugares} className="p-3 ">
                                <div className="mt-2 text-left">
                                    Mapa
                                    </div>
                            </button>
                            <button 
                                onClick={ e => {
                                    cookies.remove('codigoUsuario'); 
                                    cookies.remove('usuario')
                                    cookies.remove('administrador')
                                    history.push('/')
                                }} 
                                style={linkLugares}
                                className="py-3 px-3"
                            >
                                <div className="text-left">
                                    Iniciar Sesión
                                </div>
                            </button>
                            <button onClick={e => history.push("/inicio")} style={linkLugares} className="p-3">
                                <div className="mb-2 text-left">
                                    Cerrar
                                    </div>
                            </button>
                        </div>
                    </Col>
                    <Col xs={4} sm={6} md={8} lg={9} />
                </Row>
            </div>
        );
    }
    
}