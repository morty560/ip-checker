/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";
import { H3, Content } from "../Typography/Typography";

const SearchHistoryComponent = ({ data, setSearch }) => {
    return(
        <div css={[tw`w-full flex flex-col items-center text-center`]}>
            <H3>Search History:</H3>
            <div css={[tw`w-[80%] min-h-[100px] flex flex-col justify-center border-2 border-white border-solid p-3 rounded-[16px]`]}>
                {data.map((item,idx) => {
                    return <div 
                    css={[tw`flex justify-between cursor-pointer rounded-[8px] p-[0 12px] hover:bg-secondary`]} 
                    key={idx}
                    onClick={() => setSearch(item)}
                    >
                        <Content>{item.result.city}</Content>
                    </div>
                })}
            </div>
        </div>
    )

}


export default SearchHistoryComponent