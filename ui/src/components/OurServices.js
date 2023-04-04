import React from 'react'
import service from '../assets/images/service.jpg'

function OurServices() {
  return (
      <div className="services">
          <div className="content">
              <div className="text">
                  <div className="title circularstd-book-h3-32px ">Our <span>Services</span></div>
                  <div className="servicecontent circularstd-book-normal-star-dust-16px">
                      <p>Create your own store: With ZOUQ, you can easily create your own online store and start selling your products in minutes. Our user-friendly platform allows you to customize your store and manage your inventory with ease.</p>
                      <p>Live shopping events: Join our live shopping events and auctions to discover amazing deals and unique products. Our events are fun and interactive, giving you the opportunity to connect with other shoppers and sellers in real-time.</p>
                      <p>Promotional tools: Boost your sales and increase your visibility with our promotional tools. We offer a range of advertising options, including sponsored listings, featured stores, and email marketing campaigns, to help you reach your target audience and drive more traffic to your store.</p>
                  </div>
              </div>
              <div className="btn-secondary">
                  <button>Learn more</button>
              </div>
          </div>
          <div className="serviceimg">
              <img src={service} alt="service" />
          </div>
    </div>
  )
}

export default OurServices