import React from 'react'
import check from "../assets/Image/check.png";
function Header() {
  return (
    <div>
        <div className="flex justify-between items-center p-2">
                    <h1 className="text-white text-3xl">Fixed-term saver</h1>
                    <img src={check} alt="" className="h-8"/>
                </div>
    </div>
  )
}

export default Header