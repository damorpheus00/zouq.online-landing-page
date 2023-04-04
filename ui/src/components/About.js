import React from 'react'
import about from '../assets/images/about.jpg'

function About() {
  return (
      <div className="aboutframe">
         
          <div className="aboutcontent">
             
              {/* <div className="lineafter">
                  <div className="line1"></div>
                  <div className="line2"></div>
              </div> */}
              <div className="abouttext">
                  <h1 className='circularstd-book-h3-32px'>What's Great About It?</h1>
                  {/* ul */}

                 
                      <ul className="lists">
                          <li>
                              <h3 className="title">Hassle-free experience</h3>
                              <p className="content">SOur platform is designed to make it easy for you to find what you're looking for, with user-friendly interfaces and extensive product categories.</p>
                          </li>
                          <li>
                              <h3 className="title">Secure Transactions</h3>
                              <p className="content">Our payment system is secure and we guarantee a hassle-free experience for both buyers and sellers.</p>
                          </li>
                          <li>
                              <h3 className="title">A range of seller plans</h3>
                              <p className="content">We offer three different seller plans to suit different needs and budgets, each with different features and benefits to help sellers grow their business.</p>
                          </li>
                      </ul>
                  </div>
                  {/* end of ul */}
                  
              </div>
          
           <div className="aboutimg">
              <img src={about} alt="aboutus" />
          </div>
         
     </div>
  )
}

export default About