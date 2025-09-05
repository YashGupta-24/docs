import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import { getDocs, addDoc } from '../Util/util'
import { FaPlus } from "react-icons/fa";

function Foreground() {
    const [data, setData] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        fetchDocs();
    }, [data]);


    const fetchDocs = async () => {
        const res = await getDocs();
        setData(res.data);
    }

    return (
        <div className='relative'>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap py-5'>
                {
                    data.map((item, id) => (
                        <Card data={item} reference={ref} id={item.id} />
                    ))
                }
            </div>
            <button className='text-white absolute right-0 cursor-pointer z-[3] m-3 hover:scale-125 ease-in-out duration-500 border-2 rounded-full p-2' onClick={()=>{
                const doc=prompt("Enter document");
                addDoc(doc);
                fetchDocs();
            }}><FaPlus /></button>  
        </div>
    )
}

export default Foreground
