import Bookmarks from "./components/Bookmarks"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <main className=" w-full mx-auto">
        <Categories/>
        <Bookmarks/>
        New Button
      </main>
      <Footer/>
    </>
  )
}

export default App
