import React, {Component} from 'react';
import { Rating } from '@material-ui/lab';//npm install @material-ui/core
import { Row, Col, Form} from 'react-bootstrap';
import user from '../../../img/icono.png'
import './reseña.css';


export default class Resena extends Component {

    state={
        usuarios:this.props.location.state.usuarios,
        descripcionReseña:this.props.location.state.descripcionReseña,
        puntuacionReseña:this.props.location.state.puntuacionReseña
    }

    render(){
        
        const tituloPuntuacion = {
            color:'#8cc63f'
        }

        const textArea = {
            background:'#8cc63f',
            color:'white',
            width:'100%',
            height:'65vh'
        }

        return(
            <div className="container">
                <div className="mt-4">
                    <h5 style={tituloPuntuacion}>Puntuación:</h5>
                    <Rating name="size-large" value={this.state.puntuacionReseña} onChange={this.onChange} size="large" />
                    <Row>
                        <Col xs={12}>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                <br />
                                <div style={textArea}>
                                    <div className="p-2">
                                        <div style={{height:'5rem'}}>
                                            <div className="d-flex align-items-center pr-2 pt-1">
                                                <div>
                                                    <img src={user} alt="user"/>
                                                </div>
                                                <div>
                                                    <div style={{position:'left',fontSize:'23px'}}> {this.state.usuarios} </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3">
                                        <p>{this.state.descripcionReseña}</p>
                                    </div>
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