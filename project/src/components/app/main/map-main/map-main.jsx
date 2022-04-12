import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../../hooks/use-map/use-map';
import citiesProp from '../../../prop-types/cities.prop.js';
import hotelsProp from '../../../prop-types/hotels.prop';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../../../constants/common';

function createIcon(urlMarker) {
  return leaflet.icon({
    iconUrl: urlMarker,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
}

function renderPoints({id, location: {latitude, longitude}}, activeCard, map) {
  leaflet
    .marker({
      lat: latitude,
      lng: longitude,
    }, {
      icon: (id === activeCard)
        ? createIcon(URL_MARKER_CURRENT)
        : createIcon(URL_MARKER_DEFAULT),
    })
    .addTo(map);
}

function Map({hotels, cities, activeCity, activeCard}) {
  const mapRef = useRef(null);
  const activeLocation = cities.filter((cityItem) => cityItem.name === activeCity);
  const map = useMap(mapRef, activeLocation[0]);
  const points = hotels.filter((hotelItem) => hotelItem.city.name === activeCity);

  useEffect(() => {
    if (map) {
      points.forEach((point) => renderPoints(point, activeCard, map));
    }
  }, [map, points, activeCard]);

  return (
    <section
      className="cities__map map"
      style={{height: '100vh'}}
      ref={mapRef}
    >
    </section>
  );
}

Map.propTypes = {
  hotels: hotelsProp,
  cities: citiesProp.isRequired,
  activeCity: PropTypes.string.isRequired,
  activeCard: PropTypes.string,
};

export default Map;
