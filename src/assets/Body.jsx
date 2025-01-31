import React from 'react'
import Header from './Header'
import Terms from './Terms'
import Buttons from './Buttons'
import Input from './Input'
import Interest from './InterestTable'

function Body() {
    return (
        <div className=''>
            <div className=" w-full bg-gray-400 flex justify-center">
                <div className="w-100 bg-gray-800 border-2 border-purple-900 rounded-3xl p-3">
                    <Header />
                    <Terms />
                    <Buttons />
                    <Input />
                    <Interest />
                </div>
            </div>
           
        </div>
    )
}

export default Body