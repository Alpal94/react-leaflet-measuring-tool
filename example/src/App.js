import React, { Component } from 'react'
import { Map, TileLayer, ZoomControl } from 'react-leaflet'

import { BoxZoomControl } from 'react-leaflet-measuring-tool'
import { CoordinatesControl } from 'react-leaflet-coordinates';

export default class App extends Component {


	render () {

		return (
			<div>
				<div className="map">
					<Map
						center={[44.635, 22.653]}
						zoom={12}
						zoomControl={false} >

						<TileLayer
							attribution=""
							url="https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"/>
				
						<ZoomControl position="topright" />

						<CoordinatesControl />

						<BoxZoomControl 
							position="topright"
							sticky={true}
							ref={(ref) => this.boxZoomControlRef = ref}
						/>

					</Map>
				</div>
				<button onClick={() => this.boxZoomControlRef.stop()}>Stop!</button>
				<button onClick={() => this.boxZoomControlRef.start()}>Start</button>
			</div>
			
		)
	}
}
