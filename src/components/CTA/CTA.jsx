import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function CTA() {
    const [storedData, setstoredData] = useState("")
    const [PrimerTitulo, setPrimerTitulo] = useState("At your fingertips")
    const [SegundoTitulo, setSegundoTitulo] = useState("Lightning fast prototyping")
    const [TerceroTitulo, setTerceroTitulo] = useState("Subscribe to our Newsletter")
    const [CuartoTitulo, setCuartoTitulo] = useState("Available exclusively on Figmaland")


    const STOP = (e) => {
        e.stopPropagation();
    }

    const Editar = (dato) => {
        let d
        switch (dato) {
            case 1:
                d = prompt('Edit title:', PrimerTitulo)
                setPrimerTitulo(d !== null ? d : PrimerTitulo);

                break;

            case 2:
                d = prompt('Edit title:', SegundoTitulo)
                setSegundoTitulo(d !== null ? d : SegundoTitulo);

                break;

            case 3:
                d= prompt('Edit title:', TerceroTitulo)
                setTerceroTitulo(d !== null ? d :TerceroTitulo);

                break;
            case 4:
                d = prompt('Edit title:', CuartoTitulo)
                setCuartoTitulo(d !== null ? d:  CuartoTitulo);

                break;

            default:

        }

    }
    const Eliminar = (dato) => {

        switch (dato) {
            case 1:

                setPrimerTitulo("");

                break;

            case 2:

                setSegundoTitulo("")

                break;

            case 3:

                setTerceroTitulo("")

                break;
            case 4:
                setCuartoTitulo("")

                break;

            default:

        }
    }


    useEffect(() => {
        setstoredData(localStorage.getItem('D'));
    }, [])



    return (
        <div className=" w-full relative h-[560px] py-20 px-0 gap-59 " style={{ backgroundColor: '#000320' }} >

            <div className="flex flex-col items-center justify-center mx-4 lg:mx-0 md:mx-0" >

                <div className="flex flex-col items-center justify-center">
                    {storedData ?
                        <div className="flex items-center justify-between">
                            <h3 className="text-white font-roboto text-lg font-bold leading-[33px] tracking-[0.1px] text-center">
                                {PrimerTitulo}
                            </h3>
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
                        </div>
                        :
                        <h3 className="text-white font-roboto text-lg font-bold leading-[33px] tracking-[0.1px] text-center">
                            {PrimerTitulo}
                        </h3>}
                    {storedData ?
                        <div className="flex items-center justify-between">
                            <h2 className="text-white  font-roboto text-4xl font-normal leading-[57px] tracking-[0.2px] text-center">
                                {SegundoTitulo}
                            </h2>
                            <div className="flex flex-row">
                                <div className="px-3 py-2 text-right  text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} onClick={(e) => Editar(2)} className="text-yellow-400" />
                                    </button>
                                </div>
                                <div className="px-3 py-2  text-right  text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                        <MdDelete size={14} onClick={(e) => Eliminar(2)} className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        <h2 className="text-white  font-roboto text-4xl font-normal leading-[57px] tracking-[0.2px] text-center">
                            {SegundoTitulo}
                        </h2>}




                </div>

                <div className="flex flex-col items-center justify-center mt-[3rem] w-[373px] h-[264px] gap-3">
                    {storedData ?
                        <div className="flex items-center justify-between">
                            <h3 className="text-white font-roboto text-lg font-bold leading-[33px] tracking-[0.1px] text-left">
                                {TerceroTitulo}
                            </h3>
                            <div className="flex flex-row">
                                <div className="px-3 py-2 text-right  text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} onClick={(e) => Editar(3)} className="text-yellow-400" />
                                    </button>
                                </div>
                                <div className="px-3 py-2  text-right  text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                        <MdDelete size={14} onClick={(e) => Eliminar(3)} className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        :

                        <h3 className="text-white font-roboto text-lg font-bold leading-[33px] tracking-[0.1px] text-left">
                            {TerceroTitulo}
                        </h3>}
                    {storedData ?
                        <div className="flex items-center justify-between">
                            <p className="font-roboto text-base font-normal leading-[27px] tracking-[0.2px] text-white text-left">
                                {CuartoTitulo}
                            </p>

                            <div className="flex flex-row">
                                <div className="px-3 py-2 text-right  text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} onClick={(e) => Editar(4)} className="text-yellow-400" />
                                    </button>
                                </div>
                                <div className="px-3 py-2  text-right  text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                        <MdDelete size={14} onClick={(e) => Eliminar(4)} className="text-red-500" />
                                    </button>
                                </div>
                            </div>

                        </div>
                        :
                        <p className="font-roboto text-base font-normal leading-[27px] tracking-[0.2px] text-white text-left">
                            {CuartoTitulo}
                        </p>}

                    <div className="flex flex-col items-center justify-center mt-6">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-[353px] h-[54px] py-19 pl-12 pr-35 border border-gray-300 rounded-[39px] bg-gradient-to-r from-gray-200 to-gray-300 text-sm font-roboto font-normal leading-[16px] tracking-[0.1px] text-left text-gray-500"
                        />

                        <button className="w-[353px] h-[50px] py-17 px-35 rounded-[35px] gap-10 bg-pink-600 hover:bg-pink-700 text-white mt-6">
                            Subscribe
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default CTA