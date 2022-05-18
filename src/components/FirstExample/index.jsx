import React from 'react'
import styled from 'styled-components'

//Component
const TextExample = styled.h1`
    // CSS
    font-family: sans-serif;
    font-size: 2rem;
    //Javascript
    color: ${(props) => props.color};
`

const FirstExample = () => {
  return (
    <div>
        { /* Passagem de props e importação de componente */ }
        <TextExample color="red">Teste</TextExample>
    </div>
  )
}

export default FirstExample