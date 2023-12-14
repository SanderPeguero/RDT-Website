import React, { useState, useEffect } from 'react';
import Vector1 from "./Vector1.png"
import Vector2 from "./Vector2.png"
import Vector3 from "./Vector3.png"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContextRDT } from '../../Context';
function Feature() {
  const {
    SaveFeature,
    features,
    EditFeatureTitle,
    EditFeatureDescription,
    DeleteFeatureTitle,
    DeleteFeatureDescription,
    UploadFileFeature,
    deleteIconFeature
  } = useContextRDT()
  const [storedData, setstoredData] = useState("")

  useEffect(() => {
    setstoredData(localStorage.getItem('D'));
  }, [])


  const handleEditImg = (e, id) => {
    const selectedImage = e.target.files[0];
    UploadFileFeature(id, selectedImage)
  }

  const handleDeleteIcon = (id) => {
    deleteIconFeature(id)
  }


  const HandleEditarTitle = (id, title) => {
    const newTitle = prompt('Edit title:', title);
    if (newTitle !== null) {
      console.log("Editar title here")
      console.log(newTitle)
      EditFeatureTitle(id, newTitle)
    }

  }

  const HandleEditarDescription = (id, description) => {
    const newDescription = prompt('Edit Description:', description)
    if (newDescription !== null) {
      console.log("Editar description")
      console.log(newDescription)
      EditFeatureDescription(id, newDescription)
    }
  }




  return (
    <>
      <div className="relative text-center mb-4 font-roboto">
        <p className="text-1xl pt-20 font-roboto font-bold">At your fingertip</p>
        <p className="text-4xl pt-4 font-roboto">Features</p>
        <p className=" pt-4 font-roboto">Most calendars are designed for teams. <br />
          Slate is designed for freelancers</p>
        <p className="text-3xl pt-2 font-roboto"></p>
        <div className='flex flex-col pt-16  mt-4 sm:flex-row sm:justify-center'>
          {features.map((feat, index) => (

            <div key={index} className="flex flex-col items-center mb-4 sm:mb-0 sm:mx-16">
              {storedData ?
                <div className="flex flex-row">
                  {/* Image */}
                  <label htmlFor={`file-upload${feat.Id}`} className="px-3 py-2 text-right  text-xs leading-4">
                    <div className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                      <input id={`file-upload${feat.Id}`} type="file" onChange={(e) => handleEditImg(e, feat.Id)} className="hidden" />
                      <FaEdit size={14} className="text-yellow-400" />
                    </div>

                  </label>
                  <div className="px-3 py-2  text-right  text-xs leading-4">
                    <button onClick={() => handleDeleteIcon(feat.Id)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                      <MdDelete size={14} className="text-red-500" />
                    </button>
                  </div>
                  {/* Image */}
                  <div className="px-3 py-2 text-right text-xs leading-4">
                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                      <FaEdit size={14} onClick={(e) => HandleEditarTitle(feat.Id, feat.Title)} className="text-yellow-400" />
                    </button>
                  </div>
                  <div className="px-3 py-2 text-right text-xs leading-4">
                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                      <MdDelete size={14} onClick={(e) => DeleteFeatureTitle(feat.Id)} className="text-red-500" />
                    </button>
                  </div>

                </div>
                : null}

              <div className="flex items-center  flex-wrap">

                <img
                  src={feat.Image}
                  alt="Imagen 2"
                  className="rounded-full h-10 w-10 mb-3 sm:mb-0"
                />
                <p className="text-[22px] ml-2 font-roboto font-bold text-left">{insertarSaltosDeLinea(feat.Title, index)}</p>
              </div>
              <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                {feat.Descripcion}
              </p>
              {storedData ?
                <div className="flex flex-row">
                  <div className="px-3 py-2 text-right text-xs leading-4">
                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                      <FaEdit size={14} onClick={(e) => HandleEditarDescription(feat.Id, feat.Descripcion)} className="text-yellow-400" />
                    </button>
                  </div>
                  <div className="px-3 py-2 text-right text-xs leading-4">
                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                      <MdDelete size={14} onClick={(e) => DeleteFeatureDescription(feat.Id)} className="text-red-500" />
                    </button>
                  </div>
                </div>
                : null}
            </div>
          ))}
        </div>
      </div>
    </>
  )

}

const insertarSaltosDeLinea = (texto, index) => {
  let longitud;
  console.log("Salto " + index)
  if (index === 0) {
    longitud = 15;
  } else if (index === 1) {
    longitud = 18;
  } else if (index === 2) {
    longitud = 11;
  }
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