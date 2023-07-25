import { useState } from "react";
import { useEffect } from "react";

function MapPage({ location, handleChangeMap }) {
  let map;
  console.log("location----->", location);
  const namberlatitude = parseFloat(location?.lat);
  const namberlongitude = parseFloat(location?.lng);

  const [init, setInit] = useState(true);
  const [latitude, setLatitude] = useState(namberlatitude);
  const [longitude, setLongitude] = useState(namberlongitude);

  async function initMap() {
    const position = { lat: latitude, lng: longitude };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 12,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
    let infoWindow = new google.maps.InfoWindow({
      content: "กรุณาเลือกที่ตั้งอีกครั้ง",
      position: position,
    });
    const marker = new google.maps.Marker({
      position: position,
      map,
      title: "Click to zoom",
    });
    infoWindow.open(map, marker);

    map.addListener("click", (mapsMouseEvent) => {
      // console.log(mapsMouseEvent.latLng.toJSON());
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
    if (longitude && init) {
      initMap();
      setInit(false);
    }
  }, [longitude]);

  return (
    <div className="">
      <div className="w-[100%] h-[350px]" id="map">
        MapPage
      </div>
    </div>
  );
}

export default MapPage;
