import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../../hooks/use-map/use-map';
import { createIcon } from '../../../../utils/for-render-pins';
import { URL_MARKER_DEFAULT } from '../../../../constants/common';

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

function MapOffer({currentCity, offersNearby}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const points = offersNearby;

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
  offersNearby: PropTypes.array.isRequired,
  currentCity: PropTypes.object.isRequired,
};

export default MapOffer;
