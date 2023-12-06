import block from "./block.png"
import block2 from "./block2.png"
import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Pricing() {
    const [storedData, setstoredData] = useState("")
    const [openmodal, setOpenmodal] = useState(true)
    const [band, setband] = useState(true)
    const [PrimerTitulo, setPrimerTitulo] = useState("0")
    const [SegundoTitulo, setSegundoTitulo] = useState("10")
    const [TerceroTitulo, setTerceroTitulo] = useState("99")


    const STOP = (e) => {
        e.stopPropagation();
    }

    const Editar = () => {
        setband(false)
    }
    const Eliminar = () => {
        setPrimerTitulo("")
        setSegundoTitulo("")
        setTerceroTitulo("")
        setCuartoTitulo("")
    }
  

    const pr = () => {
        setstoredData(localStorage.getItem('D'));
      }
    return (
        <div className=" relative text-center mb-4 font-roboto" onClick={pr} >
            {storedData=="email" && openmodal == false ?
                <div className='absolute inset-0 flex items-center justify-center z-50' onClick={() => { setOpenmodal(true), setband(true) }}>
                    <div className="flex flex-col justify-center mt-12 overflow-hidden" onClick={STOP}>
                        <div className="relative py-3">
                            <div className="relative px-4 py-8 bg-white mx-8 md:mx-0 shadow rounded-3xl border border-black p-4 sm:p-8">
                                <div className="max-w-md mx-auto">
                                    <div className="flex items-center justify-center space-x-5 mb-4"> {/* Añadido espacio vertical (margin-bottom) */}
                                        <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                            <h2 className="leading-relaxed">To Do Detail</h2>
                                            <p className="text-sm text-gray-500 font-normal leading-relaxed">Task Detail</p>
                                        </div>
                                    </div>
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-6 flex flex-col text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                           

                                            <div className="flex mb-4"> {/* Added vertical space (margin-bottom) */}
                                                <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                    <label className="leading-loose">1 Price</label>
                                                    <input
                                                        type="text"
                                                        value={PrimerTitulo}
                                                        onChange={(e) => setPrimerTitulo(e.target.value)}
                                                        className="mt-1 p-2 w-full border rounded-md"
                                                        disabled={band}
                                                    />
                                                     <label className="leading-loose">2 Price</label>
                                                  
                                                      <input
                                                        type="text"
                                                        value={SegundoTitulo}
                                                        onChange={(e) => setSegundoTitulo(e.target.value)}
                                                        className="mt-1 p-2 w-full border rounded-md"
                                                        disabled={band}
                                                    />
                                                    <label className="leading-loose">3 Price</label>
                                                    <input
                                                        type="text"
                                                        value={TerceroTitulo}
                                                        onChange={(e) => setTerceroTitulo(e.target.value)}
                                                        className="mt-1 p-2 w-full border rounded-md"
                                                        disabled={band}
                                                    />
                                                </div>
                                               
                                            </div>

                                            {/* Add buttons in the center */}
                                            <div className="flex justify-center mt-4">
                                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                                                    onClick={Editar}>
                                                    <FaEdit></FaEdit>
                                                </button>
                                                <button className="bg-red-500 text-white px-4 py-2 rounded-md"
                                                    onClick={Eliminar}>
                                                    <MdDelete ></MdDelete>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""}
            <p className="text-4xl pt-2 font-roboto ">Pricing</p>
            <p className="text-md pt-2 font-roboto font-light">Most calendars are designed for teams. <br />
                Slate is designed for freelancers</p>
            <p className="text-3xl pt-2 font-roboto"></p>


            <div className="ml-5 mr-5 flex flex-col pt-10 mt-4 sm:flex-row sm:justify-center items-center" onClick={() => setOpenmodal(false)}>
                {/* Card 1 */}
                
                {/* Card 1 */}
                <div className="overflow-hidden bg-white p-6 m-6 text-left rounded-lg border border-gray-300 shadow-md sm:w-[328px] sm:h-[250px] w-full">
                    <p className="pl-1 text-xl font-bold mb-2">Free</p>
                    <p className="pl-1 text-lg mb-4 sm:text-sm">Organize across all apps by hand</p>
                    <div className="pl-12 flex items-center justify-start mt-4">
                        <p className="text-5xl font-bold mr-2">{PrimerTitulo}</p>
                        <img
                            src={block2} // Reemplaza con la ruta real de tu logo
                            alt="Logo"
                            className="w-16 h-12 mr-2"  // Ajusta el tamaño del logo según sea necesario
                        />
                    </div>
                    <button className="bg-[#38A3F1] hover:bg-blue-500 text-white font-bold py-3 px-24 sm:py-3 sm:px-12 md:px-16 lg:px-20 rounded-full mt-4 mx-auto block">Order Now</button>
                </div>

                {/* Card 2 */}
                <div className="overflow-hidden bg-white p-6 m-6 text-left rounded-lg border border-gray-300 shadow-md sm:w-[328px] sm:h-[250px] w-full">
                    <p className="pl-1 text-xl font-bold mb-2">STANDARD</p>
                    <p className="pl-1 text-lg mb-4 sm:text-sm">Organize across all apps by hand</p>
                    <div className="pl-12 flex items-center justify-start mt-4">
                        <p className="text-5xl font-bold mr-2">{SegundoTitulo}</p>
                        <img
                            src={block2} // Reemplaza con la ruta real de tu logo
                            alt="Logo"
                            className="w-16 h-12 mr-2"  // Ajusta el tamaño del logo según sea necesario
                        />
                    </div>
                    <button className="bg-[#38A3F1] hover:bg-blue-500 text-white font-bold py-3 px-24 sm:py-3 sm:px-12 md:px-16 lg:px-20 rounded-full mt-4 mx-auto block">Order Now</button>
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
                        <p className="text-5xl font-bold text-white mr-2">{TerceroTitulo}</p>
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