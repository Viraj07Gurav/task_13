import React from 'react'

function Buttons() {
  return (
    <div className='mt-6 p-2'>
        <div>
            <div className='grid grid-cols-4 gap-2'>
                <div>
                    <button className='text-white bg-gray-900  border border-transparent active:border-white focus:ring" rounded-xl text-white h-10 w-18' >3 mon</button>
                </div>
                <div>
                    <button className='text-white bg-gray-900  border border-transparent active:border-white focus:ring" rounded-xl text-white h-10 w-18' >6 mon</button>
                </div>
                <div>
                    <button className='text-white bg-gray-900  border border-transparent active:border-white focus:ring" rounded-xl text-white h-10 w-18' >1 year</button>
                </div>
                <div>
                    <button className='text-white bg-gray-900  border border-transparent active:border-white focus:ring" rounded-xl text-white h-10 w-18' >2 years</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Buttons


// import React from 'react';

// function Buttons({ onSelectTerm }) {
//   // Define terms and their corresponding interest rates
//   const terms = [
//     { label: '3 mon', term: 3, rate: 5 },
//     { label: '6 mon', term: 6, rate: 6 },
//     { label: '1 year', term: 12, rate: 7 },
//     { label: '2 years', term: 24, rate: 8 },
//   ];

//   const handleButtonClick = (term, rate) => {
//     onSelectTerm({ term, rate }); // Pass the selected term and rate to the parent component
//   };

//   return (
//     <div className='mt-6 p-2'>
//       <div>
//         <div className='grid grid-cols-4 gap-2'>
//           {terms.map((button, index) => (
//             <div key={index}>
//               <button
//                 className='text-white bg-gray-900 border border-transparent active:border-white focus:ring rounded-xl text-white h-10 w-18'
//                 onClick={() => handleButtonClick(button.term, button.rate)}
//               >
//                 {button.label}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Buttons;
