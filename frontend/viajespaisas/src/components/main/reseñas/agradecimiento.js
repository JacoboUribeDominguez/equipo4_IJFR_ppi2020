import React from 'react';
import logo from "../../../img/logo_sobre_blanco.png";
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Agradecimiento() {
    const centrar = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'100px 0'
    }

    const contenedorColor = {
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#00A99E',
        padding: '10px'
    }

    const botonVerde1 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    }

    const botonVerde2 = {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#8cc63e'
    }

    return (
        <div className="App">
            <Row>
                <Col xs={12} md={4}/>
                <Col xs={12} md={4} style={centrar}>
                    <img src={logo} alt="logo_viajesPaisas" className="px-4" style={{width:'100%'}}/>
                </Col>
                <Col xs={12} md={4}/>
            </Row>
            <div style={contenedorColor}>
                <h1 className="text-center">¡Gracias por tu aporte!</h1>
            </div>
            <Link to="/reseñas" style={{textDecoration:'none'}}>
                <div style={botonVerde1}>
                    <button className="btn text-white btn-lg mt-1" style={{background:'#8cc63f'}}>Ver más reseñas</button>
                </div>
            </Link>
            
            <Link to="/inicio" style={{textDecoration:'none'}}>
                <div style={botonVerde2}>
                    <button className="btn btn-lg text-white px-5" style={{background:'#8cc63f'}}>Regresar</button>
                </div>
            </Link>
        </div>
    );
}

export default Agradecimiento;
