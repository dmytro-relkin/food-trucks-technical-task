import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FoodTruck } from '../../types';
import './styles.scss';
import {LatLngTuple} from "leaflet";

import L from 'leaflet';
// Fix for Marker not appearing, code from github issues.
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

interface MapProps {
    trucks: FoodTruck[];
}

const MAP_CONTAINER_STYLE = {
    height: "100%",
    width: "100%"
}

const MAP_CONTAINER_ZOOM = 13;

// San Francisco coordinates
const DEFAULT_POSITION: LatLngTuple = [37.7749, -122.4194];

const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const Map: React.FC<MapProps> = ({ trucks }) => {
    return (
        <div className="map-container">
            <MapContainer center={DEFAULT_POSITION} zoom={MAP_CONTAINER_ZOOM} style={MAP_CONTAINER_STYLE}>
                <TileLayer attribution={TILE_ATTR} url={TILE_URL} />
                {trucks.map(truck => (
                    <Marker
                        key={truck.locationid}
                        position={[truck.Latitude, truck.Longitude]}
                    >
                        <Popup>
                            <strong>{truck.Applicant}</strong><br />
                            {truck.FoodItems}<br />
                            {truck.Address}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
