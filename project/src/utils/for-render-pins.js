import leaflet from 'leaflet';

export function createIcon(urlMarker) {
  return leaflet.icon({
    iconUrl: urlMarker,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });
}
