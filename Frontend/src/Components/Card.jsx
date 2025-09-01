import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"

function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.1} className='relative flex-shrink-0 w-60 h-74 bg-zinc-600/20 rounded-4xl text-white px-8 py-10 flex flex-col overflow-hidden'>
            <IoDocumentTextOutline />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='absolute bottom-0 left-0 w-full'>
                <div className='flex justify-between items-center py-3 px-8 mb-5'>
                    <h5>{data.fs} mb</h5>
                    <span className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center'>
                        {data.close ? <IoMdClose size=".7em" color='#000' /> : <IoCloudDownloadOutline size=".7em" color='#000' />}
                    </span>
                </div>
                {
                    data.tag.isOpen ?
                        <div className={`w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : 'bg-green-600'} flex items-center justify-center`}>
                            <h1 className='text-sm font-semibold'>{data.tag.tagTitle}</h1>
                        </div>
                        :
                        <></>
                }
            </div>

        </motion.div>
    )
}

export default Card
