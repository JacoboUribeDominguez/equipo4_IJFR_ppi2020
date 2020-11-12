import React,{Component} from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import Medellin from '../../../img/Medellin.jpg';
import Icono from '../../../img/icono.png';
import { Link } from 'react-router-dom';

export default class Reseñas extends Component{

    state = {
        reseñas: []
    }

    componentDidMount(){
        fetch("http://localhost:4000/reviews/listar")
        .then(res => res.json())
        .then( response => {
            this.setState({
                reseñas:response
            })
        })
    }

    render(){

        const estilocard = {
            backgroundColor: '#00a99e',
            borderRadius: '7px',
            width: '100%',  
            textAlign: 'center'
        }

        return (
            <div className="container mt-3">
                <h1 className="display-4 text-center mb-3" style={{color:'#8cc63f'}} >RESEÑAS</h1> 
            <Row> 
                {this.state.reseñas.map(reseñas =>
                    
                    <Col className="d-flex justify-content-center my-2" as={Col} xs={12} md={3} key={reseñas.codigoReseña}>
                        <Link 
                            to={{
                                pathname: `/reseña/${reseñas.usuario}`,
                                state:{
                                    usuarios:reseñas.usuario,
                                    descripcionReseña:reseñas.descReseña,
                                    puntuacionReseña:reseñas.puntuacion
                                }
                            }} 
                            style={{textDecoration:'none'}}
                        >
                            <Card style={estilocard}>
                            <Card.Img src={Medellin} />
                            <Card.Body>
                                <Card.Img id="icono" src={Icono} style={{width:'20%'}}/>
                                <Card.Text className="text-white mb-1">
                                    {reseñas.usuario}
                                </Card.Text>
                                <Card.Text style={{fontSize:'auto', color:'#098a7d'}}>
                                    Ver reseña
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                )}            
            </Row>
        </div>
        );
    }
}