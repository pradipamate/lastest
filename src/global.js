import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: red;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
 
  small {
    display: block;
  }
  a {
    color: red;
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
  .product_listing h1{font-size:3rem;color:#fff;font-weight: bolder;margin:0 0 25px 0}
  .product_listing .card .card-body{border: 2px solid #fff;
    color: #fff;padding: 35px;}
  .product_listing h2{font-weight: bolder;margin:10px 0px 20px 0}
   .product_listing .listing_div{ margin-bottom:35px}
  `;
