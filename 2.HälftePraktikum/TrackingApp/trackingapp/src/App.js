import React, { Component } from 'react';
import './App.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


class App extends Component {
  constructor(){
    super()
    this.state = {
      lat: 51.3327056,
      lng: 6.9995357,
      zoom: 13,
    }
  }
  
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default App;
