import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font: inherit;
  -webkit-font-smoothing: antialiased;
}

html:focus-within {
  scroll-behavior: smooth;
}

html,body {
  height: 100%;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: "Readex Pro", sans-serif;
}

ul,ol {
  list-style: none;
}

a {
  text-decoration: none;
  text-decoration: none;
  color: inherit;
}

img,
picture {
  max-width: 100%;
  display: inline-block;
}

section {
  padding-block: 3rem;
}

.container {
  max-width: min(90%, 60rem);
  margin-inline: auto;
}
`;

export default Global;
