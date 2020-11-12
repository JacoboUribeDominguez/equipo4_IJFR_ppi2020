import React, {Component} from 'react';
import background from '../../img/3.jpg';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ImageAdministrator extends Component{

    render(){
        const image ={
            width:'100%',
            height:'auto',
            pading:'0',
            margin:'0'
        }
        const colPading ={
            pading:'0',
            margin: '0'
        }
        return(
            <Row className="imageContainer">
                <Col lg={3} md={3} xl={3} style={colPading}></Col>
                <Col xs={12} lg={6} md={6} xl={6} style={colPading}>
                    <div className="d-flex justify-content-end py-3" >
                        <Link to="/administrador" style={{textDecoration:"none"}}>
                            <svg 
                                width="1em" 
                                height="1em" 
                                viewBox="0 0 16 16" 
                                className="bi bi-gear-fill"
                                fill="currentColor" 
                                xmlns="http://www.w3.org/2000/svg"
                                style={{height:'25px',width:'auto'}}>
                                <path 
                                    fillRule="evenodd" 
                                    style={{color:'#8cc63f'}}
                                    d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
                            </svg>
                        </Link>
                    </div>
                    <img src={background} alt="mapa-medellin" style={image}/>
                    
                </Col>
                <Col lg={3} md={3} xl={3}></Col>
            </Row>
        );
    }
}

export default ImageAdministrator;