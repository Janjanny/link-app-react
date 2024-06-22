import ActionButton from "./components/ActionButton";
import Bookmarks from "./components/Bookmarks";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className=" w-full min-h-screen mx-auto bg-black">
        <Categories />
        
        <Bookmarks />
        <ActionButton/>
      </main>
      <Footer />
    </>
  );
}

export default App;
