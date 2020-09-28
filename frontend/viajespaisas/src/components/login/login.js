import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logoviajes from '../../img/logo_sobre_blanco.png';
import logoLogin from '../../img/logoIngreso.png';
import {Form, Button, Row, Col} from 'react-bootstrap';
import './login.css';

class Login extends Component{

    state = {
        user:'',
        password:''
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
            padding: '10% 10%',
            borderRadius:'15px'
        }
        

        return(
            <div style={containerLogin}>
                <Row className="mb-5">
                    <Col xs={2} sm={3} md={3} style={colLogo}/>
                    <Col xs={8} sm={6} md={6} style={colLogo} className="d-flex justify-content-center">
                        <img src={logoviajes} style={logoViajes} alt="logoViajes"/>
                    </Col>
                    <Col xs={2} sm={3} md={3} style={colLogo}/>
                </Row>
                <div stye={containerForm} className="d-flex flex-column align-items-center justify-content-center">
                    <img src={logoLogin} className="logoLogin" alt="logoLogin"/>
                    <Form className="d-flex flex-column justify-content-center ">
                        <Form.Group controlId="formBasicText" className="d-flex flex-column align-items-center">
                            <Form.Control type="text" name="user" placeholder="Usuario" onChange={this.onChange} value={this.state.user}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" name="password" placeholder="Contraseña" onChange={this.onChange} value={this.state.password}/>
                        </Form.Group>
                        <Link to="/">
                            <Button variant="primary" type="submit" onChange={this.onChange} className="mb-2 botones">
                                Ingresar
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="secondary" className="mb-2 botones">
                                Registrarse
                            </Button>
                        </Link>
                        
                        <Link to="/">
                            <Button variant="primary" className="botones"> 
                                Entrar como incógnito 
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;