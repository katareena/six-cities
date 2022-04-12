import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../../hooks/use-map/use-map';
import { URL_MARKER_DEFAULT } from '../../../../constants/common';

function createIcon(urlMarker) {
  return leaflet.icon({
    iconUrl: urlMarker,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
}

function renderPoints({city: {location: {latitude, longitude}}}, map) {
  leaflet
    .marker({
      lat: latitude,
      lng: longitude,
    }, {
      icon: createIcon(URL_MARKER_DEFAULT),
    })
    .addTo(map);
}

function MapOffer({currentCity, hotelsNearby}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const points = hotelsNearby;

  useEffect(() => {
    if (map) {
      points.forEach((point) => renderPoints(point, map));
    }
  }, [map, points]);

  return (
    <section
      className="property__map map"
      style={{height: '100vh'}}
      ref={mapRef}
    >
    </section>
  );
}

MapOffer.propTypes = {
  hotelsNearby: PropTypes.array.isRequired,
  currentCity: PropTypes.object.isRequired,
};

export default MapOffer;
