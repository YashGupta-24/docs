import React from 'react'

function background() {
    return (
        <div className='absolute w-full h-screen bg-zinc-800 flex flex-col'>
            <div className='w-full py-10 absolute top-[5%] flex justify-center text-zinc-600 font-semibold text-xl'>Documents.</div>
            <div className=' h-full flex flex-col items-center justify-center'>
                <h1 className='text-zinc-900 text-6xl sm:text-9xl leading-none tracking-tighter font-semibold '>Docs.</h1>
            </div>
        </div>
    )
}

export default background
