import React from 'react'
import { useState } from 'react'

function CheckUpdate() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[title,setTitle] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[news,setNews] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[date,setDate] = useState("");
  const handleSubmit = () => {
    console.log("title: ",title," Date: ",date, " News: ",news);
    setDate("");
    setNews("");
    setTitle("");
  }
  return (
    <>
      <div className="flex items-center justify-center mt-20 text-md m-auto">
       
          <table>
            <thead></thead>
            <tbody>
            <tr>
              <td className='px-6 py-4 whitespace-nowrap'>Animal ID </td>
              <td className='px-6 py-4 whitespace-nowrap'><select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option disabled selected value> -- select an option -- </option>
            
                <option value="2367">Id:2367Deer</option>
                <option value="9683" >Id:9683Elephant</option>
                <option value="2486">Id:2486Lion</option>
                <option>Id:1738Elephant</option>
            </select></td>
            </tr>
            <tr >
              <td className='px-6 py-4 whitespace-nowrap'> Date</td>
              <td className='px-6 py-4 whitespace-nowrap'><input type="date" value={date} name="date" className='border w-80' placeholder='Date...' onChange={(e) => setDate(e.target.value)}/></td>
            </tr>
            <tr >
              <td className='px-6 py-4 whitespace-nowrap'>
                Feedback
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <textarea value={news} className='border w-80 h-40' name="news" placeholder="Description..." onChange={(e) => setNews(e.target.value)}/>
              </td>
            </tr>
           
            <tr>
              <td></td>
              <td><button className='px-4 py-2 whitespace-nowrap rounded-md bg-slate-100' onClick={() => handleSubmit()} >Submit</button></td>
            </tr>
            </tbody>
          </table>
      </div>
    </>
  )
}

export default CheckUpdate
