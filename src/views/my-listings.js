import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './my-listings.css'

const MyListings = (props) => {
  return (
    <div className="my-listings-container">
      <Helmet>
        <title>my-listings - campusTrader</title>
        <meta property="og:title" content="my-listings - campusTrader" />
      </Helmet>
      <header data-thq="thq-navbar" className="my-listings-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="my-listings-desktop-menu">
          <nav className="my-listings-links">
            <Link to="/my-listings" className="my-listings-navlink">
              My Listings
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="my-listings-menu"></div>
        <div data-thq="thq-mobile-menu" className="my-listings-mobile-menu">
          <div className="my-listings-nav">
            <div className="my-listings-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="my-listings-logo"
              />
              <div data-thq="thq-close-menu" className="my-listings-close-menu">
                <svg viewBox="0 0 1024 1024" className="my-listings-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="my-listings-links1">
              <span className="my-listings-text">About</span>
              <span className="my-listings-text01">Features</span>
              <span className="my-listings-text02">Pricing</span>
              <span className="my-listings-text03">Team</span>
              <span className="my-listings-text04">Blog</span>
            </nav>
            <div className="my-listings-buttons">
              <button className="my-listings-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="my-listings-icon2"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="my-listings-icon4"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="my-listings-icon6"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <Link to="/" className="my-listings-navlink1">
          <img
            alt="image"
            src="/external/campustrader-logo1-200h.png"
            className="my-listings-logo1"
          />
        </Link>
        <Link to="/login" className="my-listings-login1 button">
          Login
        </Link>
        <Link to="/my-offers" className="my-listings-navlink2">
          My Offers
        </Link>
        <Link to="/faq" className="my-listings-navlink3">
          FAQs
        </Link>
        <button className="my-listings-register1 button">Sign Up</button>
      </header>
      <div className="my-listings-container01">
        <h1 className="my-listings-text05">My Listings</h1>
        <form className="my-listings-form">
          <img
            alt="image"
            src="/external/surface-300h-300h.png"
            className="my-listings-image"
          />
          <div className="my-listings-container02">
            <ul className="my-listings-ul list">
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
          </div>
          <label className="my-listings-text09">
            <span>$22</span>
            <br></br>
          </label>
          <button
            name="Submit Offer"
            type="button"
            className="my-listings-button button"
          >
            <span>
              <span>Edit Listing</span>
              <br></br>
            </span>
          </button>
        </form>
        <Link to="/upload-new" className="my-listings-navlink4 button">
          Upload New Listing
        </Link>
      </div>
      <div className="my-listings-container03">
        <h1 className="my-listings-text15">Offers received on My Listings</h1>
        <form className="my-listings-form1">
          <img
            alt="image"
            src="/external/surface-300h-300h.png"
            className="my-listings-image1"
          />
          <section className="my-listings-container04">
            <button
              name="Submit Offer"
              type="button"
              className="my-listings-button1 button"
            >
              <span>
                <span>Accept Offer</span>
                <br></br>
              </span>
            </button>
            <span className="my-listings-text19">Buyer&apos;s Offer</span>
            <span className="my-listings-text20">
              <span>10/29/2023</span>
              <br></br>
              <span>Langsam Library</span>
              <br></br>
              <span>Venmo</span>
              <br></br>
              <span>$18</span>
              <br></br>
            </span>
            <span className="my-listings-text29">
              <span>Time Requested: 10/29/2023 14:00</span>
              <br></br>
              <span>Buyer Rating: 1.2/5 (53)</span>
              <br></br>
            </span>
          </section>
          <span className="my-listings-text34">OR</span>
          <section className="my-listings-container05">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="my-listings-textinput input"
            />
            <select className="my-listings-select">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
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
            <select className="my-listings-select1">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
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
              className="my-listings-textinput1 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="my-listings-button2 button"
            >
              <span className="my-listings-text35">
                <span>Counter Offer</span>
                <br></br>
              </span>
            </button>
          </section>
          <label className="my-listings-text38">
            <span>Surface Laptop Charger</span>
            <br></br>
          </label>
        </form>
        <form className="my-listings-form2">
          <img
            alt="image"
            src="/external/surface-300h-300h.png"
            className="my-listings-image2"
          />
          <section className="my-listings-container06">
            <button
              name="Submit Offer"
              type="button"
              className="my-listings-button3 button"
            >
              <span>
                <span>Accept Offer</span>
                <br></br>
              </span>
            </button>
            <span className="my-listings-text44">Buyer&apos;s Offer</span>
            <span className="my-listings-text45">
              <span>10/29/2023</span>
              <br></br>
              <span>CCM Library</span>
              <br></br>
              <span>Cash</span>
              <br></br>
              <span>$50</span>
              <br></br>
            </span>
            <span className="my-listings-text54">
              <span>Time Requested: 10/29/2023 15:54</span>
              <br></br>
              <span>Buyer Rating: 4.3/5 (25)</span>
              <br></br>
            </span>
          </section>
          <span className="my-listings-text59">OR</span>
          <section className="my-listings-container07">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="my-listings-textinput2 input"
            />
            <select className="my-listings-select2">
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
            <select className="my-listings-select3">
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
              className="my-listings-textinput3 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="my-listings-button4 button"
            >
              <span>
                <span>Counter Offer</span>
                <br></br>
              </span>
            </button>
          </section>
          <label className="my-listings-text63">
            <span>Surface Laptop Charger</span>
            <br></br>
          </label>
        </form>
        <form className="my-listings-form3">
          <img
            alt="image"
            src="/external/surface-300h-300h.png"
            className="my-listings-image3"
          />
          <section className="my-listings-container08">
            <button
              name="Submit Offer"
              type="button"
              className="my-listings-button5 button"
            >
              <span>
                <span>Accept Offer</span>
                <br></br>
              </span>
            </button>
            <span className="my-listings-text69">Buyer&apos;s Offer</span>
            <span className="my-listings-text70">
              <span>10/29/2023</span>
              <br></br>
              <span>Langsam Library</span>
              <br></br>
              <span>Venmo</span>
              <br></br>
              <span>$15</span>
              <br></br>
            </span>
            <span className="my-listings-text79">
              <span>Time Requested: 10/29/2023 16:00</span>
              <br></br>
              <span>Buyer Rating: 3/5 (2)</span>
              <br></br>
            </span>
          </section>
          <span className="my-listings-text84">OR</span>
          <section className="my-listings-container09">
            <input
              type="datetime-local"
              placeholder="placeholder"
              className="my-listings-textinput4 input"
            />
            <select className="my-listings-select4">
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
            <select className="my-listings-select5">
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
              className="my-listings-textinput5 input"
            />
            <button
              name="Submit Offer"
              type="button"
              className="my-listings-button6 button"
            >
              <span>
                <span>Counter Offer</span>
                <br></br>
              </span>
            </button>
          </section>
          <label className="my-listings-text88">
            <span>Surface Laptop Charger</span>
            <br></br>
          </label>
        </form>
      </div>
    </div>
  )
}

export default MyListings
