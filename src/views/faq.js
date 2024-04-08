import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './faq.css'

const Faq = (props) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>faq - campusTrader</title>
        <meta property="og:title" content="faq - campusTrader" />
      </Helmet>
      <header data-thq="thq-navbar" className="faq-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="faq-desktop-menu">
          <nav className="faq-links">
            <Link to="/my-listings" className="faq-navlink">
              My Listings
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="faq-menu"></div>
        <div data-thq="thq-mobile-menu" className="faq-mobile-menu">
          <div className="faq-nav">
            <div className="faq-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="faq-logo"
              />
              <div data-thq="thq-close-menu" className="faq-close-menu">
                <svg viewBox="0 0 1024 1024" className="faq-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="faq-links1">
              <span className="faq-text">About</span>
              <span className="faq-text001">Features</span>
              <span className="faq-text002">Pricing</span>
              <span className="faq-text003">Team</span>
              <span className="faq-text004">Blog</span>
            </nav>
            <div className="faq-buttons">
              <button className="faq-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="faq-icon2">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="faq-icon4">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="faq-icon6">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <Link to="/" className="faq-navlink1">
          <img
            alt="image"
            src="/external/campustrader-logo1-200h.png"
            className="faq-logo1"
          />
        </Link>
        <Link to="/login" className="faq-login1 button">
          Login
        </Link>
        <Link to="/my-offers" className="faq-navlink2">
          My Offers
        </Link>
        <Link to="/faq" className="faq-navlink3">
          FAQs
        </Link>
        <button className="faq-register1 button">Sign Up</button>
      </header>
      <div className="faq-container1">
        <h1 className="faq-text005">Frequently Asked Questions</h1>
        <h1 className="faq-text006">
          <br></br>
          <span>How to sell something on campusTrader?</span>
        </h1>
        <span className="faq-text009">
          <br></br>
          <span>
            By going to the &quot;My Listings&quot; page, you can click on
            &quot;Upload New Listing.&quot; From there, you can add in your
            product/service information.
          </span>
          <br></br>
          <br></br>
        </span>
        <h1 className="faq-text014">
          Things that can&apos;t be listed for sale on campusTrader?
        </h1>
        <span className="faq-text015">
          <br></br>
          <span>
            No item(s) for sale: Anything that isn&apos;t a physical product for
            sale shouldn’t be listed on campusTrader. For example, &quot;in
            search of&quot; posts, lost and found posts, jokes and news
            aren&apos;t allowed. Services: Selling services (example: house
            cleaning) on campusTrader isn&apos;t allowed.
          </span>
          <br></br>
          <br></br>
          <span>
            Animals: Selling animals or animal products isn&apos;t allowed on
            campusTrader. This includes posting about animals for adoption,
            except by vetted pet adoption matching services.
          </span>
          <br></br>
          <br></br>
          <span>
            Healthcare products: Medical and healthcare-related products
            aren&apos;t allowed on campusTrader (example: thermometers,
            first-aid kits).
          </span>
          <br></br>
          <br></br>
          <span>
            Recalled products: If you&apos;re unsure whether the item
            you&apos;re buying or selling has been recalled, look on the website
            of the item&apos;s manufacturer or relevant government entity. For
            example, the US Consumer Product Safety Commission or the EU Rapid
            Alert System for Dangerous Non-food Products.
          </span>
          <br></br>
          <br></br>
        </span>
        <h1 className="faq-text029">
          How do I edit or delete my listing on campusTrader?
        </h1>
        <span className="faq-text030">
          <br></br>
          <span>You can manage your listings on campusTrader by:</span>
          <br></br>
          <br></br>
          <span>Editing the deatils of your listing</span>
          <br></br>
          <br></br>
          <span>Deleting your listing</span>
          <br></br>
          <br></br>
          <span>Marking your listing as sold or pending</span>
          <br></br>
          <br></br>
        </span>
        <h1 className="faq-text044">Tips and Best Practices</h1>
        <h1 className="faq-text045">
          <br></br>
          <span>Meeting in-person</span>
        </h1>
        <span className="faq-text048">
          <br></br>
          <span>
            We suggest following the guidelines from the Centers for Disease
            Control and Prevention (CDC) for how to stay healthy and help
            prevent the spread of coronavirus (COVID-19) while buying and
            selling.
          </span>
          <br></br>
          <br></br>
          <span>
            When buying and selling during this time, please follow local
            guidelines on physical distancing and staying home.If you&apos;re
            meeting someone in person, we recommend arranging your meeting in a
            public, well-lit area.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            Create and share your meeting plan with a trusted friend or family
            member.
          </span>
          <br></br>
          <br></br>
        </span>
        <h1 className="faq-text059">Clean and Disinfect Items</h1>
        <span className="faq-text060">
          <br></br>
          <span>Clean and disinfect any item you intend to sell.</span>
          <br></br>
          <br></br>
          <span>
            If you buy an item, make sure to clean it before bringing it into
            your home.
          </span>
          <br></br>
          <br></br>
        </span>
        <h1 className="faq-text068">Local Pickup on campusTrader</h1>
        <span className="faq-text069">
          <br></br>
          <span>
            Don&apos;t transfer money directly into a seller&apos;s bank
            account. Instead, offer to use a secure person-to-person payment
            site, such as PayPal or Venmo.
          </span>
          <br></br>
          <br></br>
          <span>
            If you choose to pay electronically using wire transfer or money
            order solutions, avoid payment links and log in directly through the
            payment method&apos;s website.
          </span>
          <br></br>
          <br></br>
          <span>
            Keep in mind that cashier and certified checks can be counterfeit.
            Transactions are between the buyer and seller only, and no
            third-party guarantee should be involved.
          </span>
          <br></br>
          <br></br>
        </span>
        <h1 className="faq-text080">Protect Your Privacy</h1>
        <span className="faq-text081">
          <br></br>
          <span>
            Don&apos;t share your financial information (example: PayPal login
            and password, bank account info) or unnecessary personal information
            with buyers or sellers.
          </span>
          <br></br>
          <br></br>
          <span>
            If you&apos;re selling electronics, make sure you&apos;ve cleared
            any personal information from the device.
          </span>
          <br></br>
          <br></br>
        </span>
        <h1 className="faq-text089">Confirm Fair Pricing</h1>
        <span className="faq-text090">
          <br></br>
          <span>
            We encourage buyers to compare prices before buying an item.
          </span>
          <br></br>
          <br></br>
          <span>
            Don’t agree to requests to make additional payments for shipping or
            other previously unlisted charges from the seller after the
            transaction is complete.
          </span>
          <br></br>
          <br></br>
          <span>
            Reject overpayments from buyers for items, especially if the buyer
            asks to be reimbursed for overpayment. Requests like this are often
            part of a counterfeit cashier&apos;s check scheme.
          </span>
          <br></br>
          <br></br>
          <br></br>
        </span>
        <h1 className="faq-text102">Be Wary of Gift Cards</h1>
        <span className="faq-text103">
          <br></br>
          <span>
            Don’t provide gift card details (such as the claim code) for payment
            to someone you don’t know, and avoid sales or transactions requiring
            you to pay specifically with gift cards.
          </span>
          <br></br>
          <br></br>
          <span>Don&apos;t buy gift cards on campusTrader.</span>
          <br></br>
          <br></br>
        </span>
        <h1 className="faq-text111">
          Verify the item before paying or sending a deposit
        </h1>
        <span className="faq-text112">
          <br></br>
          <span>
            If you&apos;re buying an item, we recommend that you inspect any
            items you buy to make sure that they&apos;re genuine. For high-value
            items (example: Laptops, Books, etc.), you can request a certificate
            of authenticity or proof of purchase.
          </span>
        </span>
      </div>
    </div>
  )
}

export default Faq
