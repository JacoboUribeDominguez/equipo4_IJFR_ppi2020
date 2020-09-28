import React, {Component} from 'react';
import { Rating } from '@material-ui/lab';//npm install @material-ui/core
import { Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './crearReseña.css';


export default class CrearReseña extends Component {

    state = {
        usuario:'',
        puntuacionReseña:'',
        descripcionReseña:''
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        
        const tituloPuntuacion = {
            color:'#8cc63f'
        }

        const textArea = {
            background:'#8cc63f',
            color:'white'
        }

        const botonCrearReseña = {
            postiion:'absolute'
        }

        return(
            <div className="container">
                <div className="mt-4">
                    <h5 style={tituloPuntuacion}>Puntuación:</h5>
                    <Rating name="puntuacionReseña" defaultValue={0} onChange={this.onChange} size="large" />
                    <Row>
                        <Col xs={12}>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                <br />
                                <div className="d-flex flex-column align-items-end">
                                    <Form.Control name="descripcionReseña" value={this.state.descripcionReseña} as="textarea" style={textArea} onChange={this.onChange} rows={16} />
                                    <Link to="/agradecimientos" className="mt-2" stlye={botonCrearReseña}>
                                        <Button className="mb-2 botonCrearReseña">
                                            Enviar Reseña
                                        </Button>
                                    </Link>
                                </div>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col />
                    </Row>
                </div>
            </div>
            
        );
    }
}