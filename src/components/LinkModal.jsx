import React from 'react'

const LinkModal = ({isActive, buttonClicked}) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm'></div>
      <div className='relative z-10 p-4 bg-white rounded shadow'>
        LinkModal
      </div>
    </div>
  )
}

export default LinkModal