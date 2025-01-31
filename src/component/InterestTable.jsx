import React from 'react'

function Interest() {
  return (
    <div>
      <div className='flex justify-between '>
        <div>
          <p className="mb-3 text-white interest text-white text-xl">Interest rate</p>
          <p className="mb-3 text-white interest text-white text-xl">Interest</p>
          <p className="mb-3 text-white interest text-white text-xl">Term</p>
        </div>

        <div className="text-end">
          <p className="mb-3 text-white text-white text-xl  rate" id="percent">15%</p>
          <p className="mb-3 text-white text-white text-xl rate" id="interest">15001.64 ₽</p>
          <p className="mb-3 text-white text-white text-xl rate" id="days">365 days</p>
        </div>
      </div>
      <p className="mx-2 text-gray-400" id="text">
                Calculation is approximate and serves as a reference
            </p>
    </div>
  )
}

export default Interest