import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './listings.css'

const Listings = (props) => {
  return (
    <div className="listings-container">
      <Helmet>
        <title>listings - campusTrader</title>
        <meta property="og:title" content="listings - campusTrader" />
      </Helmet>
      <header data-thq="thq-navbar" className="listings-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="listings-desktop-menu">
          <nav className="listings-links">
            <Link to="/my-listings" className="listings-navlink">
              My Listings
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="listings-menu">
          <svg viewBox="0 0 1024 1024" className="listings-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="listings-mobile-menu">
          <div className="listings-nav">
            <div className="listings-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="listings-logo"
              />
              <div data-thq="thq-close-menu" className="listings-close-menu">
                <svg viewBox="0 0 1024 1024" className="listings-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="listings-links1">
              <span className="listings-text">About</span>
              <span className="listings-text001">Features</span>
              <span className="listings-text002">Pricing</span>
              <span className="listings-text003">Team</span>
              <span className="listings-text004">Blog</span>
            </nav>
            <div className="listings-buttons">
              <button className="listings-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="listings-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="listings-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="listings-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <Link to="/" className="listings-navlink01">
          <img
            alt="image"
            src="/external/campustrader-logo1-200h.png"
            className="listings-logo1"
          />
        </Link>
        <Link to="/login" className="listings-login1 button">
          Login
        </Link>
        <Link to="/my-offers" className="listings-navlink02">
          My Offers
        </Link>
        <Link to="/faq" className="listings-navlink03">
          FAQs
        </Link>
        <button className="listings-register1 button">Sign Up</button>
      </header>
      <header className="listings-container01">
        <input type="text" placeholder="Modify Search" className="input" />
        <button type="button" className="listings-button button">
          Search
        </button>
        <select className="listings-select">
          <option value="null">Category</option>
          <option value="copt1">Electronics</option>
          <option value="copt2">Art Supplies</option>
        </select>
      </header>
      <main className="listings-container02">
        <form className="listings-form">
          <img
            alt="image"
            src="/external/surface-300h.png"
            className="listings-image"
          />
          <div className="listings-container03">
            <ul className="listings-ul list">
              <li className="list-item">
                <h2>Surface Laptop Charger</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Surface 2 magnetic charger works with all models
                  and things. Good design, very human.
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button01 button">
              🚩
            </button>
            <span className="listings-text008">Seller Rating: 4.6/5 (205)</span>
          </div>
          <section className="listings-container04">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput01 input"
            />
            <select className="listings-select01">
              <option value="null" selected>
                Place
              </option>
              <option value="loc1">Langsam Library</option>
            </select>
            <select className="listings-select02">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="popt2">Venmo</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput02 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button02 button"
            >
              <Link to="/my-offers" className="listings-navlink04">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text011">
            <span>$22</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form01">
          <img
            alt="image"
            src="/external/laptopchargersample4-300w.png"
            className="listings-image01"
          />
          <div className="listings-container05">
            <ul className="listings-ul01 list">
              <li className="list-item">
                <h2>a ton of chargers</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Surface 2 magnetic charger works with all models
                  and things. Good design, very human.
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button03 button">
              🚩
            </button>
            <span className="listings-text017">Seller Rating: 5/5 (1)</span>
          </div>
          <section className="listings-container06">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput03 input"
            />
            <select className="listings-select03">
              <option value="null" selected>
                Place
              </option>
              <option value="loc1">Langsam Library</option>
            </select>
            <select className="listings-select04">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="popt2">Venmo</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput04 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button04 button"
            >
              <Link to="/my-offers" className="listings-navlink05">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
            <button
              name="Submit Offer"
              type="button"
              className="listings-button05 button"
            >
              <Link to="/my-offers" className="listings-navlink06">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text022">
            <span>$5</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form02">
          <img
            alt="image"
            src="/external/samplephotoagain-300h.png"
            className="listings-image02"
          />
          <div className="listings-container07">
            <ul className="listings-ul02 list">
              <li className="list-item">
                <h2>NEW LAPTOP CHARGER</h2>
              </li>
              <li className="list-item">
                <span>Condition: Never Used</span>
              </li>
              <li className="listings-li08 list-item">
                <span>
                  Description: ☂️Safety: This item is up to nationally
                  recognized standards for high-level electronic safety. ❗Fit
                  for Acer Nitro 5 Gaming Laptop N18C3 N18C4
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button06 button">
              🚩
            </button>
            <span className="listings-text028">Seller Rating: 3.1/5 (4)</span>
          </div>
          <section className="listings-container08">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput05 input"
            />
            <select className="listings-select05">
              <option value="null" selected>
                Place
              </option>
              <option value="loc1">Langsam Library</option>
            </select>
            <select className="listings-select06">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="popt2">Venmo</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput06 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button07 button"
            >
              <Link to="/my-offers" className="listings-navlink07">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text031">
            <span>$50</span>
            <br></br>
            <br></br>
          </label>
        </form>
        <form className="listings-form03">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            loading="eager"
            className="listings-image03"
          />
          <div className="listings-container09">
            <ul className="listings-ul03 list">
              <li className="list-item">
                <h2>
                  <span>Olympic Weight Plates</span>
                  <br></br>
                </h2>
              </li>
              <li className="list-item">
                <span>Condition: Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Cleaned weights with minor scratches here and
                  there.
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button08 button">
              🚩
            </button>
            <span className="listings-text040">Seller Rating: 4.6/5 (13)</span>
          </div>
          <section className="listings-container10">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput07 input"
            />
            <select className="listings-select07">
              <option value="null" selected>
                Place
              </option>
              <option value="loc1">Langsam Library</option>
            </select>
            <select className="listings-select08">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="popt2">Venmo</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput08 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button09 button"
            >
              <Link to="/my-offers" className="listings-navlink08">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text043">
            <span>$22</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form04">
          <div className="listings-container11">
            <img
              alt="image"
              src="/external/mac1-300h.jpg"
              className="listings-image04"
            />
          </div>
          <div className="listings-container12">
            <ul className="listings-ul04 list">
              <li className="list-item">
                <h2>Apple MacBook Pro 13.3 Intel</h2>
              </li>
              <li className="list-item">
                <span>Condition: Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description:Core i5 2.4 GHz, 8GM Ram, 500GB Hdd MacOS 10.13
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button10 button">
              🚩
            </button>
            <span className="listings-text049">Seller Rating: 4/5 (14)</span>
          </div>
          <section className="listings-container13">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput09 input"
            />
            <select className="listings-select09">
              <option value="null" selected>
                Place
              </option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
            </select>
            <select className="listings-select10">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="popt2">Venmo</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput10 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button11 button"
            >
              <Link to="/my-offers" className="listings-navlink09">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text052">
            <span>$500</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form05">
          <div className="listings-container14">
            <img
              alt="image"
              src="/external/mac3-300h.jpg"
              className="listings-image05"
            />
          </div>
          <div className="listings-container15">
            <ul className="listings-ul05 list">
              <li className="list-item">
                <h2>
                  <span>Apple Macbook Pro 13&apos;&apos; Laptop i5 +</span>
                  <br></br>
                  <span>8GB RAM + 512GB SSD HD. macOS High Sierra</span>
                  <br></br>
                </h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Works as intended and is factory reset for next
                  usage. 
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button12 button">
              🚩
            </button>
            <span className="listings-text062">Seller Rating: 4.7/5 (72)</span>
          </div>
          <section className="listings-container16">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput11 input"
            />
            <select className="listings-select11">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select12">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput12 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button13 button"
            >
              <Link to="/my-offers" className="listings-navlink10">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text065">
            <span>$225</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form06">
          <div className="listings-container17">
            <img
              alt="image"
              src="/external/s-l1600-300h.jpg"
              className="listings-image06"
            />
          </div>
          <div className="listings-container18">
            <ul className="listings-ul06 list">
              <li className="list-item">
                <h2>
                  Lenovo ThinkPad X1 Carbon 8th Gen UHD i7-1061U vPro 1Tb SSD
                  16GB RAM
                </h2>
              </li>
              <li className="list-item">
                <span>Condition: Used, Good condition</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Laptop is factory reset. Has windows 11
                  installed.
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button14 button">
              🚩
            </button>
            <span className="listings-text071">Seller Rating: 4.2/5 (23)</span>
          </div>
          <section className="listings-container19">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput13 input"
            />
            <select className="listings-select13">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select14">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput14 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button15 button"
            >
              <Link to="/my-offers" className="listings-navlink11">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text074">
            <span>$99</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form07">
          <div className="listings-container20">
            <img
              alt="image"
              src="/external/s-l1600%20(1)-300h.jpg"
              className="listings-image07"
            />
          </div>
          <div className="listings-container21">
            <ul className="listings-ul07 list">
              <li className="list-item">
                <h2>Principles of Economics</h2>
              </li>
              <li className="list-item">
                <span>Condition: Used but in good condition</span>
              </li>
              <li className="list-item">
                <span>Description: Hardcover textbook.</span>
              </li>
            </ul>
            <button type="button" className="listings-button16 button">
              🚩
            </button>
            <span className="listings-text080">Seller Rating: 4.4/5 (18)</span>
          </div>
          <section className="listings-container22">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput15 input"
            />
            <select className="listings-select15">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select16">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput16 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button17 button"
            >
              <Link to="/my-offers" className="listings-navlink12">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text083">
            <span>$59</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form08">
          <div className="listings-container23">
            <img
              alt="image"
              src="/external/s-l1600%20(2)-300w.jpg"
              className="listings-image08"
            />
          </div>
          <div className="listings-container24">
            <ul className="listings-ul08 list">
              <li className="list-item">
                <h2>
                  <span>Microeconomic Principles and Problems</span>
                  <br></br>
                  <span>A Pluralist Introduction </span>
                </h2>
              </li>
              <li className="list-item">
                <span>Condition: Excellent Condition</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Selling book because I no longer need it. 
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button18 button">
              🚩
            </button>
            <span className="listings-text092">Seller Rating: 3.7/5 (12)</span>
          </div>
          <section className="listings-container25">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput17 input"
            />
            <select className="listings-select17">
              <option value="null" selected>
                Place
              </option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select18">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput18 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button19 button"
            >
              <Link to="/my-offers" className="listings-navlink13">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text095">
            <span>$89</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form09">
          <div className="listings-container26">
            <img
              alt="image"
              src="/external/s-l960-300w.jpg"
              className="listings-image09"
            />
          </div>
          <div className="listings-container27">
            <ul className="listings-ul09 list">
              <li className="list-item">
                <h2>Human Physiology An Integrated Approach (6th Edition) </h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>Description: Book is good. No longer need.</span>
              </li>
            </ul>
            <button type="button" className="listings-button20 button">
              🚩
            </button>
            <span className="listings-text101">Seller Rating: 3.9/5 (2)</span>
          </div>
          <section className="listings-container28">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput19 input"
            />
            <select className="listings-select19">
              <option value="null" selected>
                Place
              </option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select20">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput20 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button21 button"
            >
              <Link to="/my-offers" className="listings-navlink14">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text104">
            <span>$79</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form10">
          <div className="listings-container29">
            <img
              alt="image"
              src="/external/ab%20machine%20coaster%20abdominal%20crunch%20trainer%20for%20home%20gym%20core%20workout%20equipment-300h.jpg"
              className="listings-image10"
            />
          </div>
          <div className="listings-container30">
            <ul className="listings-ul10 list">
              <li className="list-item">
                <h2>Ab coaster workout machine</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Used once, taking up too much space in the
                  apartment. Need to get rid of soon. 
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button22 button">
              🚩
            </button>
            <span className="listings-text110">Seller Rating: 5/5 (8)</span>
          </div>
          <section className="listings-container31">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput21 input"
            />
            <select className="listings-select21">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select22">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput22 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button23 button"
            >
              <Link to="/my-offers" className="listings-navlink15">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text113">
            <span>$50</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form11">
          <div className="listings-container32">
            <img
              alt="image"
              src="/external/sport%20block%20dumbell%20weight%20set%20powered%20by%20go%20fit%20-%20home%20gym%20workout%20equipment-300h.jpg"
              className="listings-image11"
            />
          </div>
          <div className="listings-container33">
            <ul className="listings-ul11 list">
              <li className="list-item">
                <h2>Lifting Weights</h2>
              </li>
              <li className="list-item">
                <span>Condition: Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Used these every day, works great. Recommend
                  these for frequent use.
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button24 button">
              🚩
            </button>
            <span className="listings-text119">Seller Rating: 3.7/5 (14)</span>
          </div>
          <section className="listings-container34">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput23 input"
            />
            <select className="listings-select23">
              <option value="null" selected>
                Place
              </option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select24">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput24 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button25 button"
            >
              <Link to="/my-offers" className="listings-navlink16">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text122">
            <span>$100</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form12">
          <div className="listings-container35">
            <img
              alt="image"
              src="/external/notebooks%202-300h.jpg"
              className="listings-image12"
            />
          </div>
          <div className="listings-container36">
            <ul className="listings-ul12 list">
              <li className="list-item">
                <h2>Quality Notebooks</h2>
              </li>
              <li className="list-item">
                <span>Condition: New</span>
              </li>
              <li className="list-item">
                <span>
                  Description: These are some really high quality, imported
                  notebooks. Italian paper from the Quansiactus region. 
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button26 button">
              🚩
            </button>
            <span className="listings-text128">Seller Rating: 1/5 (5)</span>
          </div>
          <section className="listings-container37">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput25 input"
            />
            <select className="listings-select25">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select26">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput26 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button27 button"
            >
              <Link to="/my-offers" className="listings-navlink17">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text131">
            <span>$80</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form13">
          <div className="listings-container38">
            <img
              alt="image"
              src="/external/pencils%20bulk%202-300h.jpg"
              className="listings-image13"
            />
          </div>
          <div className="listings-container39">
            <ul className="listings-ul13 list">
              <li className="list-item">
                <h2>Pencil Selection</h2>
              </li>
              <li className="list-item">
                <span>Condition: Unused</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Had some extra pencils. Looking for a good home.
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button28 button">
              🚩
            </button>
            <span className="listings-text137">Seller Rating: 4.2/5 (8)</span>
          </div>
          <section className="listings-container40">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput27 input"
            />
            <select className="listings-select27">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select28">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput28 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button29 button"
            >
              <Link to="/my-offers" className="listings-navlink18">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text140">
            <span>$1</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form14">
          <img
            alt="image"
            src="/external/s-l9601-300w.jpg"
            className="listings-image14"
          />
          <div className="listings-container41">
            <ul className="listings-ul14 list">
              <li className="list-item">
                <h2>Essentials of College Algebra</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>Description: Good book. Selling for Cheap.</span>
              </li>
            </ul>
            <button type="button" className="listings-button30 button">
              🚩
            </button>
            <span className="listings-text146">Seller Rating: 3.3/5 (112)</span>
          </div>
          <section className="listings-container42">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput29 input"
            />
            <select className="listings-select29">
              <option value="null" selected>
                Place
              </option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select30">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput30 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button31 button"
            >
              <Link to="/my-offers" className="listings-navlink19">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text149">
            <span>$25</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form15">
          <img
            alt="image"
            src="/external/s-l9602-300w.jpg"
            className="listings-image15"
          />
          <div className="listings-container43">
            <ul className="listings-ul15 list">
              <li className="list-item">
                <h2>University Physics with Modern Physics</h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: University physics with modern physics by Hugh D
                  Young. Hardly used. Selling to whomever wants it. 
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button32 button">
              🚩
            </button>
            <span className="listings-text155">Seller Rating: 3.3/5 (112)</span>
          </div>
          <section className="listings-container44">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput31 input"
            />
            <select className="listings-select31">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select32">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput32 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button33 button"
            >
              <Link to="/my-offers" className="listings-navlink20">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text158">
            <span>$47</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form16">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="listings-image16"
          />
          <div className="listings-container45">
            <ul className="listings-ul16 list">
              <li className="list-item">
                <h2>Multicolored Pens</h2>
              </li>
              <li className="list-item">
                <span>Condition: New</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Multicolored pens for color coding or drawing
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button34 button">
              🚩
            </button>
            <span className="listings-text164">Seller Rating: 3.1/5 (7)</span>
          </div>
          <section className="listings-container46">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput33 input"
            />
            <select className="listings-select33">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select34">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput34 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button35 button"
            >
              <Link to="/my-offers" className="listings-navlink21">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text167">
            <span>$4</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form17">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="listings-image17"
          />
          <div className="listings-container47">
            <ul className="listings-ul17 list">
              <li className="list-item">
                <h2>
                  Apple Macbook Pro 13.3&apos;&apos; 2.5Ghz i5 16gb ram 1TB HDD
                  Turbo
                </h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Very good macbook for school. Gets everthing
                  wanted done. Factory reset for sale. 
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button36 button">
              🚩
            </button>
            <span className="listings-text173">Seller Rating: 4.3/5 (77)</span>
          </div>
          <section className="listings-container48">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput35 input"
            />
            <select className="listings-select35">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select36">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput36 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button37 button"
            >
              <Link to="/my-offers" className="listings-navlink22">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text176">
            <span>$1</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form18">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="listings-image18"
          />
          <div className="listings-container49">
            <ul className="listings-ul18 list">
              <li className="list-item">
                <h2>
                  <span>Olympic Barbell Straight Bar + Plates (extra)</span>
                  <br></br>
                </h2>
              </li>
              <li className="list-item">
                <span>Condition: Used</span>
              </li>
              <li className="list-item">
                <span>
                  <span>
                    Description: Barbell bar is base price and it&apos;s $5 per
                    plate desired.
                  </span>
                  <br></br>
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button38 button">
              🚩
            </button>
            <span className="listings-text186">Seller Rating: 4.1/5 (21)</span>
          </div>
          <section className="listings-container50">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput37 input"
            />
            <select className="listings-select37">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select38">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput38 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button39 button"
            >
              <Link to="/my-offers" className="listings-navlink23">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text189">
            <span>$35</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form19">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="listings-image19"
          />
          <div className="listings-container51">
            <ul className="listings-ul19 list">
              <li className="list-item">
                <h2>
                  <span>Ab Machine Coaster</span>
                  <br></br>
                </h2>
              </li>
              <li className="list-item">
                <span>Condition: Lightly Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Good machine, don&apos;t get to use much. Trying
                  to get rid of ASAP
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button40 button">
              🚩
            </button>
            <span className="listings-text197">Seller Rating: 4.1/5 (21)</span>
          </div>
          <section className="listings-container52">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput39 input"
            />
            <select className="listings-select39">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select40">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="popt1">Cash</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput40 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button41 button"
            >
              <Link to="/my-offers" className="listings-navlink24">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text200">
            <span>$65</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form20">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="listings-image20"
          />
          <div className="listings-container53">
            <ul className="listings-ul20 list">
              <li className="list-item">
                <h2>Paper Notebooks</h2>
              </li>
              <li className="list-item">
                <span>Condition: New</span>
              </li>
              <li className="list-item">
                <span>
                  <span>
                    Description: Regular extra notebooks that I don&apos;t use
                    and don&apos;t need
                  </span>
                  <br></br>
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button42 button">
              🚩
            </button>
            <span className="listings-text208">Seller Rating: 4.1/5 (26)</span>
          </div>
          <section className="listings-container54">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput41 input"
            />
            <select className="listings-select41">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select42">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="popt2">Venmo</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput42 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button43 button"
            >
              <Link to="/my-offers" className="listings-navlink25">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text211">
            <span>$5</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form21">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="listings-image21"
          />
          <div className="listings-container55">
            <ul className="listings-ul21 list">
              <li className="list-item">
                <h2>
                  Lenovo Thinkpad T430 14&apos;&apos; laptop i5-3320M 4gb Ram
                  320 gb hdd windows 10 pro
                </h2>
              </li>
              <li className="list-item">
                <span>Condition: Used</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Was my laptop for note taking, but no longer need
                  it
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button44 button">
              🚩
            </button>
            <span className="listings-text217">Seller Rating: 3.1/5 (17)</span>
          </div>
          <section className="listings-container56">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput43 input"
            />
            <select className="listings-select43">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select44">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="Option 3">Option 3</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="listings-textinput44 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button45 button"
            >
              <Link to="/my-offers" className="listings-navlink26">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text220">
            <span>$45</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form22">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="listings-image22"
          />
          <div className="listings-container57">
            <ul className="listings-ul22 list">
              <li className="list-item">
                <h2>Pencils!!</h2>
              </li>
              <li className="list-item">
                <span>Condition: New</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Bought too many pencils that I can&apos;t use.
                  Never used!
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button46 button">
              🚩
            </button>
            <span className="listings-text226">Seller Rating: 3.1/5 (19)</span>
          </div>
          <section className="listings-container58">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput45 input"
            />
            <select className="listings-select45">
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
            <select className="listings-select46">
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
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
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
              className="listings-textinput46 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button47 button"
            >
              <Link to="/my-offers" className="listings-navlink27">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text229">
            <span>$4</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form23">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="listings-image23"
          />
          <div className="listings-container59">
            <ul className="listings-ul23 list">
              <li className="list-item">
                <h2>Pens!!!</h2>
              </li>
              <li className="list-item">
                <span>Condition: New</span>
              </li>
              <li className="list-item">
                <span>
                  Description: Bought too many pens... Please buy them!
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button48 button">
              🚩
            </button>
            <span className="listings-text235">Seller Rating: 3.1/5 (19)</span>
          </div>
          <section className="listings-container60">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput47 input"
            />
            <select className="listings-select47">
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
            <select className="listings-select48">
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
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
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
              className="listings-textinput48 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button49 button"
            >
              <Link to="/my-offers" className="listings-navlink28">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text238">
            <span>$4</span>
            <br></br>
          </label>
        </form>
        <form className="listings-form24">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="listings-image24"
          />
          <div className="listings-container61">
            <ul className="listings-ul24 list">
              <li className="list-item">
                <h2>Spiral Notebooks</h2>
              </li>
              <li className="list-item">
                <span>Condition: New</span>
              </li>
              <li className="list-item">
                <span>
                  <span>Description: Standard spiral notebooks</span>
                  <br></br>
                </span>
              </li>
            </ul>
            <button type="button" className="listings-button50 button">
              🚩
            </button>
            <span className="listings-text246">Seller Rating: 4/5 (4)</span>
          </div>
          <section className="listings-container62">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="listings-textinput49 input"
            />
            <select className="listings-select49">
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="listings-select50">
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 3">Option 3</option>
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
              className="listings-textinput50 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="listings-button51 button"
            >
              <Link to="/my-offers" className="listings-navlink29">
                <span>Submit Offer</span>
                <br></br>
              </Link>
            </button>
          </section>
          <label className="listings-text249">
            <span>$5</span>
            <br></br>
          </label>
        </form>
      </main>
    </div>
  )
}

export default Listings
