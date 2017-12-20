import color from "./color.js";
import { injectGlobal } from "styled-components";
const normalize = require("!raw-loader!./normalize.css");

injectGlobal`
  ${normalize}
  
  * { box-sizing: border-box; }

  body {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "Arial",
      sans-serif;
      line-height: 1.3;
  }
  html, body, #___gatsby, #___gatsby > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  ul, li {
    margin: 0;
  }
  ul {
    padding-left: 1em;
  }
  li {
    display: block;
  }
  a {
    text-decoration: none;
    color: ${color.gray[0]};
    border-bottom: 3px solid ${color.offWhite[0]};
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  p {
    font-size: 17px;
  }
  mark {
    background-color: ${color.offWhite[0]};
    color: #000;
    font-family: monospace;
    padding: 0.25em;
  }
  hr {
    margin: 1.5em 0;
    opacity: 0.5;
  }
`;
