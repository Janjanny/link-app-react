import React, { useState } from 'react'
import LinkModal from './LinkModal'
import CategoryModal from './CategoryModal'
import { addBookmark, blueButton } from '../data'
import RemoveCategoryModal from './RemoveCategoryModal'

const ActionButton = ({isActive, setActive, openLinkModal, setOpenLinkModal, openCtgryModal, setOpenCtgryModal, handleAddBookmark, handleAddCategory, openRmvCtgryModal, setOpenRmvCtgryModal, handleRmvCtgry}) => {


    const buttonClicked = () => {
        setActive(!isActive);
    }

    // console.log(isActive)
  return (
    <>
    
    <div className='text-white cursor-pointer fixed bottom-10 right-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex justify-center items-center bg-center bg-no-repeat' onClick={() => {buttonClicked()}}>
        {!isActive ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
}
    </div>
    {isActive && <>
        <div className='fixed bottom-24 right-20 flex justify-center items-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-sm font-medium py-2 px-4 gap-[0.4rem] rounded-md cursor-pointer text-white' onClick={() => {setOpenLinkModal(!openLinkModal)}}>Add Link <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
</div>

<div className='fixed bottom-36 right-20 flex justify-center items-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-sm font-medium py-2 px-4 gap-2 rounded-md cursor-pointer text-white' onClick={() => {setOpenCtgryModal(!openCtgryModal)}}>Add Category <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

</div>

<div className='fixed bottom-[193px] right-20 flex justify-center items-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-sm font-medium py-2 px-4 gap-2 rounded-md cursor-pointer text-white' onClick={() => {setOpenRmvCtgryModal(!openRmvCtgryModal)}}>Remove Category <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>


</div>
    </> }

    {openLinkModal && <LinkModal isActive={openLinkModal} setActive={setOpenLinkModal} handleAddBookMark={handleAddBookmark}/>}

    {openCtgryModal && <CategoryModal isActive={openCtgryModal} setActive={setOpenCtgryModal} handleAddCategory={handleAddCategory} />}
    
    {openRmvCtgryModal && <RemoveCategoryModal isActive={openRmvCtgryModal} setActive={setOpenRmvCtgryModal} handleRmvCtgry={handleRmvCtgry} />}

    </>
  )
}

export default ActionButton