import React from 'react'
import Card from './Card'
import { getBookmarks } from '../data'
import { useState } from 'react'


const Bookmarks = ({bookmarks, setBookmarks, deleteBookmark, currentCategory}) => {


  return (
    <div className='w-11/12 mx-auto mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-auto gap-4 pb-[12rem]'>
      {currentCategory == "All" ? bookmarks.map((bookmark, index) => (<Card name={bookmark.title} desc={bookmark.description} link={bookmark.url} img={bookmark.image} key={index} index={index} deleteBookmark={deleteBookmark}/>) ): bookmarks.filter((bookmark) => bookmark.category == currentCategory).map((bookmark, index) => (<Card name={bookmark.title} desc={bookmark.description} link={bookmark.url} img={bookmark.image} key={index} index={index} deleteBookmark={deleteBookmark}/>) )}

      
    </div>
  )
}

export default Bookmarks