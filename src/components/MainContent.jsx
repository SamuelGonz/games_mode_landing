import {
    RiArrowRightSLine,
    RiArrowRightCircleLine,
    RiArrowLeftCircleLine,
} from "react-icons/ri";

export const MainContent = () => {
    return (
        <main className="lg:pl-80 pt-20">
            {/* Hero */}
            <div className="p-8 lg:grid lg:grid-cols-12 gap-2">
                {/* Image */}
                <div className="col-span-9 mb-4 lg:mb-0 relative lg:rounded-tl-lg lg:rounded-bl-lg overflow-hidden">
                    <img
                        src="https://www.techcenturion.com/wp-content/uploads/2019/02/All-Fortnite-Skins.jpg"
                        className="w-full h-80 object-cover object-center"
                    />
                    <h2 className="absolute top-4 left-4 text-3xl text-white font-bold z-10">
                        Fornite
                    </h2>
                    <div className="absolute left-0 bottom-0 p-8 max-w-lg z-10">
                        <p className="text-gray-100 text-sm">Update</p>
                        <p className="text-3xl text-white font-extrabold mb-4">
                            The hunt is on in Fornite Chapter 2 - Season 5: Zero
                            Point.
                        </p>
                        <button className="bg-blue-600 text-white flex items-center py-3 px-5 rounded-xl gap-2 text-lg group">
                            Play for free
                            <RiArrowRightSLine className="group-hover:translate-x-1 transition-all" />
                        </button>
                    </div>
                    <div className="absolute top-0 left-0 w-full bottom-0 bg-gradient-to-t from-black to-transparent z-[5]" />
                </div>
                {/* List games */}
                <div className="col-span-3 w-full bg-hover p-2 h-80 lg:rounded-tr-lg lg:rounded-br-lg">
                    <ul className="flex flex-col gap-6 h-full overflow-y-auto">
                        {/* Game1 */}
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-4  text-lg text-white"
                            >
                                <img
                                    src="https://images.crazygames.com/games/fortnite/cover-1594746838051.png"
                                    className="w-20 h-full object-cover"
                                />

                                <span>Fornite</span>
                            </a>
                        </li>
                        {/* Game2 */}
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-4  text-lg text-white"
                            >
                                <img
                                    src="https://rocketleague.media.zestyio.com/rl_platform_keyart_2019.jpg?width=1920&fit=bounds"
                                    className="w-20 h-full object-cover"
                                />

                                <span>Rocket League</span>
                            </a>
                        </li>
                        {/* Game3 */}
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-4  text-lg text-white"
                            >
                                <img
                                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/641990/header.jpg"
                                    className="w-20 h-full object-cover"
                                />

                                <span>The Escapist 2</span>
                            </a>
                        </li>
                        {/* Game4 */}
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-4  text-lg text-white"
                            >
                                <img
                                    src="https://images.crazygames.com/games/fortnite/cover-1594746838051.png"
                                    className="w-20 h-full object-cover"
                                />

                                <span>Fornite</span>
                            </a>
                        </li>
                        {/* Game5 */}
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-4  text-lg text-white"
                            >
                                <img
                                    src="https://images.crazygames.com/games/fortnite/cover-1594746838051.png"
                                    className="w-20 h-full object-cover"
                                />

                                <span>Fornite</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-4  text-lg text-white"
                            >
                                <img
                                    src="https://images.crazygames.com/games/fortnite/cover-1594746838051.png"
                                    className="w-20 h-full object-cover"
                                />

                                <span>Fornite</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Slice videogames */}
            <div className="p-8 pt-0 ">
                <div className="flex items-center justify-between py-2 text-gray-300">
                    <p>Games on sale</p>
                    <div className="flex items-center gap-4 text-3xl">
                        <RiArrowRightCircleLine />
                        <RiArrowLeftCircleLine />
                    </div>
                </div>
                {/* Videogames */}
                <div className="grid md:grid-cols-3 lg:grid-cols-5 ">
                    <div className="overflow-hidden p-4">
                        <img
                            src="https://cdn-products.eneba.com/resized-products/KqyA6nfvm1NRSC9AXGGv1Dhun5TuUmihCBX5BMrqOX4_350x200_3x-0.jpeg"
                            className="w-full h-72 object-cover object-top rounded-xl mb-2"
                        />
                        <h3 className="text-gray-300 text-lg">Valheim</h3>
                        <p className="text-gray-500 mb-3">Action Games</p>
                        <p className="text-white">$8,15</p>
                    </div>
                    <div className="overflow-hidden p-4">
                        <img
                            src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_BioShockTheCollection_image1600w.jpg"
                            className="w-full h-72 object-cover object-top rounded-xl mb-2"
                        />
                        <h3 className="text-gray-300 text-lg">Bioshock</h3>
                        <p className="text-gray-500 mb-3">Action, RGP</p>
                        <div className="flex items-center gap-4">
                            <p className="bg-green-300 text-green-800 px-1 rounded-lg">
                                -80%
                            </p>
                            <p className="text-gray-500">$50</p>
                            <p className="text-white">$8,15</p>
                        </div>
                    </div>
                    <div className="overflow-hidden p-4">
                        <img
                            src="https://cdn.cdkeys.com/700x700/media/catalog/product/u/n/unravel__1.jpg"
                            className="w-full h-72 object-cover object-top rounded-xl mb-2"
                        />
                        <h3 className="text-gray-300 text-lg">Unravel Two</h3>
                        <p className="text-gray-500 mb-3">Adventure Games</p>
                        <p className="text-white">$20,38</p>
                    </div>
                    <div className="overflow-hidden p-4">
                        <img
                            src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_BioShockTheCollection_image1600w.jpg"
                            className="w-full h-72 object-cover object-top rounded-xl mb-2"
                        />
                        <h3 className="text-gray-300 text-lg">Bioshock</h3>
                        <p className="text-gray-500 mb-3">Action, RGP</p>
                        <div className="flex items-center gap-4">
                            <p className="bg-green-300 text-green-800 px-1 rounded-lg">
                                -80%
                            </p>
                            <p className="text-gray-500">$50</p>
                            <p className="text-white">$8,15</p>
                        </div>
                    </div>
                    <div className="overflow-hidden p-4">
                        <img
                            src="https://cdn-products.eneba.com/resized-products/KqyA6nfvm1NRSC9AXGGv1Dhun5TuUmihCBX5BMrqOX4_350x200_3x-0.jpeg"
                            className="w-full h-72 object-cover object-top rounded-xl mb-2"
                        />
                        <h3 className="text-gray-300 text-lg">Valheim</h3>
                        <p className="text-gray-500 mb-3">Action Games</p>
                        <p className="text-white">$8,15</p>
                    </div>
                </div>
            </div>
        </main>
    );
};
