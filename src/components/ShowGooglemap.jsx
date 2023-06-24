import { useState } from "react";
import { useEffect } from "react";


function ShowMap() {
    let map;
    const [init, setInit] = useState(true)
    const [latitude, setLatitude] = useState(null)
    const [logtitude, setLongitude] = useState(null)
    async function initMap() {

        const position = { lat: 13.7513, lng: 100.4897, };

        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        map = new Map(document.getElementById("map"), {
            zoom: 12,
            center: position,
            mapId: "DEMO_MAP_ID",
        });
        let infoWindow = new google.maps.InfoWindow({
            content: "คลิ๊กเพื่อดูเส้นทาง",
            position: position,
        });

        const marker = new google.maps.Marker({
            position: position,
            map,
            title: "Click to zoom",
        });
        infoWindow.open(map, marker);

        map.addListener("click", (mapsMouseEvent) => {
            console.log(mapsMouseEvent.latLng.toJSON())
        });

    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setLatitude(pos.coords.latitude)
                setLongitude(pos.coords.longitude)
            });
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    useEffect(() => {

        if (logtitude && init) {
            console.log(init)
            initMap()
            setInit(false)
        }
    }, [logtitude, latitude])

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <a href={`https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`}>
            <div className="w-[500px] h-[500px] " id="map">MapPage</div>
            </a>
        </div>
    )
}




export default ShowMap