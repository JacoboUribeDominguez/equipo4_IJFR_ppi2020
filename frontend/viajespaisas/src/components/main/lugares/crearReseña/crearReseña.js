import React, {Component} from 'react';
import { Rating } from '@material-ui/lab';//npm install @material-ui/core
import { Row, Col, Form, Button} from 'react-bootstrap';
import './crearReseña.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default class CrearReseña extends Component {

    state = {
        usuario:cookies.get('usuario'),
        puntuacionReseña:'',
        descripcionReseña:''
    }

    componentDidMount(){
        if(!cookies.get('usuario')){
            window.alert('Necesita iniciar sesion para usar esta función')
            window.location.href="../inicio"
        }
    }

    /*onCreate = () => {
        let codigo;
        fetch('http://localhost:4000/reviews/listar')
        .then(res => res.json())
        .then(result => {
            codigo = result.length
            codigo++;
            fetch('http://localhost:4000/users/agregar', {
                method: 'POST',
                body: JSON.stringify({
                    codigoUsuario: codigo,
                    usuario: user,
                    nombre: name,
                    correo: email,
                    contrasena: password,
                    administrador: 0
                }), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
            })
            window.alert('Usuario Creado')
            history.push('/login')
        })
    }*/

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onClick = e => {
        let codigo;
        fetch('http://localhost:4000/reviews/listar')
        .then(res => res.json())
        .then(result => {
            codigo = result.length
            codigo++;
            fetch(`http://localhost:4000/users/encontrar/${this.state.usuario}`)
                .then(res => res.json())
                .then(result2 => {
                    let codigoUsuario = result2[0].codigoUsuario
                    fetch('http://localhost:4000/reviews/agregar', {
                        method: 'POST',
                        body: JSON.stringify({
                            codigoReseña: codigo,
                            usuario: this.state.usuario,
                            descReseña: this.state.descripcionReseña,
                            puntuacion: this.state.puntuacionReseña,
                            codigoUsuario: codigoUsuario,
                            codigoSitio: this.props.match.params.id
                        }),
                        headers:{
                          'Content-Type': 'application/json'
                        }
                    })
                    window.alert(`Reseña Creada`)
                    window.location.href="../agradecimientos"
                })
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
                                    <Button onClick={this.onClick} className="mb-2 mt-2 botonCrearReseña" stlye={botonCrearReseña}>
                                        Enviar Reseña
                                    </Button>
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