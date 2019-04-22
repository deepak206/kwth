import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {


    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
        
    
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    marker = () => {
        var markers = [
        {
                title: 'Best #1',
                lat: 48.433684,
                lng: -122.447333,
                description: {mapHeaderRow:'Best #1',mapRow1:'No Blind',mapRow2:'32 Acres',anchor:'4076'}
        },
                {
                title: 'Best #2',
                lat: 48.426066,
                lng: -122.446603,
                description: {mapHeaderRow:'Best #2',mapRow1:'4-Man Blind',mapRow2:'39 Acres',anchor:'4075'}
        },
                {
                title: 'Burkland #1',
                lat: 48.364917,
                lng: -122.321107,
                description: {mapHeaderRow:'Burkland #1',mapRow1:'4-Man Blind',mapRow2:'35 Acres',anchor:'49'}
        },
                {
                title: 'Burmaster #1',
                lat: 48.512573,
                lng: -122.178844,
                description: {mapHeaderRow:'Burmaster #1',mapRow1:'4-Man Blind',mapRow2:'19 Acres',anchor:'4071'}
        },
                {
                title: 'Chilberg #1',
                lat: 48.393707,
                lng: -122.46151,
                description: {mapHeaderRow:'Chilberg #1',mapRow1:'4-Man Blind',mapRow2:'20 Acres',anchor:'40'}
        },
                {
                title: 'Chilberg #2',
                lat: 48.389987,
                lng: -122.463087,
                description: {mapHeaderRow:'Chilberg #2',mapRow1:'4-Man Blind',mapRow2:'55 Acres',anchor:'38'}
        },
                {
                title: 'Chilberg #3',
                lat: 48.389938,
                lng: -122.457456,
                description: {mapHeaderRow:'Chilberg #3',mapRow1:'4-Man Blind',mapRow2:'40 Acres',anchor:'39'}
        },
                {
                title: 'Chilberg #4',
                lat: 48.386412,
                lng: -122.453133,
                description: {mapHeaderRow:'Chilberg #4',mapRow1:'4-Man Blind',mapRow2:'13 Acres',anchor:'2065'}
        },
                {
                title: 'Chilberg #5',
                lat: 48.383015,
                lng: -122.453515,
                description: {mapHeaderRow:'Chilberg #5',mapRow1:'4-Man Blind',mapRow2:'16 Acres',anchor:'3066'}
        },
                {
                title: 'Fir Island #1',
                lat: 48.347195,
                lng: -122.410659,
                description: {mapHeaderRow:'Fir Island #1',mapRow1:'4-Man Blind',mapRow2:'15 Acres',anchor:'56'}
        },
                {
                title: 'Fir Island #2',
                lat: 48.344971,
                lng: -122.408341,
                description: {mapHeaderRow:'Fir Island #2',mapRow1:'4-Man Blind',mapRow2:'54 Acres',anchor:'55'}
        },
                {
                title: 'La Conner-Whitney #1',
                lat: 48.430015,
                lng: -122.46855,
                description: {mapHeaderRow:'La Conner-Whitney #1',mapRow1:'4-Man Blind',mapRow2:'40 Acres',anchor:'3065'}
        },
                {
                title: 'Memorial Hwy #1',
                lat: 48.440314,
                lng: -122.415281,
                description: {mapHeaderRow:'Memorial Hwy #1',mapRow1:'4-Man Blind',mapRow2:'14 Acres',anchor:'4070'}
        },
                {
                title: 'Moore Rd #1',
                lat: 48.361822,
                lng: -122.417743,
                description: {mapHeaderRow:'Moore Rd #1',mapRow1:'4-Man Blind',mapRow2:'20 Acres',anchor:'4073'}
        },
                {
                title: 'Pioneer Hwy #1',
                lat: 48.299882,
                lng: -122.354361,
                description: {mapHeaderRow:'Pioneer Hwy #1',mapRow1:'4-Man Blind',mapRow2:'37 Acres',anchor:'45'}
        },
                {
                title: 'Stackpole #1',
                lat: 48.369036,
                lng: -122.314467,
                description: {mapHeaderRow:'Stackpole #1',mapRow1:'4-Man Blind',mapRow2: '15 Acres',anchor: '4074'}
        },
                {
                title: 'Wylie #1',
                lat: 48.337738,
                lng: -122.377428,
                description: {mapHeaderRow: 'Wylie #1',mapRow1:'4-Man Blind', mapRow2: '36 Acres', anchor:'44'}
        }
    ];
         let allMarkers = markers.map((currentValue,key) => (
            <Marker
            key={key}
            title={currentValue.title}
            name={currentValue.description}
            position={{lat: currentValue.lat, lng:currentValue.lng}} onClick={this.onMarkerClick}>
            </Marker>
        ));
        return allMarkers;
    }

  render() {
    var styles={
        color: '#000000'
    };
    console.log(this.state.selectedPlace);
    return (
        <Map google={this.props.google}
            style={{width: '100%', height: '100%',}}
            classNameName={'map'}
            initialCenter={{
                lat: 48.337738,
                lng: -122.377428
              }}
            zoom={11} onClick={this.onMapClicked}>
            {this.marker()}
            
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                
                <div style={styles}>
                    <div className="mapHeaderRow">
                        {this.state.selectedPlace.name && this.state.selectedPlace.name.mapHeaderRow}
                    </div>
                    <div className="mapRow">
                        {this.state.selectedPlace.name && this.state.selectedPlace.name.mapRow1}
                    </div>
                    <div className="mapRow">
                        {this.state.selectedPlace.name && this.state.selectedPlace.name.mapRow2}
                    </div>
                    <div className="mapFooterRow">
                        <a href={this.state.selectedPlace.name && 'property-details.asp?id'+this.state.selectedPlace.name.anchor} className="bluelink">View Details</a>
                    </div>
                </div>
            </InfoWindow>
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAgJd80c_q3585xBJMUWcdOXD00TT7Hwzo')
})(MapContainer);