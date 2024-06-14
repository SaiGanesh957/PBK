import React from 'react'
import Flipcard from '../Flipcard/Flipcard'
import man from '../../assets/boy.png'
import boy from '../../assets/baby.jpg'
import PBK from '../../assets/pbklogo.jpg'
import { Link } from 'react-router-dom'

import o1 from '../../assets/o1.png'
import d1 from '../../assets/d1.png'
import o2 from '../../assets/o2.png'
import d2 from '../../assets/d2.png'
import o3 from '../../assets/o3.png'
import d3 from '../../assets/d3.png'
import o4 from '../../assets/o4.png'
import d4 from '../../assets/d4.png'
import o5 from '../../assets/o5.png'
import d5 from '../../assets/d5.png'
import o6 from '../../assets/o6.png'
import d6 from '../../assets/d6.png'
import o7 from '../../assets/o7.png'
import d7 from '../../assets/d7.png'
import o8 from '../../assets/o8.png'
import d8 from '../../assets/d8.png'
import o9 from '../../assets/o9.png'
import d9 from '../../assets/d9.png'
import o10 from '../../assets/o10.png'
import d10 from '../../assets/d10.png'
import o11 from '../../assets/o11.png'
import d11 from '../../assets/d11.png'
import o12 from '../../assets/o12.png'
import d12 from '../../assets/d12.png'
import o13 from '../../assets/o13.png'
import d13 from '../../assets/d13.png'
import o14 from '../../assets/o14.png'
import d14 from '../../assets/d14.png'
import o15 from '../../assets/o15.png'
import d15 from '../../assets/d15.png'
import o16 from '../../assets/o16.png'
import d16 from '../../assets/d16.png'
import o17 from '../../assets/o17.png'
import d17 from '../../assets/d17.png'

export default function Gallery() {
  return (
  <>
    <nav className="bg-white mt-10 pb-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
             <Link to="/">
             <img className="h-16 w-auto" src={PBK} alt="Logo" ></img>
             </Link>
            </div>
          </div>
      
          <div className="absolute inset-y-0 right-0 flex items-center">
            {/* Contact Us Button */}
            <a href="#contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out">
              Contact Us</a>
          </div>
        </div>
      </div>
    </nav>

    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center py-12 bg-gradient-to-r from-indigo-700 to-violet-950">
      <Flipcard 
        frontImage={o1}
        backImage={d1} 
      />
      <Flipcard 
        frontImage={o5}
        backImage={d5}
      />
      <Flipcard 
        frontImage={o9}
        backImage={d9}
      />
      <Flipcard 
        frontImage={o12}
        backImage={d12}
      />
      <Flipcard 
        frontImage={o15}
        backImage={d15}
      />
      <Flipcard 
        frontImage={o16}
        backImage={d16}
      />
       <Flipcard 
        frontImage={o17}
        backImage={d17}
      />
       <Flipcard 
        frontImage={o3}
        backImage={d3}
      />
       <Flipcard 
        frontImage={o4}
        backImage={d4}
      />
       <Flipcard 
        frontImage={o6}
        backImage={d6}
      />
       <Flipcard 
        frontImage={o7}
        backImage={d7}
      />
       <Flipcard 
        frontImage={o8}
        backImage={d8}
      />
       <Flipcard 
        frontImage={o10}
        backImage={d10}
      />
       <Flipcard 
        frontImage={o11}
        backImage={d11}
      />
       <Flipcard 
        frontImage={o13}
        backImage={d13}
      />
       <Flipcard 
        frontImage={o14}
        backImage={d14}
      />
       <Flipcard 
        frontImage={o2}
        backImage={d2}
      />

    </div>

  </>
  )
}
