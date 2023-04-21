import { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Header, MainContent, Sidebar } from "./components";

const App = () => {
   const [showMenu, setShowMenu] = useState(false);
   console.log("showMenu: ", showMenu);

   return (
      <div className="bg-darkGray min-h-screen">
         <Sidebar showMenu={showMenu} />
         <Header />
         <MainContent />
         {/* Btn menú movil */}
         <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden fixed bottom-6 right-5 bg-blue-700 text-gray-100 p-2 text-lg rounded-full"
         >
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
         </button>
      </div>
   );
};

export default App;
