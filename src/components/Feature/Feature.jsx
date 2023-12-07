import React, { useState, useEffect } from 'react';
import Vector1 from "./Vector1.png"
import Vector2 from "./Vector2.png"
import Vector3 from "./Vector3.png"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Feature() {

  const [storedData, setstoredData] = useState("")
  const [PrimerTitulo, setPrimerTitulo] = useState("Fastest way to organize")
  const [SegundoTitulo, setSegundoTitulo] = useState("The best products start with Sketch")
  const [TerceroTitulo, setTerceroTitulo] = useState("Work better together")
  const [PrimerDescripcion, setPrimerDescripcion] = useState("Slate help you see how many more days you need to work to reach your financial goal.")
  const [SegundoDescripcion, setSegundoDescripcion] = useState("Slate help you see how many more days you need to work to reach your financial goal.")
  const [TerceroDescripcion, setTerceroDescripcion] = useState("Slate help you see how many more days you need to work to reach your financial goal.")

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
        d = prompt('Edit title:', TerceroTitulo)
        setTerceroTitulo(d !== null ? d : TerceroTitulo);

        break;
      case 4:
        d = prompt('Edit Description:', PrimerDescripcion)
        setPrimerDescripcion(d !== null ? d : PrimerDescripcion);

        break;
      case 5:
        d = prompt('Edit Description:', SegundoDescripcion)
        setSegundoDescripcion(d !== null ? d : SegundoDescripcion);

        break;
      case 6:
        d = prompt('Edit  Description:', TerceroDescripcion)
        setTerceroDescripcion(d !== null ? d : TerceroDescripcion);

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

        setPrimerDescripcion("")

        break;

      case 5:

        setSegundoDescripcion("")

        break;

      case 6:

        setTerceroDescripcion("")

        break;

      default:

    }
  }
  useEffect(() => {
    setstoredData(localStorage.getItem('D'));
  }, [])


  return (
    <>


      <div className="relative text-center mb-4 font-roboto">


        <p className="text-1xl pt-20 font-roboto font-bold">At your fingertip</p>
        <p className="text-4xl pt-4 font-roboto">Features</p>
        <p className=" pt-4 font-roboto">Most calendars are designed for teams. <br />
          Slate is designed for freelancers</p>
        <p className="text-3xl pt-2 font-roboto"></p>

        <div className="flex flex-col pt-16  mt-4 sm:flex-row sm:justify-center" >
          <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mx-16">
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
            {storedData ?
              <div className="flex flex-row">
                <div className="px-3 py-2 text-right text-xs leading-4">
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                    <FaEdit size={14} onClick={(e) => Editar(4)} className="text-yellow-400" />
                  </button>
                </div>
                <div className="px-3 py-2 text-right text-xs leading-4">
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                    <MdDelete size={14} onClick={(e) => Eliminar(4)} className="text-red-500" />
                  </button>
                </div>
              </div>
              : null}


          </div>
          <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-16">
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
            {storedData ?
              <div className="flex flex-row">
                <div className="px-3 py-2 text-right text-xs leading-4">
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                    <FaEdit size={14} onClick={(e) => Editar(5)} className="text-yellow-400" />
                  </button>
                </div>
                <div className="px-3 py-2 text-right text-xs leading-4">
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                    <MdDelete size={14} onClick={(e) => Eliminar(5)} className="text-red-500" />
                  </button>
                </div>
              </div>
              : null}
          </div>
          <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mx-16">
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
            {storedData ?
              <div className="flex flex-row">
                <div className="px-3 py-2 text-right text-xs leading-4">
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                    <FaEdit size={14} onClick={(e) => Editar(6)} className="text-yellow-400" />
                  </button>
                </div>
                <div className="px-3 py-2 text-right text-xs leading-4">
                  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                    <MdDelete size={14} onClick={(e) => Eliminar(6)} className="text-red-500" />
                  </button>
                </div>
              </div>
              : null}
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