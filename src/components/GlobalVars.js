const GlobalVars = (theme, homepage) => `
  html {
    font-block: fallback;
    ${homepage === true ? 'scroll-behavior: smooth;' : ''}
    background-color: ${theme.footerBg};
  }
  body {
    background-color: ${theme.bodyBg};
  }
  html, body {
    font-family: Roboto, sans-serif;
    color: ${theme.textDefault};  
  }
  p, h1, h2, h3, h4, h5, h6, li, ul {
    line-height: 1.35;
    font-size: 1rem;
  }
  p, h1, h2, h3, h4, h5, h6, ul {
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: .25rem;
  }
  p:last-child, h1:last-child, h2:last-child, h3:last-child, h4:last-child, h5:last-child, h6:last-child, ul:last-child {
    margin-bottom: 0;
  }
  a {
    pointer: cursor;
  }
`

export default GlobalVars
