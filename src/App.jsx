import ActionButton from "./components/ActionButton";
import Bookmarks from "./components/Bookmarks";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import IsEmpty from "./components/IsEmpty";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import { getBookmarks, addBookmark, addCategory, getCategories } from "./data";
import { useState } from "react";


function App() {
  // action button states
  const [isActive, setActive] = useState(false)
  const [openLinkModal, setOpenLinkModal] = useState(false)
  const [openCtgryModal, setOpenCtgryModal] = useState(false);
  const [notification, setNotification] = useState("Test");
  const [isNotifActive, setNotifActive] = useState(false);
  const [categories, setCategories] = useState(getCategories())

  // check if url valid
  const isValidUrl = (url) => {
    try {
      new URL(url);
      
      return true;
    }catch(_) {
      
      return false;
    }

  }

  // handle bookmark states
  const [bookmarks, setBookmarks] = useState(getBookmarks())

  const updateBookmark = () => {
    setBookmarks(getBookmarks())
  }

  const handleAddBookmark = async (url, linkCategory) => {
    if (isValidUrl(url)) {
      await addBookmark(url, linkCategory);
      updateBookmark()
      
      setNotification("Bookmark added successfully!")
      setNotifActive(true)
    }
    else {
      
      setNotification("Invalid URL. Please enter a valid URL")
      setNotifActive(true)

    }
  }

  // function for deleting bookmarks 
  const deleteBookmark = (index) => {
    const newBookmarks = bookmarks.filter((_, i) => i !== index);

    // console.log("newBookmarks", newBookmarks);

    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));

    updateBookmark();

  }


  // category functions
  const [currentCategory, setCurrentCategory] = useState("All")

  const changeCategory = (category) => {
    setCurrentCategory(category)
  }

  // console.log(currentCategory)

  const updateCategories = () => {
    setCategories(getCategories())
  }

  const handleAddCategory = (category) => {
    addCategory(category);
    updateCategories();

    setNotification("Category added successfully!")
    setNotifActive(true)

  }



  return (
    <>
      <Navbar />
      <main className=" w-full min-h-screen mx-auto bg-black ">
        <Categories categoryFn={changeCategory} categoryList={categories} />
        {isNotifActive && <Notification notificationMessage={notification} setNotifActive={setNotifActive}/>}
        {/* <IsEmpty/> */}
        <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} deleteBookmark={deleteBookmark} currentCategory={currentCategory} />
        <ActionButton isActive={isActive} setActive={setActive} openLinkModal={openLinkModal} setOpenLinkModal={setOpenLinkModal} openCtgryModal={openCtgryModal} setOpenCtgryModal={setOpenCtgryModal} handleAddBookmark={handleAddBookmark} handleAddCategory={handleAddCategory}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
