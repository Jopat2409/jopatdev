"use client";
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { MapContainer, ImageOverlay, useMap } from "react-leaflet";
import { CRS, latLngBounds } from "leaflet";
import { useEffect, useState } from "react";

import GameData from "@/data/mapdata.json"
import SpawnArea from "./SpawnBound";

const SetViewToBounds = ({bounds}) => {
    const map = useMap();
    bounds = latLngBounds(bounds);

    map.on("resize", () => {
        map.fitBounds(bounds);
    })

    useEffect(() => {
        map.fitBounds(bounds);
    }, [map, bounds]);

    return null;
};

function calcMapWidth(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return vw / 4;
}

function normalizeBound(bounds, length){
    // Bounds are [[bleft y, bleft x], [tright y, tright x]]
    const newBounds =  [[bounds[0][0] * length, bounds[0][1] * length], [bounds[1][0] * length, bounds[1][1]*length]]
    return newBounds;
}

export default function Map({map, currentDino = "Lightning Wyvern", mapWidth = null}) {
    const data = GameData["Maps"][map] || null

    const [bounds, setBounds] = useState(null)

    useEffect(() => {
        const img = new Image();
        img.src = data["image"];

        img.onload = () => {
            const width = img.naturalWidth;
            const height = img.naturalHeight;

            console.log(width, height)

            // Define bounds to match image size
            setBounds([[0, 0], [height, width]]);
        };
    }, [map])

    /* useEffect(() => {
        addEventListener("resize", (event) => {setSideLength(calcMapWidth())});
    }, []) */

    return (
        map == "unknown" || bounds === null ? <img className="w-full h-full" src="https://media.istockphoto.com/id/1162198273/vector/question-mark-icon-flat-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=MJbd8bw2iewJRd8sEkHxyGMgY3__j9MKA8cXvIvLT9E=" alt="Unknown map"/> :
        <MapContainer
            className="w-full h-full border-[#34A0C8] border-1"
            crs={CRS.Simple}
            dragging={false}
            minZoom={-5}
            zoomSnap={0}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            attributionControl={false}
            bounds={bounds}
        >
            <ImageOverlay
                url={data["image"]}
                bounds={bounds}
            />
            <SetViewToBounds bounds={bounds}/>
            {(data["dino-spawns"][currentDino] || []).map((spawnContainer, cIndex) => (
                data["spawn-containers"][spawnContainer]["bounds"].map((bound, bIndex) => {
                    return <SpawnArea key={`Bound${cIndex}${bIndex}`} i={bIndex} bounds={normalizeBound(bound, bounds[1][0])} container={spawnContainer} entryWeight={data["spawn-containers"][spawnContainer]["entries"][currentDino]["entry-weight"]}/>
                })
            ))}
        </MapContainer>
    );
}
