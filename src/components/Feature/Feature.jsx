import React, { useState, useEffect } from 'react';
import Vector1 from "./Vector1.png"
import Vector2 from "./Vector2.png"
import Vector3 from "./Vector3.png"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Feature() {
  const [openmodal, setOpenmodal] = useState(true)
  const [band, setband] = useState(true)
  const [storedData, setstoredData] = useState("")
  const [PrimerTitulo, setPrimerTitulo] = useState("Fastest way to organize")
  const [SegundoTitulo, setSegundoTitulo] = useState("The best products start with Sketch")
  const [TerceroTitulo, setTerceroTitulo] = useState("Work better together")
  const [PrimerDescripcion, setPrimerDescripcion] = useState("Slate help you see how many more days you need to work to reach your financial goal.")
  const [SegundoDescripcion, setSegundoDescripcion] = useState("Slate help you see how many more days you need to work to reach your financial goal.")
  const [TerceroDescripcion, setTerceroDescripcion] = useState("Slate help you see how many more days you need to work to reach your financial goal.")

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
    setPrimerDescripcion("")
    setSegundoDescripcion("")
    setTerceroDescripcion("")
  }
  const pr = () => {
    setstoredData(localStorage.getItem('D'));
  }
  

  return (
    <>


      <div className="relative text-center mb-4 font-roboto"  onClick={pr}>
        {storedData=="email" && openmodal == false ?
        
          <div className='absolute inset-0 flex items-center justify-center z-50' onClick={() => {setOpenmodal(true), setband(true) }}>
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
                            <label className="leading-loose">1 Title </label>
                            <input
                              type="text"
                              value={PrimerTitulo}
                              onChange={(e) => setPrimerTitulo(e.target.value)}
                              className="mt-1 p-2 w-full border rounded-md"
                              disabled={band}
                            />
                          </div>
                          <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                            <label className="leading-loose">2 Title </label>
                            <input
                              type="text"
                              value={SegundoTitulo}
                              onChange={(e) => setSegundoTitulo(e.target.value)}
                              className="mt-1 p-2 w-full border rounded-md"
                              disabled={band}
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
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

                        <div className="flex mb-4"> {/* Added vertical space (margin-bottom) */}
                          <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                            <label className="leading-loose">1 Description</label>
                            <input
                              type="text"
                              value={PrimerDescripcion}
                              onChange={(e) => setPrimerDescripcion(e.target.value)}
                              className="mt-1 p-2 w-full border rounded-md"
                              disabled={band}
                            />
                          </div>
                          <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                            <label className="leading-loose">2 Description</label>
                            <input
                              type="text"
                              value={SegundoDescripcion}
                              onChange={(e) => setSegundoDescripcion(e.target.value)}
                              className="mt-1 p-2 w-full border rounded-md"
                              disabled={band}
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <label className="leading-loose">3 Description</label>
                            <input
                              type="text"
                              value={TerceroDescripcion}
                              onChange={(e) => setTerceroDescripcion(e.target.value)}
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

        <p className="text-1xl pt-20 font-roboto font-bold">At your fingertip</p>
        <p className="text-4xl pt-4 font-roboto">Features</p>
        <p className=" pt-4 font-roboto">Most calendars are designed for teams. <br />
          Slate is designed for freelancers</p>
        <p className="text-3xl pt-2 font-roboto"></p>

        <div className="flex flex-col pt-16  mt-4 sm:flex-row sm:justify-center" onClick={() => setOpenmodal(false)}>
          <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mx-16">
            <div className="flex items-center  flex-wrap">
              <img
                src={Vector2}
                alt="Imagen 2"
                className="rounded-full h-10 w-10 mb-3 sm:mb-0"
              />
              <p className="text-[22px] ml-2 font-roboto font-bold text-left">{insertarSaltosDeLinea(PrimerTitulo, 15)}</p>
            </div>
            <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
              {PrimerDescripcion}
            </p>
          </div>
          <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-16">
            <div className="flex items-center flex-wrap">
              <img
                src={Vector1}
                alt="Imagen 1"
                className="rounded-full ml-10 h-10 w-10 mb-3 sm:mb-0"
              />

              <p className="text-[22px] ml-2 font-roboto font-bold text-left">{insertarSaltosDeLinea(SegundoTitulo, 18)}</p>
            </div>
            <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
              {SegundoDescripcion}
            </p>
          </div>
          <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mx-16">
            <div className="flex items-center  flex-wrap">
              <img
                src={Vector3}
                alt="Imagen 3"
                className="rounded-full mr-5 h-10 w-10 mb-3 sm:mb-0"
              />
              <p className="text-[22px]  font-roboto font-bold text-left">{insertarSaltosDeLinea(TerceroTitulo, 11)}</p>
            </div>
            <p className="text-sm mt-2 font-roboto text-center ml-[1rem] w-[12rem]">

              {TerceroDescripcion}
            </p>
          </div>
        </div>
      </div>
    </>
  )

}

const insertarSaltosDeLinea = (texto, longitud) => {
  const fragmentos = [];
  let indice = 0;

  while (indice < texto.length) {
    fragmentos.push(texto.slice(indice, indice + longitud));
    indice += longitud;
  }

  return fragmentos.map((fragmento, index) => (
    <React.Fragment key={index}>
      {fragmento}
      {index < fragmentos.length - 1 && <br />}
    </React.Fragment>
  ));
};
export default Feature