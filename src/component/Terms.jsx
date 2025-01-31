import React from 'react'
import addimg from "../assets/Image/add.png";
import discount from "../assets/Image/discount.png";

function Terms() {
  return (
    <div className="mt-3">
                    
                    <div className="flex">
                        <img src={discount} alt="Top-up Icon" className="h-10 "/>
                        <div className="mx-3">
                            <p className="text-white text-xl font-normal">Up to 16.3% annually</p>
                            <p className="text-gray-400">Depends on the chosen term, interest is paid at the end</p>
                        </div>
                    </div>

                    <div className="flex mt-2">
                        <img src={addimg} alt="Top-up Icon" className="h-10"/>
                        <div className="mx-3">
                            <p className="text-white text-xl font-normal">Top-up</p>
                            <p className="text-gray-400 mb-0 fw-medium" id="text">In the first 7 days, minimum 10 000 ₽</p>
                        </div>
                    </div>
                </div>
  )
}

export default Terms