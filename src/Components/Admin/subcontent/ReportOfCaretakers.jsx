import { Button } from '@material-tailwind/react'
import React from 'react'
import { useState } from 'react';

function ReportOfCaretakers() {
  const[t,setT] = useState(false);

  const handleChange = () => {
    setT(true);
  }

  return (
    <>
    <div className="relative w-full lg:max-w-sm p-1.5 my-6 mx-96">
            <select onChange={handleChange} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option disabled selected value> -- select an option -- </option>
            
                <option value="2367">Id:2367Deeraj</option>
                <option value="9683" >Id:9683Eli</option>
                <option value="2486">Id:2486Lio</option>
                <option>Id:1738Elen</option>
            </select>
        </div>
       {t &&  


        <> <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-7 px-6">
                Animal ID
              </th>
              <th scope="col" className="py-7 px-6">
                Past Medications
              </th>
              <th scope="col" className="py-7 px-6">
                Weight
              </th>
              <th scope="col" className="py-7 px-6">
                Past surgeries
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="p-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2367
              </th>
              <td className="px-10 py-36">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio consequatur id est labore. Ullam reiciendis nam ipsam quasi magnam suscipit exercitationem, pariatur eligendi repudiandae tempore velit est iusto quis?</td>
              <td className="px-10 py-36">78.8Kg</td>
              <td className="px-10 py-36">nil</td>
            </tr>
            
          </tbody>
        </table>
        
      </div>
      


  </>
        
      }
    </>
  )
}

export default ReportOfCaretakers