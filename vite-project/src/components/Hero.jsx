import React from 'react'

const Hero = () => {
  return (
    <div className="hero container">
        <div className="hero-content"> 
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p>
            YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU OUR SHOES.YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU OUR SHOES.
        </p>

        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Catogory</button>
        </div>
        <div className="shopping">
            <p> Also Available on </p>
        </div>

        <div className="brand-icons"> 
        <img src="/images/Amazon.jpg" alt="logo"  />
        <img src="/images/flipkart.jpg" alt="logo"  />

        </div>



        </div>

        <div className="hero-image">
        <img src="/images/shoes2.jpg" alt="shoes"  />

        </div>



    </div>
  )
}

export default Hero