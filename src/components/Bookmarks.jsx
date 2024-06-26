import React from 'react'
import Card from './Card'
import { getBookmarks } from '../data'
import { useState } from 'react'


const Bookmarks = ({bookmarks, setBookmarks}) => {
  // const filteredBookmarks = [];
  // bookmarks.map((bookmark) => {bookmark.title != "No title available" ? filteredBookmarks.push(bookmark) : ''})
  // console.log(filteredBookmarks)
  // console.log(localStorage.getItem('bookmarks'))

  return (
    <div className='w-11/12 mx-auto mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-auto gap-4 pb-[12rem]'>
      {bookmarks.map((bookmark, index) => (<Card name={bookmark.title} desc={bookmark.description} link={bookmark.url} img={bookmark.image} key={index}/>) )}
    </div>
  )
}

export default Bookmarks