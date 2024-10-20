import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root {
/* Colors */
  --color-white: #FFFFFF;
  --color-primary-background: #000000;
  --color-secondary-background: #2E2E2E;
  --color-imperial-red: #D21F26;
  --color-jedi-blue: #0E6EB8; 
  --color-jedi-blue-dark: #0C5D94; 
  --color-jedi-blue-darker: #083D55;


  /* Font weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;

  /* font size */
  --font-size-mini: 1rem;
  --font-size-tiny: 1.2rem;
  --font-size-small: 1.4rem;
  --font-size-medium: 1.6rem;
  --font-size-big: 1.8rem;
  --font-size-large: 2.2rem;
  --font-size-huge: 2.4rem;
  --font-size-extra-huge: 3rem;
  --font-size-largest: 4rem;

  --site-width: 120rem;

  --small: 576px;
  --medium: 768px;
  --large: 992px;
  --huge: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.2s, border 0.2s, box-shadow 0.2s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight:var(--font-weight-medium);
  color: var(--color-white);
  background-color:var(--color-primary-background);
  letter-spacing: 1px;
  transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
  min-height: 100vh;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-cloudy-gray);
  outline-offset: -1px;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  border:none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}


img {
  max-width: 100%;
}

@media screen and (max-width: 1200px) {
  html {
    font-size: 60%;
  }
}

@media screen and (max-width: 992px) {
  html {
    font-size: 57.5%;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 55%;
  }
}

@media screen and (max-width: 576px) {
  html {
    font-size: 50%;
  }
}


`;

export default GlobalStyles;
