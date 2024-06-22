import React, { useState } from 'react'

const ActionButton = () => {
    const [isActive, setActive] = useState(false)

    const buttonClicked = () => {
        setActive(!isActive);
    }

    console.log(isActive)
  return (
    <>
    
    <div className='text-black cursor-pointer fixed bottom-10 right-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#43cea2] to-[#3587DB] flex justify-center items-center bg-center bg-no-repeat' onClick={() => {buttonClicked()}}>
        {!isActive ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
}
    </div>
    {isActive && <>
        <div className='fixed bottom-24 right-20 flex justify-center items-center bg-gradient-to-br from-[#43cea2] to-[#3587DB] text-sm font-medium py-2 px-4 gap-[0.4rem] rounded-md cursor-pointer text-black'>Add Link <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
</div>

<div className='fixed bottom-36 right-20 flex justify-center items-center bg-gradient-to-br from-[#43cea2] to-[#3587DB] text-sm font-medium py-2 px-4 gap-2 rounded-md cursor-pointer text-black'>Add Category <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

</div>
    </> }
    </>
  )
}

export default ActionButton