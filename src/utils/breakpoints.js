import { css } from "styled-components";

const breakpoints = (
  cssProp = "padding", // the CSS property to apply to the breakpoints
  cssPropUnits = "px", // the units of the CSS property (can set equal to "" and apply units to values directly)
  values = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
  mediaQueryType = "max-width" // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `);
  }, "");
  return css([breakpointProps]);
};
export default breakpoints;

/*

### EXEMPLO DE USO
https://jordan-eckowitz.medium.com/responsive-styled-components-breakpoints-function-447b2db915a2
import styled from "styled-components";

import { breakpoints } from "./utils";

export const Wrapper = styled.div`
  padding: 100px;
  ${breakpoints("padding", "px", [
    { 1200: 80 },
    { 800: 60 },
    { 600: 40 },
    { 450: 20 }
  ])};
`;

export const Title = styled.h1`
  font-size: 5rem;
  ${breakpoints("font-size", "rem", [
    { 1200: 4 },
    { 800: 3 },
    { 600: 2.4 },
    { 450: 1.6 }
  ])};
`;

export const Content = styled.section`
  font-size: 3rem;
  margin: 60px 0;
  ${breakpoints("font-size", "rem", [
    { 1200: 2.4 },
    { 800: 1.8 },
    { 600: 1.6 },
    { 450: 1.2 }
  ])};
  ${breakpoints("margin", "", [{ 1200: "40px 0" }, { 600: "20px 0" }])}; // apply units directly to CSS prop values
`;

*/