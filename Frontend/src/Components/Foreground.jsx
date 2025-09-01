import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import axios from 'axios'

function Foreground() {
    useEffect(()=>{
        getDocs()
    },[])

    const [data, setData]=useState([]);
    const ref=useRef(null);

    const getDocs = async()=>{
        const response = await axios.get('http://localhost:8080/docs')
        console.log(response);
        setData(response.data);
    }

    const deleteDoc = (id)=>{
        axios.delete(id)
    }
    
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap py-5'>
        {
            data.map((item, id)=>(
                <Card data={item} reference={ref}/>
            ))
        }
    </div>
  )
}

export default Foreground
