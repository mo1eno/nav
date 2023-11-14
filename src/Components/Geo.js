import React, {useEffect, useState} from "react";
import { useGeolocated } from "react-geolocated";
import {buttonClasses} from "@mui/material";
import {YMaps, Map} from "@pbe/react-yandex-maps";
const Geo = () => {
    const [latVisible, setLatVisible] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('latitude')){
            setLatVisible(true)
        } else{
            setLatVisible(false)
        }
    }, [])

    const { coords, isGeolocationAvailable, isGeolocationEnabled, getPosition } =

        useGeolocated({
            suppressLocationOnMount: true,

            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    const handler = () => {
        getPosition();
    }

    const savecoord = () => {
        localStorage.setItem('latitude', coords?.latitude);
        localStorage.setItem('longitude', coords?.longitude);
    }
    const lat = localStorage.getItem('latitude');

    return <>
        {!isGeolocationAvailable && <div>Your browser does not support Geolocation</div>}
        {!isGeolocationEnabled && <div>Geolocation is not enabled</div>}
        {coords && <table>
            <tbody>
            <tr>
                <td>latitude</td>
                <td>{coords?.latitude}</td>
            </tr>
            <tr>
                <td>longitude</td>
                <td>{coords?.longitude}</td>
            </tr>
            </tbody>
            <YMaps>
                <Map defaultState={{
                    center: [coords?.latitude, coords?.longitude],
                    zoom: 9
                }}/>
            </YMaps>
            <button onClick={savecoord}>Save</button>
        </table>}
        {!latVisible && <>
            <td>{lat}</td>
            <div>Getting the location data&hellip;
                <tr>
                    <td onClick={() => handler()}>Click</td>
                </tr>
            </div>
        </>}
    </>
};


export default Geo;