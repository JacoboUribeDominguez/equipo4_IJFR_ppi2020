import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './bottoms.css';

class Bottoms extends Component{
    render(){
        const button = {
            width:'50%',
            padding:'15px',
            background:'#8cc63f',
            color:'white',
            border:'2px solid white'
        }
        const linkButton = {
            width:'100%',
            height:'100%',
            color: 'white',
            textDecoration:'none',
            background:'#8cc63f',
            border:'2px solid #8cc63f'
        }
        return(
            <div className="my-auto">
                <Row className="">
                    <Col lg={3} md={2} xl={3}></Col>
                    <Col className="text-center" xs={6} md={4} lg={3} style={button}>
                        <Link to="/inicio/lugares" className="linkButton">
                            <div style={linkButton}>
                                Lugares
                            </div>                    
                        </Link>
                    </Col>
                    <Col className="text-center" xs={6} md={4} lg={3} style={button}>
                        <Link to="/map" className="linkButton">
                            <div style={linkButton}>
                                Ver mapa
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={2} xl={3}></Col>

                </Row>
            </div>
        );
    }
}

export default Bottoms;