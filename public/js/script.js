// import { error } from "console";

const socket = io();
let name = localStorage.getItem("username");
if (!name) {
  name = prompt("Enter your name:");
  if (name) localStorage.setItem("username", name);
}
if(navigator.geolocation) {
  navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;
    // socket.emit("location", { latitude, longitude });
    socket.emit("location", { name, latitude, longitude });
  },(error) => {
    console.error("Error getting location:", error);
  },
    {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
    }
  );
}

const map = L.map("map").setView([0, 0], 19);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
 

const markers = {};
socket.on("recieve-location", (data)=>{
    const { id, latitude, longitude, name } = data;
    map.setView([latitude, longitude]);
    if(markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    }
    else {
        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(name).openPopup();
        markers[id] = marker;
    }
})

socket.on("disconnected", (data) => {

    if(markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
}
);