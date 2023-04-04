import React from 'react'

function Footer() {
  return (
      <div className="footer">
          <div className="rightfooter">
              <div className="group" style={{ order: 0 }}>
                  <div className="title circularstd-black-white-20px">QUICK LINKS</div>
                  <div className="content circularstd-book-normal-white-16px ">
                      <p>Services</p>
                      <p>Pricing</p>
                      <p>Blog</p>
                      <p>About</p>
                  </div>
              </div>
              <div className="group" style={{ order: 2 }}>
                  <div className="title circularstd-black-white-20px">LOCATION</div>
                  <div className="content circularstd-book-normal-white-16px">
                      <p>123 Main Street</p>
                      <p>Anytown, Philippines</p>
                      
                  </div>                  
              </div>
              <div className="group" style={{ order: 3 }}>
                  <div className="title circularstd-black-white-20px">CONTACT US</div>
                  <div className="content circularstd-book-normal-white-16px">
                      <p>support@zouq.online</p>
                      <p>1-800-123-4567</p>
                  </div>                  
              </div>
          </div>
          <div className="leftfooter">
              <div className="maincontent">
                  <div className="logo"></div>
                  <p className="content circularstd-book-normal-white-16px">Join our us today, build your own store and experience also the ultimate shopping destination here in - ZOU</p>
              </div>
              <div className="socials">
                  {/* facebook twitter ig linkedIn */}
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
              </div>
          </div>
          <div className="bottomfooter">
              <div className="left circularstd-book-normal-white-14px">
                  <p>Terms & Condition</p>
                  <p>Privacy Policy</p>
                  <p>Cookie Policy</p>
              </div>
              <div className="copyright circularstd-book-normal-white-14px">Copyright © 2023 ZOUQ. All Rights Reserved.</div>
          </div>
    </div>
  )
}

export default Footer