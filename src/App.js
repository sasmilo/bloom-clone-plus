/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from './images/1-logo1.png';
import cart1 from './images/2-shopping-cart.png';
import flag from './images/3-country-at.svg';

const lightGray = '#F4F4F4';
const darkGray = '#575757';
const darkRed = '#8e0919';
const white = '#fff';

const appStyles = css`
  font-family: Futura, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

  background-color: white;
  display: flex;
`;

const headerStyles = css`
  display: flex;
  width: 100%;

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
  }

  a:hover {
    color: ${darkRed};
  }

  /* Dropdown Button */
  .dropbtn {
    background-color: transparent;
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
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
    color: darkRed;
  }

  #language-button {
    display: inline-block;
    cursor: pointer;
    border: none;
  }

  img {
    cursor: pointer;
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
      </header>
    </div>
  );
}

export default App;
