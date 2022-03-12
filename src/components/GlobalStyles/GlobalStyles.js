import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: calc(1em + 0.625rem);
  }

  ::selection {
    background-color: #FFE699;
  }

  html, body {
    height: 100%;
  }

  html {
    overflow-y: scroll;
  }

  body {
    font-family: Pretendard, -apple-system, system-ui, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    color: #23272a;
  }

  a {
    color: #23272a;
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
`

const GlobalStylesWrapper = (props) => {
  return <GlobalStyles {...props} />
}

export default React.memo(GlobalStylesWrapper)