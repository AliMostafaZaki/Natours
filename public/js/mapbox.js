/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWxpLXpha2kiLCJhIjoiY2xnYjB3eXd5MDd1ODNscDVmZ2R1NXRiaiJ9.4D3LOOkoDhRQtre-GYEXhw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ali-zaki/clgb385br000201p2vbfnxe3v',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      Element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}<p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 200,
      left: 150,
      right: 100,
    },
  });
};
