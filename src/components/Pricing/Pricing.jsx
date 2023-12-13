import block from "./block.png"
import block2 from "./block2.png"
import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContextRDT } from "../../Context";
function Pricing() {
    const {SavePricing,GetAllPricing} = useContextRDT()
    const [storedData, setstoredData] = useState("")
    // const [PrimerTitulo, setPrimerTitulo] = useState("0")
    // const [SegundoTitulo, setSegundoTitulo] = useState("10")
    // const [TerceroTitulo, setTerceroTitulo] = useState("99")

    const [PrimerTitulo, setPrimerTitulo] = useState(" ");
    const [SegundoTitulo, setSegundoTitulo] = useState(" ");
    const [TerceroTitulo, setTerceroTitulo] = useState(" ");

    // useEffect(() => {
    //    SavePricing(1, PrimerTitulo)
    //    SavePricing(2, SegundoTitulo)
    //    SavePricing(3, TerceroTitulo)
    // }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const partnersData = await GetAllPricing();
                console.log("Hola", partnersData)
                if (partnersData) {
                    // Asigna los valores correspondientes a cada estado
                    setPrimerTitulo(partnersData[1]?.Title || "");
                    setSegundoTitulo(partnersData[2]?.Title || "");
                    setTerceroTitulo(partnersData[3]?.Title || "");

                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const Editar = (dato) => {
        let d
        switch (dato) {
            case 1:

                d = prompt('Edit title:', PrimerTitulo)
                setPrimerTitulo(d !== null ? d : PrimerTitulo);
                if (d !== null) {
                    SavePricing(dato, d)
                }

                break;

            case 2:

                d = prompt('Edit title:', SegundoTitulo)
                setSegundoTitulo(d !== null ? d : SegundoTitulo);
                if (d !== null) {
                    SavePricing(dato, d)
                }


                break;

            case 3:

                d = prompt('Edit title:', TerceroTitulo)
                setTerceroTitulo(d !== null ? d : TerceroTitulo);
                if (d !== null) {
                    SavePricing(dato, d)
                }
                break;

            default:

        }
    }
    const Eliminar = (dato) => {
        switch (dato) {
            case 1:
                setPrimerTitulo("");
               SavePricing(dato, "");
                break;

            case 2:
                setSegundoTitulo("");
               SavePricing(dato, "");
                break;

            case 3:
                setTerceroTitulo("");
               SavePricing(dato, "");
                break;

            default:

        }
    }

    useEffect(() => {
        setstoredData(localStorage.getItem('D'));
    }, [])

    return (
        <div className=" relative text-center mb-4 font-roboto">

            <p className="text-4xl pt-2 font-roboto ">Pricing</p>
            <p className="text-md pt-2 font-roboto font-light">Most calendars are designed for teams. <br />
                Slate is designed for freelancers</p>
            <p className="text-3xl pt-2 font-roboto"></p>


            <div className="ml-5 mr-5 flex flex-col pt-10 mt-4 sm:flex-row sm:justify-center items-center" >
                {storedData ?
                    <div className="flex flex-row">
                        <div className="px-3 py-2 text-right text-xs leading-4">
                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                <FaEdit size={14} onClick={(e) => Editar(1)} className="text-yellow-400" />
                            </button>
                        </div>
                        <div className="px-3 py-2 text-right text-xs leading-4">
                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                <MdDelete size={14} onClick={(e) => Eliminar(1)} className="text-red-500" />
                            </button>
                        </div>
                    </div>
                    : null}
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
                {storedData ?
                    <div className="flex flex-row">
                        <div className="px-3 py-2 text-right text-xs leading-4">
                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                <FaEdit size={14} onClick={(e) => Editar(2)} className="text-yellow-400" />
                            </button>
                        </div>
                        <div className="px-3 py-2 text-right text-xs leading-4">
                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                <MdDelete size={14} onClick={(e) => Eliminar(2)} className="text-red-500" />
                            </button>
                        </div>
                    </div>
                    : null}
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
                {storedData ?
                    <div className="flex flex-row">
                        <div className="px-3 py-2 text-right text-xs leading-4">
                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                <FaEdit size={14} onClick={(e) => Editar(3)} className="text-yellow-400" />
                            </button>
                        </div>
                        <div className="px-3 py-2 text-right text-xs leading-4">
                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                <MdDelete size={14} onClick={(e) => Eliminar(3)} className="text-red-500" />
                            </button>
                        </div>
                    </div>
                    : null}
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