import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function CTA() {
    const [storedData, setstoredData] = useState("")
    const [openmodal, setOpenmodal] = useState(true)
    const [band, setband] = useState(true)
    const [PrimerTitulo, setPrimerTitulo] = useState("At your fingertips")
    const [SegundoTitulo, setSegundoTitulo] = useState("Lightning fast prototyping")
    const [TerceroTitulo, setTerceroTitulo] = useState("Subscribe to our Newsletter")
    const [CuartoTitulo, setCuartoTitulo] = useState("Available exclusively on Figmaland")


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
        <div className=" w-full relative h-[560px] py-20 px-0 gap-59 " style={{ backgroundColor: '#000320' }} onClick={pr}>
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
                                                    <label className="leading-loose">1 Title</label>
                                                    <input
                                                        type="text"
                                                        value={PrimerTitulo}
                                                        onChange={(e) => setPrimerTitulo(e.target.value)}
                                                        className="mt-1 p-2 w-full border rounded-md"
                                                        disabled={band}
                                                    />
                                                     <label className="leading-loose">2 Title</label>
                                                  
                                                      <input
                                                        type="text"
                                                        value={SegundoTitulo}
                                                        onChange={(e) => setSegundoTitulo(e.target.value)}
                                                        className="mt-1 p-2 w-full border rounded-md"
                                                        disabled={band}
                                                    />
                                                    <label className="leading-loose">3 Title</label>
                                                    <input
                                                        type="text"
                                                        value={TerceroTitulo}
                                                        onChange={(e) => setTerceroTitulo(e.target.value)}
                                                        className="mt-1 p-2 w-full border rounded-md"
                                                        disabled={band}
                                                    />
                                                      <label className="leading-loose">4 Title</label>
                                                    <input
                                                        type="text"
                                                        value={CuartoTitulo}
                                                        onChange={(e) => setCuartoTitulo(e.target.value)}
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
                                                    <MdDelete></MdDelete>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""}
            <div className="flex flex-col items-center justify-center mx-4 lg:mx-0 md:mx-0" onClick={() => setOpenmodal(false)}>

                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-white font-roboto text-lg font-bold leading-[33px] tracking-[0.1px] text-center">
                       {PrimerTitulo}
                    </h3>

                    <h2 className="text-white  font-roboto text-4xl font-normal leading-[57px] tracking-[0.2px] text-center">
                       {SegundoTitulo}
                    </h2>

                </div>

                <div className="flex flex-col items-center justify-center mt-[3rem] w-[373px] h-[264px] gap-3">
                    <h3 className="text-white font-roboto text-lg font-bold leading-[33px] tracking-[0.1px] text-left">
                       {TerceroTitulo}
                    </h3>
                    <p className="font-roboto text-base font-normal leading-[27px] tracking-[0.2px] text-white text-left">
                       {CuartoTitulo}
                    </p>

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