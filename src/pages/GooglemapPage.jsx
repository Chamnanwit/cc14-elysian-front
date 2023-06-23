import { useState } from "react";
import { useEffect } from "react";


function MapPage() {
    let map;
    const [init, setInit] = useState(true)
    const [latitude, setLatitude] = useState(null)
    const [logtitude, setLongitude] = useState(null)
    async function initMap() {
        // The location of Uluru
        // console.log(position.coords)
        // const position = { lat: latitude, lng: logtitude, };
        const position = { lat: 13.7513, lng: 100.4897, };
        // Request needed libraries.
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        // The map, centered at Uluru
        map = new Map(document.getElementById("map"), {
            zoom: 12,
            center: position,
            mapId: "DEMO_MAP_ID",
        });
        let infoWindow = new google.maps.InfoWindow({
            content: "Click the map to get Lat/Lng!",
            position: position,
        });
        // infoWindow.open(map);
        const marker = new google.maps.Marker({
            position: position,
            map,
            title: "Click to zoom",
        });
        infoWindow.open(map, marker);

        // Configure the click listener.
        map.addListener("click", (mapsMouseEvent) => {
            /*    // Close the current InfoWindow.
               infoWindow.close();
               // Create a new InfoWindow.
               infoWindow = new google.maps.InfoWindow({
                   position: mapsMouseEvent.latLng,
               });
               infoWindow.setContent(
                   JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
               );
               infoWindow.open(map); */
            // const marker = new AdvancedMarkerElement({
            //     map,
            //     position: { lat: mapsMouseEvent.latLng.lat, lng: mapsMouseEvent.latLng.lng },
            // });
            console.log(mapsMouseEvent.latLng.toJSON())
            // new google.maps.Marker({
            //     position: { lat: mapsMouseEvent.latLng.toJSON().lat, lng: mapsMouseEvent.latLng.toJSON().lng },
            //     map,
            //     title: "Hello World!",
            // });
            marker.setPosition(mapsMouseEvent.latLng.toJSON())


            setLatitude(mapsMouseEvent.latLng.toJSON().lat)
            setLongitude(mapsMouseEvent.latLng.toJSON().lng)
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

            <div className="w-[500px] h-[500px]" id="map">MapPage</div>
        </div>
    )
}




export default MapPage