/* eslint-disable default-case */
import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0
    }
    body{
        background: #cecece;
    }
`

export const ThemeButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${(props) => {
        switch(props.buttonSize){
            case 'lg':
                return css`
                    padding: 0 2rem;
                    height: 54px;
                `
            case 'md':
                return css`
                    padding: 0 1.5rem;
                    height: 48px;
                `    
            case 'sm':
                return css`
                    padding: 0 1rem;
                    height: 42px;
                `    
        }
    }}
`

export const Container = styled.div`
    background: #fff;
    width: 100%;
    margin: 0 auto;
    padding: ${(props) => props.containerPadding};
    max-width: ${(props) => props.containerWidth}
`