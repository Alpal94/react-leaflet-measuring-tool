import React, { Component } from 'react'
import { Map, TileLayer, ZoomControl } from 'react-leaflet'

import { BoxZoomControl } from 'react-leaflet-box-zoom'

export default class App extends Component {

	render () {

		return (
			<div className="map">
				<Map
					center={[44.635, 22.653]}
					zoom={12}
					zoomControl={false} >

					<TileLayer
						attribution=""
						url="https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"/>
			
					<ZoomControl position='topright' />

					<BoxZoomControl 
						position='topright'
						sticky={true}
					/>

				</Map>
			</div>
		)
	}
}
