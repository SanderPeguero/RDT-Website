import React, { useState, useEffect } from 'react';
import Vector1 from "./Vector1.png"
import Vector2 from "./Vector2.png"
import Vector3 from "./Vector3.png"

const features = [
  {
    id: 1,
    imageSrc: Vector1,
    title: "Fastest way  to organize",
    description: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",

  },
  {
    id: 2,
    imageSrc: Vector2,
    title: "The best products start with Sketch",
    description: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },

  {
    id: 3,
    imageSrc: Vector3,
    title: "Work better together",
    description: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
]

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
    <div>
      <div className="bg-white flex flex-col items-center justify-center mb-[4rem] mt-[2rem]">
        <div className="">
          <h4 className="font-roboto text-base font-bold leading-5 tracking-tighter text-center  mt-4">
            At your fingertip
          </h4>
          <h2 className="font-roboto text-4xl font-normal leading-14 tracking-tighter text-center text-blue-950  py-4">
            Feature
          </h2>
          <h4 className="font-roboto text-base font-bold leading-5 tracking-tighter text-center mt-4 text-[#374754]">
            Most calendars are designed for teams.<br /> Slate is designed for freelancers
          </h4>

        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {features.map((feature) => (
              <div key={feature.id} className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                <div className="flex flex-col items-center justify-center pt-16 md:flex-row   sm:flex-row sm:justify-center">
                  <div className="flex flex-col items-center justify-center mb-[4rem] sm:mb-0 sm:mx-16">
                    <div className="flex flex-row">
                      <img
                        src={feature.imageSrc}
                        alt="Imagen 2"
                        className="rounded-full ml-10 h-8 w-8 mb-3 sm:mb-0"
                      />
                      <h3 className=" ml-2 font-roboto font-bold text-left">
                        {feature.id === 1 ? (
                          <>Fastest way to<br />organize</>
                        ) : feature.id === 2 ? (
                          <>The best products <br />start with Sketch</>
                        ) : feature.id === 3 ? (
                          <>Work better<br />together</>
                        ) : (
                          <p></p>
                        )}
                      </h3>
                    </div>
                    <p className="text-sm mt-2 font-roboto text-left ml-[5rem] w-[14rem]">
                      Slate help you see how many more days you need to work to reach your financial goal.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    // <div className="text-center mb-4 font-roboto flex flex-col items-center justify-center mx-8">
    //   <p className="text-1xl pt-20 font-roboto font-bold">At your fingertip</p>
    //   <p className="text-4xl pt-4 font-roboto">Features</p>

    //   <p className=" pt-4 font-roboto">Most calendars are designed for teams. <br />
    //     Slate is designed for freelancers</p>
    //   <p className="text-3xl pt-2 font-roboto"></p>

    //   <div className="flex flex-col items-center justify-center pt-16 md:flex-row   sm:flex-row sm:justify-center">
    //       {/* Here 1 */}
    //     <div className="flex flex-col items-center justify-center mb-[4rem] sm:mb-0 sm:mx-16">
    //       <div className="flex items-center justify-center  flex-wrap">
    //         <img
    //           src={Vector2}
    //           alt="Imagen 2"
    //           className="rounded-full ml-10 h-8 w-8 mb-3 sm:mb-0"
    //         />
    //         <h3 className=" ml-2 font-roboto font-bold text-left">Fastest way to<br />organize</h3>
    //       </div>
    //       <p className="text-sm mt-2 font-roboto text-left ml-[5rem] w-[14rem]">
    //         Slate help you see how many more days you need to work to reach your financial goal.
    //       </p>
    //     </div>
    //     {/* Here 1 */}
    //     {/* Here 2 */}
    //     <div className="flex flex-col items-center justify-center mb-[4rem] sm:mb-0 sm:mr-16">
    //       <div className="flex items-center justify-center flex-wrap">
    //         <img
    //           src={Vector1}
    //           alt="Imagen 1"
    //           className="rounded-full ml-10 h-8 w-8 mb-3 sm:mb-0"
    //         />

    //         <h3 className=" ml-2 font-roboto font-bold text-left">The best products <br />start with Sketch</h3>
    //       </div>
    //       <p className="text-sm mt-2 font-roboto text-left ml-[6rem] w-[14rem]">
    //         Slate help you see how many more days you need to work to reach your financial goal.
    //       </p>
    //     </div>
    //     {/* Here 2 */}
    //     {/* Here 3 */}
    //     <div className="flex flex-col items-center justify-center mb-[4rem] sm:mb-0 sm:mx-16">
    //       <div className="flex items-center justify-center flex-wrap">
    //         <img
    //           src={Vector3}
    //           alt="Imagen 3"
    //           className="rounded-full mr-5 h-8 w-8 mb-3 sm:mb-0"
    //         />
    //         <h3 className="  font-roboto font-bold text-left">Work better<br />together</h3>
    //       </div>
    //       <p className="text-sm mt-2  font-roboto text-left ml-[3.5rem] w-[12rem]">
    //         Slate help you see how many more days you need to work to reach your financial goal.

    //       </p>
    //     </div>
    //     {/* Here 3 */}
    //   </div>
    // </div>

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