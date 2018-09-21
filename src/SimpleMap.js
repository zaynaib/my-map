import React , { Component }  from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

class SimpleMap extends Component{
  componentDidMount(){
   
    
  }
  render(){
    const position = [51.505, -0.09]
    return(
      
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
    
    )
  }

}

export default SimpleMap;