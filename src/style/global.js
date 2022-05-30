import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    button{
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
    body{
        background: #cecece;
    }
`

export const Container = styled.div`
    background: #fff;
    width: 100%;
    margin: 0 auto;
    
    //Alteração por props
    max-width: ${(props) => props.containerWidth}px;

    //Condição em switchcase
    ${(props) => {
      switch(props.containerPadding){
          case 'lg':
              return css`
                padding: 3rem;
              `
          case 'md':
              return css`
                padding: 2rem;
              `
          case 'sm':
              return css`
                padding: 1rem;
              `        
          default:
              return false; 
      }  
    }}
`

export const ThemeButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;

    //Condição ternária
    background: ${(props) => props.active ? 'blue' : 'gray'};

    //Condição if e else (use switch, seja brabo!)
    ${(props) => {
        if(props.buttonSize === "lg"){
            return css`
                font-size: 24px;
                padding: 0 2rem;
                height: 70px;
            `
        } else if (props.buttonSize === "md"){
            return css`
                font-size: 20px;
                padding: 0 1.5rem;
                height: 60px;
            `
        } else if (props.buttonSize === "sm"){
            return css`
                font-size: 17px;
                padding: 0 1rem;
                height: 50px;
            `
        }
    }}
`