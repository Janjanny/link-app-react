import ActionButton from "./components/ActionButton";
import Bookmarks from "./components/Bookmarks";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { getBookmarks } from "./data";
import { useState } from "react";


function App() {
  // action button states
  const [isActive, setActive] = useState(false)
  const [openLinkModal, setOpenLinkModal] = useState(false)
  const [openCtgryModal, setOpenCtgryModal] = useState(false);

  // fetch bookmark states
  const [bookmarks, setBookmarks] = useState(getBookmarks())

  const updateBookmark = () => {
    setBookmarks(getBookmarks())
  }


  return (
    <>
      <Navbar />
      <main className=" w-full min-h-screen mx-auto bg-black">
        <Categories />
        
        <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} />
        <ActionButton isActive={isActive} setActive={setActive} openLinkModal={openLinkModal} setOpenLinkModal={setOpenLinkModal} openCtgryModal={openCtgryModal} setOpenCtgryModal={setOpenCtgryModal}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
