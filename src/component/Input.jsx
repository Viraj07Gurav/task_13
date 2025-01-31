import React from 'react'

function Input() {
    return (
        <div>


            <div className="p-2">
                <div className="mb-2 bg-gray-900  rounded-xl p-2">
                    <label  className="block  text-sm font-medium text-gray-400">Starting
                        amount</label>
                    <input type="number" id="success"
                        className="bg-gray-900 text-white placeholder-white text-lg block w-full h-15 outline-none border-0"
                        placeholder="100 000 ₽" min="10000" max="1000000" />

                </div>
                <p className="text-sm fw-medium text-gray-400" id="range">from 10 000 ₽ to 10 000 000 ₽</p >
            </div>

        </div>
    )
}

export default Input