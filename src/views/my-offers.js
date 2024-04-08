import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './my-offers.css'

const MyOffers = (props) => {
  return (
    <div className="my-offers-container">
      <Helmet>
        <title>my-offers - campusTrader</title>
        <meta property="og:title" content="my-offers - campusTrader" />
      </Helmet>
      <header data-thq="thq-navbar" className="my-offers-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="my-offers-desktop-menu">
          <nav className="my-offers-links">
            <Link to="/my-listings" className="my-offers-navlink">
              My Listings
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="my-offers-menu"></div>
        <div data-thq="thq-mobile-menu" className="my-offers-mobile-menu">
          <div className="my-offers-nav">
            <div className="my-offers-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="my-offers-logo"
              />
              <div data-thq="thq-close-menu" className="my-offers-close-menu">
                <svg viewBox="0 0 1024 1024" className="my-offers-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="my-offers-links1">
              <span className="my-offers-text">About</span>
              <span className="my-offers-text01">Features</span>
              <span className="my-offers-text02">Pricing</span>
              <span className="my-offers-text03">Team</span>
              <span className="my-offers-text04">Blog</span>
            </nav>
            <div className="my-offers-buttons">
              <button className="my-offers-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="my-offers-icon2"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="my-offers-icon4"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="my-offers-icon6"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <Link to="/" className="my-offers-navlink1">
          <img
            alt="image"
            src="/external/campustrader-logo1-200h.png"
            className="my-offers-logo1"
          />
        </Link>
        <Link to="/login" className="my-offers-login1 button">
          Login
        </Link>
        <Link to="/my-offers" className="my-offers-navlink2">
          My Offers
        </Link>
        <Link to="/faq" className="my-offers-navlink3">
          FAQs
        </Link>
        <button className="my-offers-register1 button">Sign Up</button>
      </header>
      <div className="my-offers-container1">
        <h1 className="my-offers-text05">
          <span>My sent Requests</span>
          <br></br>
        </h1>
        <form className="my-offers-form">
          <img
            alt="image"
            src="/external/samplephotoagain-300h.png"
            className="my-offers-image"
          />
          <section className="my-offers-container2">
            <button
              name="Submit Offer"
              type="button"
              className="my-offers-button button"
            >
              <span>
                <span>Edit</span>
                <br></br>
                <span> Offer</span>
                <br></br>
              </span>
            </button>
            <span className="my-offers-text13">Your Request</span>
            <span className="my-offers-text14">
              <span>10/29/2023 13:00</span>
              <br></br>
              <span>Langsam Library</span>
              <br></br>
              <span>Cash</span>
              <br></br>
              <span>$5</span>
              <br></br>
            </span>
            <span className="my-offers-text23">
              <span>Time Requested: 10/28/2023 14:00</span>
              <br></br>
            </span>
          </section>
          <span className="my-offers-text26">     </span>
          <section className="my-offers-container3">
            <button
              name="Submit Offer"
              type="button"
              className="my-offers-button1 button"
            >
              <span className="my-offers-text27">
                <span>Cancel</span>
                <br></br>
              </span>
            </button>
            <span className="my-offers-text30">
              <span>No Response</span>
              <br></br>
              <span> from Seller</span>
            </span>
          </section>
          <label className="my-offers-text34">
            <span>Official Lenovo Charger</span>
            <br></br>
          </label>
        </form>
        <form className="my-offers-form1">
          <img
            alt="image"
            src="/external/laptopchargersample7-300w.png"
            className="my-offers-image1"
          />
          <section className="my-offers-container4">
            <span className="my-offers-text37">
              <span>Your Request</span>
              <br></br>
            </span>
            <span className="my-offers-text40">
              <span>10/29/2023 12:30</span>
              <br></br>
              <span>Langsam Library</span>
              <br></br>
              <span>Cash</span>
              <br></br>
              <span>$12</span>
              <br></br>
            </span>
            <span className="my-offers-text49">
              <span>Time Requested: 09/29/2023 2:45</span>
              <br></br>
            </span>
          </section>
          <span className="my-offers-text52">     </span>
          <section className="my-offers-container5">
            <button
              name="Submit Offer"
              type="button"
              className="my-offers-button2 button"
            >
              <span>
                <span>Cancel</span>
                <br></br>
              </span>
            </button>
            <button
              name="Submit Offer"
              type="button"
              className="my-offers-button3 button"
            >
              <span>
                <span>Edit Offer</span>
                <br></br>
              </span>
            </button>
            <span className="my-offers-text59">
              <span>Seller has</span>
              <br></br>
              <span>accepted your</span>
              <br></br>
              <span>Offer</span>
              <br></br>
            </span>
          </section>
          <label className="my-offers-text66">
            <span>IBM Charger 1800</span>
            <br></br>
          </label>
        </form>
        <form className="my-offers-form2">
          <img
            alt="image"
            src="/external/laptopchargersample4-300w.png"
            className="my-offers-image2"
          />
          <section className="my-offers-container6">
            <button
              name="Submit Offer"
              type="button"
              className="my-offers-button4 button"
            >
              <Link to="/my-offers" className="my-offers-navlink4">
                <span>Accept Offer</span>
                <br></br>
              </Link>
            </button>
            <span className="my-offers-text71">
              Seller&apos;s Counter Offer
            </span>
            <span className="my-offers-text72">
              <span>10/29/2023 12:30</span>
              <br></br>
              <span>Langsam Library</span>
              <br></br>
              <span>Cash</span>
              <br></br>
              <span>$55</span>
              <br></br>
            </span>
            <span className="my-offers-text81">
              <span>Time Requested: 10/02/2023 12:43</span>
              <br></br>
            </span>
          </section>
          <span className="my-offers-text84">OR</span>
          <section className="my-offers-container7">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="my-offers-textinput input"
            />
            <select className="my-offers-select">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="null" selected>
                Place
              </option>
              <option value="Option 1">Option 1</option>
              <option value="loc1">Langsam Library</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select className="my-offers-select1">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="null" selected>
                Payment Method
              </option>
              <option value="Option 1">Option 1</option>
              <option value="popt1">Cash</option>
              <option value="Option 2">Option 2</option>
              <option value="popt2">Venmo</option>
              <option value="Option 3">Option 3</option>
              <option value="popt3">CashApp</option>
              <option value="opot4">Zelle</option>
            </select>
            <input
              type="text"
              placeholder="$"
              className="my-offers-textinput1 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="my-offers-button5 button"
            >
              <span>
                <span>Counter Offer</span>
                <br></br>
              </span>
            </button>
          </section>
          <label className="my-offers-text88">
            <span>A TON of chergers</span>
            <br></br>
          </label>
        </form>
      </div>
    </div>
  )
}

export default MyOffers
