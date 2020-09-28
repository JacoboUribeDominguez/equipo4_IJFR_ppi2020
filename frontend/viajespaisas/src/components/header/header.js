import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import logoViajes from '../../img/logo_sobre_negro.png';
class Header extends Component {

    render(){
        const navbar ={
            background:'#8cc63f',
            width:'100%'
        }

        const logoViajesEstilos={
            width:'125px'
        }

        return(
            <div style={navbar} className="d-flex align-items-center justify-content-center p-3">
                <Link to="/">
                    <img src={logoViajes} alt="logoViajes" style={logoViajesEstilos}/>
                </Link>
            </div>
        );
    }
}

export default Header;