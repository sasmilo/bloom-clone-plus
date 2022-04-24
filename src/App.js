/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from './images/1-logo1.png';
import cart1 from './images/2-shopping-cart.png';
import flag from './images/3-country-at.svg';
import heroImage from './images/4-hero-2.png';
import envelope from './images/6-envelope-red.png';

const lightGray = '#F4F4F4';
const darkGray = '#575757';
const darkRed = '#8e0919';

const appStyles = css`
  font-family: Futura, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

  background-color: white;
  display: flex;
  flex-direction: column;

  button {
    color: white;
    background-color: ${darkRed};
    border: solid 2px;
    border-color: ${darkRed};
    padding: 20px 60px;
    font-size: 22px;
    font-weight: bold;
    border-radius: 25px;
    transition: all 0.35s ease-in-out;
  }

  button:hover {
    background-color: transparent;
    color: ${darkRed};
  }

  h1 {
    font-size: 60px;
  }

  h3 {
  }

  h4 {
  }

  p {
    font-size: 25px;
  }
`;

const headerStyles = css`
  display: flex;
  width: 100%;
  height: 20vh;
  min-height: 150px;
  max-height: 250px;

  #whole-div {
    width: 100%;
    padding: 20px;
  }

  #whole-div > * {
    padding: 0 20px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${lightGray};
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 22px;
  }

  a:hover {
    color: ${darkRed};
  }

  /* Dropdown Button */
  .dropbtn {
    background-color: transparent;
    color: black;
    padding: 16px;
    font-size: 22px;
    font-weight: normal;
    border: none;
    font-family: Futura, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    font-size: 20px;
    font-family: Futura, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    color: darkRed;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
    width: 200px;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    color: ${darkRed};
  }

  #language-button {
    display: inline-block;
    cursor: pointer;
    border: none;
    color: black;
    background-color: ${lightGray};
    font-weight: normal;
  }

  img {
    cursor: pointer;
  }

  #newsletter-button {
    background-color: ${darkRed};
    position: fixed;
    top: 200px;
    right: -60px;
    transform: rotate(270deg);
    border-radius: 10px 10px 0 0;
    font-size: 22px;
    padding: 10px 0 10px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;

    img {
      transform: rotate(90deg);
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
    }

    span {
      padding-right: 15px;
    }
  }
`;

const section1Styles = css`
  background-color: ${lightGray};
  width: 100%;
  height: 80vh;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-height: 80vh;
    width: auto;
  }

  h1 {
    color: ${darkGray};
    position: absolute;
    top: 30vh;
  }

  p {
    color: ${darkGray};
    position: absolute;
    top: 60vh;
  }

  button {
    position: absolute;
    top: 70vh;
  }
`;

function App() {
  return (
    <div css={appStyles}>
      <header css={headerStyles}>
        <div id="whole-div">
          <a href="https://www.bloomdiagnostics.com/en_AT">
            <img src={logo} alt="Bloom logo" />
          </a>
          <a href="https://www.bloomdiagnostics.com/en_AT/how-it-works">
            How it works
          </a>
          <div class="dropdown">
            <button class="dropbtn">Tests</button>
            <div class="dropdown-content">
              <a href="https://www.bloomdiagnostics.com/en_AT/tests/ferritin">
                Ferritin Test
              </a>
              <a href="https://www.bloomdiagnostics.com/en_AT/tests/ovarianreserve">
                Ovarian Reserve Test
              </a>
              <a href="https://www.bloomdiagnostics.com/en_AT/tests/thyroid">
                Thyroid Test
              </a>
            </div>
          </div>
          <a href="https://www.bloomdiagnostics.com/en_AT/try-it">Try it</a>
          <a href="https://www.bloomdiagnostics.com/en_AT/about-bloom">
            About Bloom
          </a>
          <a href="https://www.bloomdiagnostics.com/en_AT/become-a-partner">
            Become a Partner
          </a>
          <a href="https://www.bloomdiagnostics.com/en_AT/contact">Contact</a>
          <a href="https://www.bloomdiagnostics.com/en_AT/#shop">Shop</a>
          <img src={cart1} alt="cart icon" />
          <button id="language-button">
            <span>
              <img src={flag} alt="Austrian flag" />
            </span>
            <span>English</span>
          </button>
        </div>
        <button id="newsletter-button">
          <span>Newsletter</span>

          <img src={envelope} alt="Envelope icon" />
        </button>
      </header>
      <section css={section1Styles}>
        <div>
          <h1>Bloom System</h1>
          <img src={heroImage} alt="Bloom diagnostic tool" />
          <p>
            Our smart system combines laboratory technology with personalized
            analysis.
          </p>
          <button>Buy now</button>
        </div>
      </section>
    </div>
  );
}

export default App;
