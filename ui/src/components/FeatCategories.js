import React from 'react'
import right from '../assets/images/right.png'
import left from '../assets/images/left.png'
function FeatCategories() {
  return (
      <div className="categories">
          <div className="header">
              <h1 className='circularstd-book-h3-32px'>Featured <span>Categories</span></h1>
              <div className="pagination">
                  <div className="left">
                      {/* <img src={left} alt="prev" /> */}
                  </div>
                  <div className="right">
                      {/* <img src={right} alt="next" /> */}
                  </div>
              </div>
          </div>
          <div className="category">
            
              <div className="frame" style={{ order: '0' }}>
                  
                  <div className="default">
                      
                      <div className="description">
                          <button>
                              <p className='circularstd-bold-white-16px'>SPORT/FITNESS</p>
                        </button>
                        </div>
                  
                      
                  </div>
                  <div className="categoryimg">
                      <img src="/images/category/sport.jpg" alt="sport/fitness" />
                      </div>
                   
              
                  </div>
                  
                   
              <div className="frame" style={{ order: '1' }}>
                  
                  <div className="default">
                      <div className="description">
                          <button>
                              <p className='circularstd-bold-white-16px'>FASHION/APPAREL</p>
                          </button>
                      </div>
                  </div>
                  <div className="categoryimg">
                      <img src="/images/category/apparel.jpg" alt="apparel" />
                  </div>
                      
                  </div>
                  
                   
              <div className="frame" style={{ order: '2' }}>
                  <div className="default">
                     <div className="description">
                      <button><p className='circularstd-bold-white-16px'>PROPERTY/REAL ESTATE</p></button>
                      </div>
             
                  </div>
                  <div className="categoryimg">
                      <img src="/images/category/property.jpg" alt="property/realestate" />
                  </div>
                      
              </div>
              <div className="frame" style={{ order: '3' }}>
                  <div className="default">
                  <div className="description">
                      
                      <button><p className='circularstd-bold-white-16px'>JEWELRY/GEMS</p></button>
                      </div>
                     
                  </div>
                  <div className="categoryimg">
                      <img src="/images/category/jewelry.jpg" alt="" jewelry />
                  </div>
                      
              </div>
              
          </div>

    </div>
  )
}

export default FeatCategories