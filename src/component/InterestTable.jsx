import React from 'react'

function Interest({rate,term,amount}) {
  let days=Math.round(term*30.41) ;
  console.log(days);
  let interest=(((amount*rate/100)/365)*days).toFixed(2);
  console.log(interest); 
  return (
    <div>
      <div className='flex justify-between '>
        <div>
          <p className="mb-3 text-white interest text-white text-xl">Interest rate</p>
          <p className="mb-3 text-white interest text-white text-xl">Interest</p>
          <p className="mb-3 text-white interest text-white text-xl">Term</p>
        </div>

        <div className="text-end">
          <p className="mb-3 text-white text-white text-xl  rate" id="percent">{rate} %</p>
          <p className="mb-3 text-white text-white text-xl rate" id="interest">{interest} ₽</p>
          <p className="mb-3 text-white text-white text-xl rate" id="days">{days} days</p>
        </div>
      </div>
      <p className="mx-2 text-gray-400" id="text">
                Calculation is approximate and serves as a reference
            </p>
    </div>
  )
}

export default Interest