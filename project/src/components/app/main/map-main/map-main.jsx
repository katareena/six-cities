import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../../hooks/use-map/use-map';
import citiesProp from '../../../prop-types/cities.prop.js';
import offersProp from '../../../prop-types/offers.prop';
import { createIcon } from '../../../../utils/for-render-pins';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../../../constants/common';

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

function Map({offers, cities, activeCity, activeCard}) {
  const mapRef = useRef(null);
  const activeLocation = cities.filter((cityItem) => cityItem.name === activeCity);
  const map = useMap(mapRef, activeLocation[0]);
  const points = offers.filter((hotelItem) => hotelItem.city.name === activeCity);

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
  offers: offersProp,
  cities: citiesProp.isRequired,
  activeCity: PropTypes.string.isRequired,
  activeCard: PropTypes.number,
};

export default Map;
