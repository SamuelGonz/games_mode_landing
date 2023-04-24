import { RiNotification3Line, RiSearchLine } from "react-icons/ri";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full lg:pl-80 bg-darkGray z-20">
            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <nav className="flex items-center gap-2 order-1 sm:order-none">
                    <a
                        href="#"
                        className="bg-blue-600 text-white px-4 py-2 rounded-full"
                    >
                        Discover
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 px-4 py-2 rounded-full"
                    >
                        Browse
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 px-4 py-2 rounded-full"
                    >
                        Wishlist
                    </a>
                </nav>
                {/* Notification and Search form */}
                <ul className="flex items-center gap-4 w-full sm:w-auto">
                    <li>
                        <a href="#" className="text-gray-500 text-lg">
                            <RiNotification3Line />
                        </a>
                    </li>
                    <li className="flex-1 sm:flex-none">
                        <form className="relative ">
                            <button className="absolute top-[10px] left-2">
                                <RiSearchLine className="text-gray-500" />
                            </button>
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-hover outline-none text-gray-300 py-2 text-sm pl-8 pr-4 rounded-full w-full"
                            />
                        </form>
                    </li>
                </ul>
            </div>
        </header>
    );
};
