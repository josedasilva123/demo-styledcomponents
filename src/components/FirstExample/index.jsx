import React, {useState} from 'react'
import { TextExample } from './style';


const FirstExample = () => {
  const [color, setColor] = useState('purple');
  return (
    <div>
        { /* Passagem de props e importação de componente */ }
        <TextExample color={color}>Teste</TextExample>
    </div>
  )
}

export default FirstExample