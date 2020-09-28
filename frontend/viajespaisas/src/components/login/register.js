import React, {Component} from 'react';
import logoviajes from '../../img/logo_sobre_blanco.png';
import logoLogin from '../../img/logoIngreso.png';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Register extends Component{
    
    state = {
        user:'',
        name:'',
        email:'',
        password:'',
        rpassword:''
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        const containerLogin={
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            marginTop: '60px',
            height: 'auto'
        }

        const colLogo={
            padding:'0px',
            margin:'0px'
        }

        const logoViajes ={
            width: '100%'
        }

        const containerForm = {
            background:'#f9fafc',
            borderRadius:'15px'
        }
        return(
            <div style={containerLogin}>
                <Row className="mb-5">
                    <Col xs={2} sm={3} md={3} style={colLogo}/>
                    <Col xs={8} sm={6} md={6} style={colLogo} className="d-flex justify-content-center">
                        <img src={logoviajes} style={logoViajes} alt="logo-Viajes"/>
                    </Col>
                    <Col xs={2} sm={3} md={3} style={colLogo}/>
                </Row>
                <div style={containerForm} className="d-flex flex-column align-items-center justify-content-center">
                    <img src={logoLogin} className="logoLogin" alt="logoLogin"/>
                    <Form className="d-flex flex-column justify-content-center">
                        <Form.Group controlId="formBasicText" className="d-flex flex-column align-items-center">
                            <Form.Control type="text" placeholder="Usuario" name="user" onChange={this.onChange} value={this.state.user} />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Control type="text" placeholder="Nombre" name="name" onChange={this.onChange} value={this.state.name} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Correo" name="email" onChange={this.onChange} value={this.state.email} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Contraseña" name="password" onChange={this.onChange} value={this.state.password} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Control type="password" placeholder="Confirme Contraseña" name="rpassword" onChange={this.onChange} value={this.state.rpassword} />
                        </Form.Group>
                        <Link to="/login">
                            <Button variant="primary" className="mb-2 botones">
                                Confirmar Registro
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        );
        
    }
}

export default Register;