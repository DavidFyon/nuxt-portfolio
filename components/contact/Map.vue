<template>
	<div id="mapContainer" class="map" />
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'

export default {
	name: 'Map',
	data () {
		return {
			accessToken: process.env.NUXT_ENV_MAPBOX_ACCESS_TOKEN
		}
	},
	created () {
		mapboxgl.accessToken = this.accessToken;
	},
	mounted () {
		// map
		const map = new mapboxgl.Map({
			container: 'mapContainer',
			style: 'mapbox://styles/davidfyon/ckko82a9e6g2y17o6f2ygq4cb',
			center: [4.718, 45.659],
			zoom: 10,
			attributionControl: false
			// maxBounds: [[4.737738, 45.673449], [4.737738, 45.673449]]
		})

		// navigation
		const nav = new mapboxgl.NavigationControl()
		map.addControl(nav, 'top-right')

		// marker
		const marker = new mapboxgl.Marker({
			color: '#5D5DFF'
		})
		marker.setLngLat([4.718, 45.659])
		marker.addTo(map)
	}
}
</script>

<style lang="scss" scoped>
.map {
	width: 100%;
	height: 300px;
}
</style>
