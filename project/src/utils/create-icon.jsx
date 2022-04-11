import leaflet from 'leaflet';

export function createIcon(urlMarker) {
  return leaflet.icon({
    iconUrl: urlMarker,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
}
