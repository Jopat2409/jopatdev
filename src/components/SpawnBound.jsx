import React, { forwardRef, useState } from "react";
import { Rectangle, Tooltip } from "react-leaflet";

import "@/app/tooltip.css"

const ForwardRectangle = forwardRef((props, ref) => (
    <div ref={ref}>
        <Rectangle {...props}/>
    </div>
));
ForwardRectangle.displayName = "ForwardRectangle"

export default function SpawnArea({bounds, container, entryWeight, spawnChances}){

    const getColorForSpawnProbability = (probability) => {
        if (probability > 0.75) return '#00FF00';
        if (probability > 0.5) return '#FFFF00';
        if (probability > 0.25) return '#FF8800';
        return '#FF0000';
    };

    const [opened, setOpened] = useState(false);

    return (
        <Rectangle
            bounds={bounds}
            pathOptions={{
                fillColor: getColorForSpawnProbability(entryWeight),
                fillOpacity: 0.4,
                weight: 3,
                color: getColorForSpawnProbability(entryWeight)
            }}
            eventHandlers={{click: () => setOpened(true)}}
        >
            <Tooltip direction="bottom" className="ark-tooltip" offset={[0, 10]}>
                <span>{container}</span>
            </Tooltip>
        </Rectangle>
    )
}
