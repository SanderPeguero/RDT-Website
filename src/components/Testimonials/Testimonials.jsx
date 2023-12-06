import Brands from "./Brands.png"
import avatar from "./avatar.png"
import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Testimonials() {
    const [storedData, setstoredData] = useState("")
    const [openmodal, setOpenmodal] = useState(true)
    const [band, setband] = useState(true)
    const [PrimerTitulo, setPrimerTitulo] = useState("Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.")
    const [SegundoTitulo, setSegundoTitulo] = useState("Organize across")
    const [TerceroTitulo, setTerceroTitulo] = useState(" Ui designer")

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
    }
  

    const pr = () => {
        setstoredData(localStorage.getItem('D'));
      }
    return (
        <div className="relative flex flex-col items-center justify-center mb-[4rem] mt-[4rem]" onClick={pr}>
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
            <div className="text-center mb-24">
                <h2 className="font-roboto text-4xl font-normal leading-14 tracking-tighter text-[#252B42]">
                    Testimonials
                </h2>
            </div>

            <div className="flex flex-col items-center justify-center" onClick={() => setOpenmodal(false)}>
                <img
                    src={Brands}
                    className="mb-12"
                />
                <h4 className="font-roboto text-sm mt-2 font-roboto text-center ml-[3rem] w-[35rem] text-base font-bold leading-5 tracking-tighter text-center text-[#374754] mb-12">
                    {PrimerTitulo}
                </h4>

                <div className="flex flex-row ">
                    <img
                        src={avatar}
                        className="mr-4"
                    />
                    <div className="flex flex-col">
                        <div>
                            {SegundoTitulo}
                        </div>
                        <div>
                            {TerceroTitulo}
                        </div>
                    </div>

                </div>
                <button className="mt-16 w-[236px] h-[65px] p-[16px, 0px] rounded-full bg-[#38A3F1] hover:bg-blue-500 text-white font-roboto font-semibold text-lg leading-[33px] tracking-[0.1px] text-center">
                    More Testimonials
                </button>
            </div>
        </div>
    )

}

export default Testimonials