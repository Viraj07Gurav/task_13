import React,{useState} from 'react'

import Header from './Header'
import Terms from './Terms'
import Buttons from './Buttons'
import Input from './Input'
import Interest from './InterestTable'

function Body() {
    let [amount, setAmount] =useState(0)
    let[term, setTerm] = useState(12)
    let [rate,setRate] = useState(15)

   let handleClick = (term, rate) => {
        setTerm(term)
        setRate(rate)
    }

    return (
        <div className=''>
            <div className=" w-full bg-gray-400 flex justify-center">
                <div className="w-100 bg-gray-800 border-2 border-purple-900 rounded-3xl p-3">
                    <Header />
                    <Terms />
                    <Buttons onButtonclick={handleClick} />
                    <Input amount={amount} setAmount={setAmount}/>
                    <Interest rate={rate} term={term} amount={amount} />
                </div>
            </div>
           
        </div>
    )
}

export default Body