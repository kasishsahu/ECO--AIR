import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function PollutionMap() {
  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={11}
      style={{ height: "400px", width: "100%", borderRadius: "16px" }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[28.6139, 77.2090]}>
        <Popup>
          AQI: 185 <br />
          Moderate
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default PollutionMap;