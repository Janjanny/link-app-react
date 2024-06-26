import ActionButton from "./components/ActionButton";
import Bookmarks from "./components/Bookmarks";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { getBookmarks, addBookmark } from "./data";
import { useState } from "react";


function App() {
  // action button states
  const [isActive, setActive] = useState(false)
  const [openLinkModal, setOpenLinkModal] = useState(false)
  const [openCtgryModal, setOpenCtgryModal] = useState(false);
  const [notification, setNotification] = useState("Test");

  // check if url valid
  const isValidUrl = (url) => {
    try {
      new URL(url);
      
      return true;
    }catch(_) {
      
      return false;
    }

  }

  // fetch bookmark states
  const [bookmarks, setBookmarks] = useState(getBookmarks())

  const updateBookmark = () => {
    setBookmarks(getBookmarks())
  }

  const handleAddBookmark = async (url) => {
    if (isValidUrl(url)) {
      await addBookmark(url);
      updateBookmark()
      
      setNotification("Bookmark added successfully!")
    }
    else {
      
      setNotification("Invalid URL. Please enter a valid URL")
    }


  }


  return (
    <>
      <Navbar />
      <main className=" w-full min-h-screen mx-auto bg-black">
        <Categories />
        {notification && <div className="notification">{notification}</div>}
        <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} />
        <ActionButton isActive={isActive} setActive={setActive} openLinkModal={openLinkModal} setOpenLinkModal={setOpenLinkModal} openCtgryModal={openCtgryModal} setOpenCtgryModal={setOpenCtgryModal} handleAddBookmark={handleAddBookmark}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
