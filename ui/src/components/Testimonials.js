import React from 'react'
import Footer from './Footer'

function Testimonials() {
  return (
      <div className="testimonials">
          <div className="testimonialhead">
              <div className="vector1"></div>
              <div className="vector2"></div>
              <div className="maincontent">
                  <div className="contents">
                      <div className="title circularstd-book-h3-32px">Our <span>Testimonials</span></div>
                      <div className="testimonies">
                          <div className="testimony" style={{order : '0'}}>
                              <div className="quoteimg"></div>
                              <div className="author">
                                  <div className="authorimg"></div>
                                  <div className="authorname">
                                      <p className="fullname circularstd-bold-white-18px">Jane Cooper</p>
                                      <p className="username circularstd-medium-picton-blue-14p">@craft Seller</p>
                                  </div>
                              </div>
                              <div className="content circularstd-book-normal-white-16px">I love using ZOUQ to sell my handmade crafts! The platform is easy to use and the live shopping feature is great for connecting with customers.</div>
                          </div>
                          <div className="testimony" style={{order : '1'}}>
                              <div className="quoteimg"></div>
                              <div className="author">
                                  <div className="authorimg"></div>
                                  <div className="authorname">
                                      <p className="fullname circularstd-bold-white-18px">Floyd Miles</p>
                                      <p className="username circularstd-medium-picton-blue-14p">@Vehicle Seller</p>
                                  </div>
                              </div>
                              <div className="content circularstd-book-normal-white-16px">I recently sold my car on ZOUQ and it was a breeze! The auction feature helped me get the best price and the transaction was smooth.</div>
                          </div>
                          <div className="testimony" style={{order : '2'}}>
                              <div className="quoteimg"></div>
                              <div className="author">
                                  <div className="authorimg"></div>
                                  <div className="authorname">
                                      <p className="fullname circularstd-bold-white-18px">Diane Abbas</p>
                                      <p className="username circularstd-medium-picton-blue-14p" >@VIP user</p>
                                  </div>
                              </div>
                              <div className="content circularstd-book-normal-white-16px">ZOUQ's VIP plan is worth it for the added features and benefits. I highly recommend upgrading to get the most out of the platform.</div>
                          </div>
                          <div className="testimony" style={{order : '3'}}>
                              <div className="quoteimg"></div>
                              <div className="author">
                                  <div className="authorimg"></div>
                                  <div className="authorname">
                                      <p className="fullname circularstd-bold-white-18px">Kathryn Ahmed</p>
                                      <p className="username circularstd-medium-picton-blue-14p">@new User</p>
                                  </div>
                              </div>
                              <div className="content circularstd-book-normal-white-16px">I had a question about setting up my store and reached out to ZOUQ's customer support. They were quick to respond and very helpful!</div>
                          </div>


                          {/* <div className="testimony"></div>
                          <div className="testimony"></div>
                          <div className="testimony"></div> */}
                      </div>
                  </div>
                  <div className="contentafter">
                      {/* 3 ellipse for after design */}
                  </div>
              </div>
          </div>
          <div className="footer">
              <Footer/>
          </div>
    </div>
  )
}

export default Testimonials