import { useState } from "react";
import { useEffect } from "react";
import PropertyForm from "../features/createproperty/components/PropertyForm";

function MapPage({ location, handleChangeMap }) {
  let map;
  const [init, setInit] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [logtitude, setLongitude] = useState(null);
  async function initMap() {
    const position = { lat: latitude, lng: logtitude };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 12,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: position,
    });
    const marker = new google.maps.Marker({
      position: position,
      map,
      title: "Click to zoom",
    });
    infoWindow.open(map, marker);

    map.addListener("click", (mapsMouseEvent) => {
      // console.log(mapsMouseEvent.latLng.toJSON())
      marker.setPosition(mapsMouseEvent.latLng.toJSON());
      setLatitude(mapsMouseEvent.latLng.toJSON().lat);
      setLongitude(mapsMouseEvent.latLng.toJSON().lng);
      handleChangeMap({
        lat: mapsMouseEvent.latLng.toJSON().lat,
        lng: mapsMouseEvent.latLng.toJSON().lng,
      });
    });

    // console.log("-----------------map---------------", position);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);

        handleChangeMap({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
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
      <div className="w-[100%] h-[350px]" id="map">
        MapPage
      </div>
    </div>
  );
}

export default MapPage;
