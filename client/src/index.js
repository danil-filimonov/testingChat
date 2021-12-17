import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html, body {
    font-size: 16px;
    font-family: consolas;
    color: white;
  }
`

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root')
)
