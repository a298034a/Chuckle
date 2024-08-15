// Initialize and add the map
const firstFlagImg = document.createElement("img");
firstFlagImg.src = "./images/map/hot1.png";

const secondFlagImg = document.createElement("img");
secondFlagImg.src = "./images/map/hot2.png";

const thirdFlagImg = document.createElement("img");
thirdFlagImg.src = "./images/map/hot3.png";

async function initMap() {
    // 國立台北商業大學承曦樓
    const position = { lat: 25.042827, lng: 121.524863 };

    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at 承曦樓
    let map = new Map(document.getElementById("map"), {
        zoom: 16,
        center: position,
        mapId: "4422581b7cba5492",
    });

    // The marker, positioned at 承曦樓
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        content: firstFlagImg,
        title: "國立台北商業大學承曦樓",
    });

    marker.addListener("click", () => {
        console.log(marker.title);
    });
}

initMap();