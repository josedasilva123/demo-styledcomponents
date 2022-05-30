import styled from "styled-components";

export const TextExample = styled.h1`

    // CSS
    font-family: sans-serif;
    font-size: 2rem;

    //Javascript (Repecpção de props)
    color: ${(props) => props.color};
`

