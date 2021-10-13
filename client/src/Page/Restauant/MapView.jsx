import React from 'react'

import {AiOutlineCopy} from "react-icons/ai";
import {BiSubdirectoryRight} from "react-icons/bi";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// [13.059744218537944, 80.2457760599076]

const MapView = (props) => {
    return (
        <>
             <div>
                <h4 className="text-lg font-medium ">Call</h4>
                <h5 className="text-zomato-400 font-medium">{props.phno}</h5>
                </div>
                <div>
                <h4 className="text-lg font-medium ">Direction</h4>
                    <div className="w-full h-48">
                                        <MapContainer center={props.maplocation} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={props.maplocation}>
    <Popup>
      {props.title}
    </Popup>
  </Marker>
</MapContainer>
                    </div>
                    <p>{props.address}</p>
                    <div className="flex items-center gap-3">
                    <button className="flex items-center gap-3 px-3 py-2 text-gray-700 border border gray-400 border rounded-lg">
                        <AiOutlineCopy/> Copy
                    </button>
                       <button className="flex items-center gap-3 px-3 py-2 text-gray-700 border border gray-400 border rounded-lg">
                        <span className="text-zomato-400"><BiSubdirectoryRight/> </span> Direction
                    </button>
                    </div>
                </div>
        </>
    )
}

export default MapView;
