import React,{useState} from 'react'

function addNews() {
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
              <td className='px-6 py-4 whitespace-nowrap'>Title </td>
              <td className='px-6 py-4 whitespace-nowrap'><input type="text" value={title} name="title" className='border w-80' placeholder='Title...' onChange={(e) => setTitle(e.target.value)}/></td>
            </tr>
            <tr >
              <td className='px-6 py-4 whitespace-nowrap'> Date</td>
              <td className='px-6 py-4 whitespace-nowrap'><input type="date" value={date} name="date" className='border w-80' placeholder='Date...' onChange={(e) => setDate(e.target.value)}/></td>
            </tr>
            <tr >
              <td className='px-6 py-4 whitespace-nowrap'>
                News 
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

export default addNews