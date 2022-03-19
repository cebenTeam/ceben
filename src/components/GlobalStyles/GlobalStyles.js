import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* Global styles */
  ::selection {
    background-color: #ecebfc;
  }

  * {
    margin: 0;
    padding: 0;
    line-height: calc(1em + 0.625rem);
    -webkit-font-smoothing: antialiased;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    overflow-y: scroll;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    font-family: Pretendard, -apple-system, system-ui, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    color: var(--text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    word-break: keep-all;
  }

  a {
    color: #6a5fe3;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    vertical-align: top;
    object-fit: cover;
  }

  /* CSS Variables */
  :root {
    --text-color: #0f0d1d;
  }  
`

const GlobalStylesWrapper = (props) => {
  return <GlobalStyles {...props} />
}

export default React.memo(GlobalStylesWrapper)