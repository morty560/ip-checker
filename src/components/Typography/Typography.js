/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";

export const H1 = ({children}) => {
    return <h1 css={[tw`text-secondary text-[4rem] tracking-[6px]`]}>{children}</h1>
}

export const H2 = ({children, extraCss}) => {
    return <h2 css={[tw`text-[3rem] tracking-[5px] m-[15px 0] text-white`, ...extraCss]}>{children}</h2>
}

H2.defaultProps = {
    extraCss: [],
}

export const H3 = ({children, extraCss}) => {
    return <h3 css={[tw`tracking-[7px] text-white m-[15px 0] text-[1.5rem]`, ...extraCss]}>{children}</h3>
}
H3.defaultProps = {
    extraCss: [],
}

export const Content = ({children, extraCss}) => {
    return <p css={[tw`tracking-[7px] text-white m-[15px 0] text-[1.2rem]`, ...extraCss]}>{children}</p>
}
Content.defaultProps = {
    extraCss: [],
}