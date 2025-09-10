import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import Form from './Form'
import { getDocs } from '../Util/util'
import { FaPlus } from "react-icons/fa";

function Foreground() {
    const [add, setAdd] = useState(false);
    const [data, setData] = useState([]);
    const ref = useRef(null);

    const fetchDocs = async () => {
        const res = await getDocs({ cache: "no-store" });
        setData(res.data);
    }

    useEffect(() => {
        fetchDocs();
    }, []);

    return (
        <div className='relative'>
            {
                add ?
                    <Form setAdd={setAdd} refetchDocs={fetchDocs}/>
                    :
                    <>
                        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap py-5'>
                            {
                                data.map((item) => (
                                    <Card key={item.id} data={item} reference={ref} refetchDocs={fetchDocs} />
                                ))
                            }
                        </div>
                        <button className='text-white absolute right-0 cursor-pointer z-[3] m-3 hover:scale-125 ease-in-out duration-500 border-2 rounded-full p-2' onClick={() => setAdd(true)}><FaPlus /></button>
                    </>
            }
        </div>
    )
}

export default Foreground
