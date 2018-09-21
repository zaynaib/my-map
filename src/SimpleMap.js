import React , { Component }  from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

class SimpleMap extends Component{
  componentDidMount(){
    //this.map = L.map('mapid').setView([51.505, -0.09], 13);
    this.map = L.map('mapid', {
      center: [51.505, -0.09],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    
  }
  render(){
    const position = [51.505, -0.09]
    return(
      /*
      <div id="map">
  <Map center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>

    
     </div>
     */
    <div className="map"></div>
    )
  }

}

export default SimpleMap;