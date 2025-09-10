import React, { useState } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"
import { deleteDoc, editDoc } from '../Util/util';

function Card({ data, reference, refetchDocs }) {
    const [newDoc, setNewDoc] = useState(data.desc);

    const delDoc = async (id) => {
        await deleteDoc(id);  
        await refetchDocs();  
    };

    const edDoc = async (data, desc) => {
        const doc = {...data}
        doc.desc = desc
        await editDoc(doc);
        await refetchDocs();
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            edDoc(data, newDoc);
        }
    }

    const changeStatus= async(data) =>{
        const doc ={...data}
        doc.status = !doc.status
        await editDoc(doc);
        await refetchDocs();
    }

    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.1} className='relative flex-shrink-0 w-44 h-56 sm:w-60 sm:h-74 bg-zinc-600/20 rounded-4xl text-white px-8 py-10 flex flex-col overflow-hidden'>
            <IoDocumentTextOutline />
            <input
                type="text"
                value={newDoc}
                onChange={(e) => { setNewDoc(e.target.value) }}
                onKeyDown={handleKeyDown}
                className='mt-3'
            />
            <div className='absolute bottom-0 left-0 w-full'>
                <div className='flex justify-between items-center py-3 px-8 mb-5'>
                    <h5>{data.date}</h5>
                    <button className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center cursor-pointer' onClick={() => { delDoc(data.id) }}>
                        <IoMdClose size=".7em" color='#000' />
                    </button>
                </div>
                {
                    data.status ?
                        <button className={`w-full py-4 bg-green-600 flex items-center justify-center cursor-pointer`} onClick={() => { changeStatus(data) }}>
                            <h1 className='text-sm font-semibold'>Done</h1>
                        </button>
                        :
                        <button className={`w-full py-4 bg-blue-600 flex items-center justify-center cursor-pointer`} onClick={() => { changeStatus(data) }}>
                            <h1 className='text-sm font-semibold'>In Progress</h1>
                        </button>
                }
            </div>

        </motion.div>
    )
}

export default Card
