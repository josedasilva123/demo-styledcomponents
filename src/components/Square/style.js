import styled, {css} from "styled-components";

const breakpoints = [
    {
        name: 'lg',
        break: 1368,
        color: "yellow"
    },
    {
        name: 'md',
        break: 1024,
        color: "purple"
    },
    {
        name: 'lg',
        break: 768,
        color: "pink"
    },
]

export const StyledSquare = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-color: red;

    ${(props) => (breakpoints.map((breakpoint) => (css`
        @media (max-width: ${breakpoint.break}px){
            background-color: ${breakpoint.color};
            width: ${props.size?.[breakpoint.name]};
            height: ${props.size?.[breakpoint.name]};
        }
    `)))
    }
`