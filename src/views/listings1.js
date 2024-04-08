import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './listings1.css'

const Listings1 = (props) => {
  return (
    <div className="listings1-container">
      <Helmet>
        <title>listings1 - campusTrader</title>
        <meta property="og:title" content="listings1 - campusTrader" />
      </Helmet>
      <header data-thq="thq-navbar" className="listings1-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="listings1-desktop-menu">
          <nav className="listings1-links">
            <Link to="/my-listings" className="listings1-navlink">
              My Listings
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="listings1-menu">
          <svg viewBox="0 0 1024 1024" className="listings1-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="listings1-mobile-menu">
          <div className="listings1-nav">
            <div className="listings1-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="listings1-logo"
              />
              <div data-thq="thq-close-menu" className="listings1-close-menu">
                <svg viewBox="0 0 1024 1024" className="listings1-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="listings1-links1">
              <span className="listings1-text">About</span>
              <span className="listings1-text01">Features</span>
              <span className="listings1-text02">Pricing</span>
              <span className="listings1-text03">Team</span>
              <span className="listings1-text04">Blog</span>
            </nav>
            <div className="listings1-buttons">
              <button className="listings1-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="listings1-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="listings1-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="listings1-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <Link to="/" className="listings1-navlink01">
          <img
            alt="image"
            src="/external/campustrader-logo1-200h.png"
            className="listings1-logo1"
          />
        </Link>
        <Link to="/login" className="listings1-login1 button">
          Login
        </Link>
        <Link to="/my-offers" className="listings1-navlink02">
          My Offers
        </Link>
        <Link to="/faq" className="listings1-navlink03">
          FAQs
        </Link>
        <button className="listings1-register1 button">Sign Up</button>
      </header>
      <header className="listings1-container01">
        <input type="text" placeholder="Modify Search" className="input" />
        <button type="button" className="listings1-button button">
          Search
        </button>
        <select className="listings1-select">
          <option value="Option 1">Option 1</option>
          <option value="null">Category</option>
          <option value="copt1">Electronics</option>
          <option value="Option 2">Option 2</option>
          <option value="copt2">Art Supplies</option>
          <option value="Option 3">Option 3</option>
        </select>
      </header>
      <main className="listings1-container02">
        <form className="listings1-form">
          <img
            alt="image"
            src="/external/laptopchargersample4-300w.png"
            loading="lazy"
            className="listings1-image"
          />
          <div className="listings1-container03">
            <ul className="listings1-ul list">
              <li className="list-item">
                <h2>Working power supplies</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>Description: Tested and good. Used for testing.</span>
              </li>
            </ul>
            <button type="button" className="listings1-button01 button">
              🚩
            </button>
            <span className="listings1-text08">Seller Rating: 2.5/5 (74)</span>
          </div>
          <section className="listings1-container04">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings1-textinput01 input"
            />
            <select className="listings1-select01">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings1-select02">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings1-textinput02 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings1-button02 button"
            >
              <Link to="/my-offers" className="listings1-navlink04">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings1-text11">
            <span>$1</span>
            <br></br>
          </label>
        </form>
        <form className="listings1-form1">
          <img
            alt="image"
            src="/external/laptopchargersample4-300w.png"
            className="listings1-image1"
          />
          <div className="listings1-container05">
            <ul className="listings1-ul1 list">
              <li className="list-item">
                <h2>Working power supplies</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>Description: Tested and good. Used for testing.</span>
              </li>
            </ul>
            <button type="button" className="listings1-button03 button">
              🚩
            </button>
            <span className="listings1-text17">Seller Rating: 2.5/5 (74)</span>
          </div>
          <section className="listings1-container06">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings1-textinput03 input"
            />
            <select className="listings1-select03">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings1-select04">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings1-textinput04 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings1-button04 button"
            >
              <Link to="/my-offers" className="listings1-navlink05">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings1-text20">
            <span>$1</span>
            <br></br>
          </label>
        </form>
        <form className="listings1-form2">
          <img
            alt="image"
            src="/external/laptopchargersample4-300w.png"
            className="listings1-image2"
          />
          <div className="listings1-container07">
            <ul className="listings1-ul2 list">
              <li className="list-item">
                <h2>Working power supplies</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>Description: Tested and good. Used for testing.</span>
              </li>
            </ul>
            <button type="button" className="listings1-button05 button">
              🚩
            </button>
            <span className="listings1-text26">Seller Rating: 2.5/5 (74)</span>
          </div>
          <section className="listings1-container08">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings1-textinput05 input"
            />
            <select className="listings1-select05">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings1-select06">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings1-textinput06 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings1-button06 button"
            >
              <Link to="/my-offers" className="listings1-navlink06">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings1-text29">
            <span>$1</span>
            <br></br>
          </label>
        </form>
        <form className="listings1-form3">
          <img
            alt="image"
            src="/external/laptopchargersample4-300w.png"
            className="listings1-image3"
          />
          <div className="listings1-container09">
            <ul className="listings1-ul3 list">
              <li className="list-item">
                <h2>Working power supplies</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>Description: Tested and good. Used for testing.</span>
              </li>
            </ul>
            <button type="button" className="listings1-button07 button">
              🚩
            </button>
            <span className="listings1-text35">Seller Rating: 2.5/5 (74)</span>
          </div>
          <section className="listings1-container10">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings1-textinput07 input"
            />
            <select className="listings1-select07">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings1-select08">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings1-textinput08 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings1-button08 button"
            >
              <Link to="/my-offers" className="listings1-navlink07">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings1-text38">
            <span>$1</span>
            <br></br>
          </label>
        </form>
        <form className="listings1-form4">
          <img
            alt="image"
            src="/external/laptopchargersample4-300w.png"
            className="listings1-image4"
          />
          <div className="listings1-container11">
            <ul className="listings1-ul4 list">
              <li className="list-item">
                <h2>Working power supplies</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>Description: Tested and good. Used for testing.</span>
              </li>
            </ul>
            <button type="button" className="listings1-button09 button">
              🚩
            </button>
            <span className="listings1-text44">Seller Rating: 2.5/5 (74)</span>
          </div>
          <section className="listings1-container12">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings1-textinput09 input"
            />
            <select className="listings1-select09">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings1-select10">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings1-textinput10 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings1-button10 button"
            >
              <Link to="/my-offers" className="listings1-navlink08">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings1-text47">
            <span>$1</span>
            <br></br>
          </label>
        </form>
        <form className="listings1-form5">
          <img
            alt="image"
            src="/external/laptopchargersample4-300w.png"
            className="listings1-image5"
          />
          <div className="listings1-container13">
            <ul className="listings1-ul5 list">
              <li className="list-item">
                <h2>Working power supplies</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>Description: Tested and good. Used for testing.</span>
              </li>
            </ul>
            <button type="button" className="listings1-button11 button">
              🚩
            </button>
            <span className="listings1-text53">Seller Rating: 2.5/5 (74)</span>
          </div>
          <section className="listings1-container14">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings1-textinput11 input"
            />
            <select className="listings1-select11">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings1-select12">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings1-textinput12 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings1-button12 button"
            >
              <Link to="/my-offers" className="listings1-navlink09">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings1-text56">
            <span>$1</span>
            <br></br>
          </label>
        </form>
      </main>
    </div>
  )
}

export default Listings1
