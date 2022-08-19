/** @jsxImportSource @emotion/react */
import React from "react";
import MapComponent from "../MapComponent/MapComponent";
import tw from "twin.macro"
import { H2, H3, Content } from "../Typography/Typography";

const DataDisplayComponent = ({data}) => {
    let result = data?.result || data || {}
    const {
        city,
        country,
        query,
        lat,
        lon
    } = result

    return (
        <div css={[
            tw`w-[90%] flex flex-col justify-center items-center`,
            tw`md:flex-row`
            ]}>
            <MapComponent 
                lat={lat}
                lon={lon}
            />
            <div css={[tw`w-[80%] md:w-[50%] md:m-[1em]`]}>
                <H2>Data:</H2>
                <div css={[tw`flex flex-col justify-center h-[200px] border-2 border-white border-solid p-3 rounded-[16px]`]}>
                    <H3>{city}</H3>
                    {data?.value &&
                        <Content>{data.value}</Content>
                    }
                    <Content>{country}</Content>
                    <Content>{query}</Content>
                </div>
            </div>
        </div>
    )
}

export default DataDisplayComponent