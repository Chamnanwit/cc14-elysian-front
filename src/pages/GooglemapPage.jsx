import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function ShowMap({ name, lat, long }) {
  let map;
  const [init, setInit] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [logtitude, setLongitude] = useState(null);
  const navigate = Navigate;
  async function initMap() {
    console.log("........................", name);
    const position = { lat: 13.7513, lng: 100.4897 };

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 17,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
    let infoWindow = new google.maps.InfoWindow({
      content: `${name}`,
      position: position,
    });

    const marker = new google.maps.Marker({
      position: position,
      map,
      title: "Click to zoom",
    });
    infoWindow.open(map, marker);

    marker.addListener("click", (mapsMouseEvent) => {
      console.log(mapsMouseEvent.latLng.toJSON());
      //   navigate(
      //     `https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`
      //   );
      window.location.replace(
        `https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`
      );
    });
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      });
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (logtitude && init) {
      console.log(init);
      initMap();
      setInit(false);
    }
  }, [logtitude, latitude]);

  return (
    <div className="">
      {/* <a href={`https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`}> */}
      <div className="w-[90%] h-[500px]" id="map">
        MapPage
      </div>
      {/* </a> */}
    </div>
  );
}

export default ShowMap;
