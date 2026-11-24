const zoom = 4;
const firstTileX = 7;
const firstTileY = 5;
const tileSize = 256;
const tileColumns = [7, 8, 9, 10];
const tileRows = [5, 6, 7];

function projectPoint(longitude: number, latitude: number) {
  const worldTiles = 2 ** zoom;
  const x = ((longitude + 180) / 360) * worldTiles * tileSize - firstTileX * tileSize;
  const sinLatitude = Math.sin((latitude * Math.PI) / 180);
  const y = (0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI)) * worldTiles * tileSize - firstTileY * tileSize;
  return { x, y };
}

const barcelona = projectPoint(2.1686, 41.3874);
const cairo = projectPoint(31.2357, 30.0444);
const saudiArabia = projectPoint(46.6753, 24.7136);

export default function GlobalMap() {
  return (
    <div className="map-visual" aria-label="Map with markers for Barcelona, Cairo, and Saudi Arabia">
      <div className="map-canvas">
        <div className="map-tiles" aria-hidden="true">
          {tileRows.flatMap((y) => tileColumns.map((x) => (
            <img key={`${x}-${y}`} src={`https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`} alt="" loading="lazy" />
          )))}
        </div>
        <svg className="map-markers" viewBox="0 0 1024 768" preserveAspectRatio="none" role="img" aria-label="Barcelona, Cairo, and Saudi Arabia locations">
          <path className="map-route" d={`M${barcelona.x} ${barcelona.y} Q445 220 ${cairo.x} ${cairo.y} Q704 445 ${saudiArabia.x} ${saudiArabia.y}`} />
          <g className="map-location" transform={`translate(${barcelona.x} ${barcelona.y})`}>
            <circle r="11" /><circle className="map-location-core" r="4" />
            <path className="map-leader" d="M0 -12V-44H-70" />
            <rect className="map-label-bg" x="-156" y="-66" width="86" height="23" rx="3" />
            <text x="-145" y="-51">BARCELONA</text>
          </g>
          <g className="map-location" transform={`translate(${cairo.x} ${cairo.y})`}>
            <circle r="11" /><circle className="map-location-core" r="4" />
            <path className="map-leader" d="M0 -12V-47H-44" />
            <rect className="map-label-bg" x="-118" y="-69" width="74" height="23" rx="3" />
            <text x="-107" y="-54">CAIRO</text>
          </g>
          <g className="map-location" transform={`translate(${saudiArabia.x} ${saudiArabia.y})`}>
            <circle r="11" /><circle className="map-location-core" r="4" />
            <path className="map-leader" d="M0 -12V-44H22" />
            <rect className="map-label-bg" x="22" y="-66" width="112" height="23" rx="3" />
            <text x="32" y="-51">SAUDI ARABIA</text>
          </g>
        </svg>
      </div>
      <a className="map-attribution" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap contributors</a>
    </div>
  );
}
