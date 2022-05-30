import styled, {css} from 'styled-components';

//Lista de objetos para criação dos breakpoints
const breakpoints = [
    {
        name: 'lg',
        break: 1368,
        color: 'blue',
    },
    {
        name: 'md',
        break: 1024,
        color: 'purple',
    },
    {
        name: 'sm',
        break: 768,
        color: 'red',
    }
]

//Magic Square
export const MagicSquare = styled.div`
    width: 300px;
    height: 300px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: blue;

    //Nesting style (estilar um elemento dentro do componente)
    .titulo{
        font-size: 3rem;
        &:hover{
            color: #282828;
        }
    }

    /*
        Um map da lista breakpoints

        É criado um @media para cada breakpoint.break
       
    */
    ${(props) => (
        breakpoints.map(breakpoint => (css`
        @media (max-width: ${breakpoint.break}px){
            width: ${props.width[breakpoint.name]}; // Os valores variam conforme o breakpoint responsivo
            height: ${props.height[breakpoint.name]}; // Os valores variam conforme o breakpoint responsivo
            background: ${breakpoint.color}; // O background color varia conforme a propriedade de objeto
        }
    `))
    )}

    
`