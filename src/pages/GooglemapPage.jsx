import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ShowMap({ name }) {
  let map;
  const { id } = useParams();
  const userPropertiesIdlist = useSelector(
    (state) => state?.userProperties?.userPropertiesById
  );
  console.log( userPropertiesIdlist,'sssss')
  async function initMap(lat,long) {
    
    const position = { lat: lat, lng: long };

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 14,
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
      window.location.replace(
        `https://www.google.com/maps/search/?api=1&query=${userPropertiesIdlist.latitude}%2C${userPropertiesIdlist.longitude}`
      );
    });
  }


  useEffect(() => {
      if(+id === +userPropertiesIdlist.id){
        initMap(+userPropertiesIdlist.latitude,+userPropertiesIdlist.longitude);
      }
  }, [userPropertiesIdlist]);

  return (
    <div className="">
      <div className="w-[90%] h-[500px]" id="map">
      </div>
    </div>
  );
}

export default ShowMap;
