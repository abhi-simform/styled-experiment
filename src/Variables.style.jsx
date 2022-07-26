import styled, { css } from "styled-components";

export const color = {
  Primary: "#252D5A",
  Secodary: "#0379B6",
  HeroBlue: "#3C88B5",
  FooterTop: "#003048",
  PrimaryDark: "#001B29",
  Social: "#3A3080",
  Body: "#505D68",
  Muted: "#A1AEB7",
  White: "#ffffff",
  Black: "#000000",
};

// export const breakpoints = {
//   xxl: "1399.98px",
//   xl: "1199.98px",
//   lg: "991.98px",
//   md: "767.98px",
//   sm: "575.98px",
// };

export const theme = {
  light: (styles) => css`
    @media (prefers-color-scheme: light) {
      ${styles};
    }
  `,
  dark: (styles) => css`
    @media (prefers-color-scheme: dark) {
      ${styles};
    }
  `,
};

export const breakpoint = {
  xxl: (styles) => css`
    @media (max-width: 1399.96px) {
      ${styles};
    }
  `,
  xl: (styles) => css`
    @media (max-width: 1199.98px) {
      ${styles};
    }
  `,
  lg: (styles) => css`
    @media (max-width: 991.98px) {
      ${styles};
    }
  `,
  md: (styles) => css`
    @media (max-width: 767.98px) {
      ${styles};
    }
  `,
  sm: (styles) => css`
    @media (max-width: 575.98px) {
      ${styles};
    }
  `,
};

export const rem = (px) => {
  const base = 16;
  return px / base + "rem";
};
