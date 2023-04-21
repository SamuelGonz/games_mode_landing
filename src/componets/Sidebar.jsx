import {
   RiHome3Line,
   RiFirefoxLine,
   RiLayoutGridLine,
   RiTeamLine,
   RiLiveLine,
   RiDownload2Line,
   RiSettings3Line,
   RiCheckboxBlankCircleFill,
} from "react-icons/ri";

export const Sidebar = ({ showMenu }) => {
   return (
      <div
         className={`lg:left-0 fixed left-0 top-0 h-full w-80 overflow-y-auto border-r border-gray-800 p-8 z-40 flex flex-col justify-between bg-darkGray ${
            showMenu ? "left-0" : "-left-full"
         } transition-all`}
      >
         <div>
            {/* Logo */}
            <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] text-center mb-10">
               🎮 Logo<span className="text-blue-700">Games</span>
            </h1>
            <ul className="flex flex-col gap-2">
               <li>
                  <a
                     href="#"
                     className="text-gray-300 flex items-center gap-4 hover:bg-hover transition-colors py-2 px-4 rounded-xl"
                  >
                     <RiHome3Line className="text-lg" /> Home
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="text-gray-300 flex items-center gap-4 hover:bg-hover transition-colors py-2 px-4 rounded-xl"
                  >
                     <RiFirefoxLine className="text-lg" /> Store
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="text-gray-300 flex items-center gap-4 hover:bg-hover transition-colors py-2 px-4 rounded-xl"
                  >
                     <RiLayoutGridLine className="text-lg" /> Library
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="text-gray-300 flex items-center gap-4 hover:bg-hover transition-colors py-2 px-4 rounded-xl"
                  >
                     <RiTeamLine className="text-lg" /> Friends
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="text-gray-300 flex items-center gap-4 hover:bg-hover transition-colors py-2 px-4 rounded-xl"
                  >
                     <RiLiveLine className="text-lg" /> Live
                  </a>
               </li>
            </ul>
         </div>

         <div>
            <ul>
               <li>
                  <a
                     href="#"
                     className="text-gray-300 flex items-center gap-4 hover:bg-hover transition-colors py-2 px-4 rounded-xl"
                  >
                     <RiDownload2Line className="text-lg" /> Donwloads
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="text-gray-300 flex items-center gap-4 hover:bg-hover transition-colors py-2 px-4 rounded-xl"
                  >
                     <RiSettings3Line className="text-lg" /> Settings
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="relative text-gray-300 flex items-center gap-4 hover:bg-hover transition-colors py-2 px-4 rounded-xl"
                  >
                     <img
                        src="https://img.freepik.com/foto-gratis/chico-guapo-guapo-posando-contra-pared-blanca_176420-32958.jpg"
                        className="h-5 w-5 object-cover rounded-full"
                     />
                     <RiCheckboxBlankCircleFill className="absolute bottom-[6px] left-7 text-green-500 text-[10px] z-10" />
                     Samuel G.
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};
