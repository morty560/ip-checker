/* eslint-disable no-unused-vars */
/*global google*/
/** @jsxImportSource @emotion/react */
import React, {useState, useCallback} from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import tw from "twin.macro";

const containerStyle = {
    height: 350, 
    width: '100%', 
    display: 'flex', 
    flexFlow: 'row nowrap', 
    justifyContent: 'center', 
    padding: 0 
}

const MapComponent = ({lat, lon}) => {
    const [map, setMap] = useState(null)
    const center = {
        lat: lat || 0,
        lng: lon || 0
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
    })

    const onLoad = useCallback(function callback(map) {
        map.setZoom(5);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        isLoaded &&
        <div css={[tw`w-[85%] flex justify-center items-center`,
        tw`md:w-[50%]`]}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                defaultCenter={center}
                zoom={8}
                defaultZoom={8}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    disableDefaultUI: true
                }}
            >
                <Marker
                    position={center}
                />
            </GoogleMap>
        </div>
    )
}


export default MapComponent