import React from 'react'
import Card from './Card'
import { getBookmarks } from '../data'


const Bookmarks = () => {
  const bookmarks = getBookmarks()
  return (
    <div className='w-11/12 mx-auto my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-auto gap-4'>
      {bookmarks.map((bookmark) => (<Card name={bookmark.name} desc={bookmark.desc} link={bookmark.link}/>) )}
    </div>
  )
}

export default Bookmarks