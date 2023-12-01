import block from "./block.png"
import block2 from "./block2.png"
//RW-7
function Pricing() {

    return (
        <div className="text-center mb-4 font-roboto">
            <p className="text-4xl pt-2 font-roboto">Pricing</p>
            <p className="text-xl pt-2 font-roboto">Most calendars are designed for teams. <br />
                Slate is designed for freelancers</p>
            <p className="text-3xl pt-2 font-roboto"></p>


            <div className="ml-5 mr-5 flex flex-col pt-10 mt-4 sm:flex-row sm:justify-center items-center">
                {/* Card 1 */}

                {/* Card 1 */}
                <div className="overflow-hidden bg-white p-6 m-4 text-left rounded-lg border border-gray-300 shadow-md sm:w-[328px] sm:h-[250px] w-full">
                    <p className="pl-1 text-xl font-bold mb-2">Free</p>
                    <p className="pl-1 text-lg mb-4 sm:text-sm">Organize across all apps by hand</p>
                    <div className="pl-12 flex items-center justify-start mt-4">
                        <p className="text-5xl font-bold mr-2">0</p>
                        <img
                            src={block2} // Reemplaza con la ruta real de tu logo
                            alt="Logo"
                            className="w-16 h-12 mr-2"  // Ajusta el tamaño del logo según sea necesario
                        />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-24 sm:py-3 sm:px-12 md:px-16 lg:px-20 rounded-full mt-4 mx-auto block">Order Now</button>
                </div>

                {/* Card 2 */}
                <div className="overflow-hidden bg-white p-6 m-4 text-left rounded-lg border border-gray-300 shadow-md sm:w-[328px] sm:h-[250px] w-full">
                    <p className="pl-1 text-xl font-bold mb-2">STANDARD</p>
                    <p className="pl-1 text-lg mb-4 sm:text-sm">Organize across all apps by hand</p>
                    <div className="pl-12 flex items-center justify-start mt-4">
                        <p className="text-5xl font-bold mr-2">10</p>
                        <img
                            src={block2} // Reemplaza con la ruta real de tu logo
                            alt="Logo"
                            className="w-16 h-12 mr-2"  // Ajusta el tamaño del logo según sea necesario
                        />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-24 sm:py-3 sm:px-12 md:px-16 lg:px-20 rounded-full mt-4 mx-auto block">Order Now</button>
                </div>



                {/* Card 3 */}
                <div className="overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 via-gray-200 p-6 m-4 text-left sm:w-[328px] sm:h-[250px] w-full rounded-lg"
                    style={{
                        background: 'linear-gradient(39.97deg, #EF2779 0.79%, #7834BE 79.29%), linear-gradient(0deg, #DEDEDE, #DEDEDE)'
                    }}
                >
                    <p className="pl-1 text-xl font-bold text-white mb-2">BUSINESS</p>
                    <p className="pl-1 text-lg text-white mb-4 sm:text-sm">Organize across all apps by hand</p>
                    <div className="pl-12 flex items-center justify-start mt-4">
                        <p className="text-5xl font-bold text-white mr-2">99</p>
                        <img
                            src={block} // Reemplaza con la ruta real de tu logo
                            alt="Logo"
                            className="w-16 h-12 mr-2"  // Ajusta el tamaño del logo según sea necesario
                        />
                    </div>
                    <button className="bg-white hover:bg-gray-200 text-red-500 font-bold py-3 px-24 sm:py-3 sm:px-12 md:px-16 lg:px-20 rounded-full mt-4 mx-auto block">Order Now</button>
                </div>


            </div>






        </div>

    )

}

export default Pricing