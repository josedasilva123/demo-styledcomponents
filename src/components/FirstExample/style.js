import styled from "styled-components"

export const TextExample = styled.h1`
    // CSS
    font-family: sans-serif;
    font-size: 2rem;
    //Javascript
    color: ${(props) => props.color};
`