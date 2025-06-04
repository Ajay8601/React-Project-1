import React from 'react'

export default function Hero() {
  return (
    <div className='hero-container'> 
      <div>
        <div className='Text'>
            <h1>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum vero, numquam nam, asperiores nemo natus fuga in consectetur unde optio velit similique? Voluptate.
            </p>
        </div>
        <div className='logo-container'>
            <div>
                <button>Shop Now</button>
            </div>
            <div>
                <button className='category'>Category</button>
            </div>
        </div>
        <div>
            <div className="text-2">
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className="logo-3">
            <img src="/amazon logo.jpg" alt="amazon" height={40} />
            <img src="/flipcart logo.jpg" alt="flipcart" height={40} />
            </div>
        </div>
      </div>
      <div className='shose'>
        <img src="/shose1.png" alt="shose" height={500} />
      </div>
    </div>
  )
}
