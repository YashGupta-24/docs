import React, { useState } from 'react'
import { addDoc } from '../Util/util'

function Form({setAdd, refetchDocs}) {

  const [title, setTitle]= useState("");
  const [description, setDescription]= useState("");
  const [date, setDate]= useState("");


  const add = async () => {
    const doc = {
      id: Math.floor(Math.random() * 10000),
      title:title,
      desc: description,
      date: date,
      status: false,
    }
    await addDoc(doc);
    await refetchDocs();
    setAdd(false);
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center z-[1000] bg-transparent'>
      <div className='h-fit w-1/2 border-2 rounded-4xl border-white p-5 flex flex-col'>
        <h1 className='text-3xl text-center font-semibold text-zinc-300 mb-5'>Enter doc details</h1>
        <h3 className='text-xl font-semibold text-zinc-300 mb-2 mt-3'>Enter doc title</h3>
        <input 
          type="text" 
          className='border-2 border-zinc-200 w-full rounded-lg p-2 text-zinc-200' 
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
        />
        <h3 className='text-xl font-semibold text-zinc-300 mb-2 mt-3'>Enter doc desc</h3>
        <input 
          type="text" 
          className='border-2 border-zinc-200 w-full rounded-lg p-2 text-zinc-200'
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}} 
        />
        <h3 className='text-xl font-semibold text-zinc-300 mb-2 mt-3'>Enter last date to complete</h3>
        <input 
          type="date" 
          className='border-2 border-zinc-200 w-full rounded-lg p-2 text-zinc-200' 
          value={date}
          onChange={(e)=>{setDate(e.target.value)}}
        />
        <div className='flex justify-center items-center w-full my-5'>
          <button className=' border-[1px] font-semibold text-zinc-300 w-1/4 cursor-pointer hover:scale-125 duration-300 ease-in-out rounded-lg' onClick={add}>Add</button>
        </div>

      </div>

    </div>
  )
}

export default Form
