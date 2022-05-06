import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../../hooks/use-map/use-map';
import { createIcon } from '../../../../utils/for-render-pins';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../../../constants/common';

function renderPoints({id, location: {latitude, longitude}}, activeOffer, map) {
  leaflet
    .marker({
      lat: latitude,
      lng: longitude,
    }, {
      icon: (id === activeOffer.id)
        ? createIcon(URL_MARKER_CURRENT)
        : createIcon(URL_MARKER_DEFAULT),
    })
    .addTo(map);
}

function MapOffer({activeOffer, currentCity, offersNearby}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const points = offersNearby;

  useEffect(() => {
    if (map) {
      points.forEach((point) => renderPoints(point, activeOffer, map));
      renderPoints(activeOffer, activeOffer, map);
    }
  }, [points, activeOffer, map]);

  return (
    <section
      className="property__map map"
      style={{height: '579px'}}
      ref={mapRef}
    >
    </section>
  );
}

MapOffer.propTypes = {
  offersNearby: PropTypes.array.isRequired,
  currentCity: PropTypes.object.isRequired,
  activeOffer: PropTypes.shape({
    bedrooms: PropTypes.number,
    city: PropTypes.shape({
      location: PropTypes.objectOf(PropTypes.number),
      name: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    goods: PropTypes.array,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),

    id: PropTypes.number.isRequired,
    images: PropTypes.array,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,

    maxAdults: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default MapOffer;
