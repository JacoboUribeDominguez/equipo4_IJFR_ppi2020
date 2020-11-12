import React, { Component } from 'react'
import GoogleMaps from 'simple-react-google-maps';
import credentials from '../../credentials/credentials'

export default class extends Component{
    render(){
        if(this.props.match.params.id === "1"){
            return(
                <div>
                    <GoogleMaps 
                        apiKey={credentials.mapsKey}
                        style={{height:'90vh', width:'100%'}}
                        zoom={16}
                        center={{
                            lat:6.236204,
                            lng:-75.580321
                        }}
                        markers={{lat:6.236204, lng:-75.580321}}
                    />
                </div>
            );
        }else if(this.props.match.params.id === "2"){
            return(
                <div>
                    <GoogleMaps 
                        apiKey={credentials.mapsKey}
                        style={{height:'90vh', width:'100%'}}
                        zoom={26}
                        center={{
                            lat:6.248386,
                            lng:-75.566733
                        }}
                        markers={{lat:6.248386, lng:-75.566733}}
                    />
                </div>
            );
        }else if(this.props.match.params.id === "3"){
            return(
                <div>
                    <GoogleMaps 
                        apiKey={credentials.mapsKey}
                        style={{height:'90vh', width:'100%'}}
                        zoom={16}
                        center={{
                            lat:6.252073,
                            lng:-75.568269
                        }}
                        markers={{lat:6.252073, lng:-75.568269}}
                    />
                </div>
            );
        }else{
            return(
                <div>
                    <GoogleMaps 
                        apiKey={credentials.mapsKey}
                        style={{height:'90vh', width:'100%'}}
                        zoom={16}
                        center={{
                            lat:6.153907,
                            lng:-75.606853
                        }}
                    />
                </div>
            );
        }
    }
}