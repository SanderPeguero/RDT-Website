import React from 'react';
import Vector1 from "./Vector1.png"
import Vector2 from "./Vector2.png"
import Vector3 from "./Vector3.png"
function Feature() {

  return (
    <div className="text-center mb-4 font-roboto">
      <p className="text-2xl pt-20 font-roboto">At your fingertip</p>
      <p className="text-4xl pt-2 font-roboto">Features</p>
      <p className="text-xl pt-2 font-roboto">Most calendars are designed for teams. <br />
        Slate is designed for freelancers</p>
      <p className="text-3xl pt-2 font-roboto"></p>

      <div className="flex flex-col pt-10  mt-4 sm:flex-row sm:justify-center">
        <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-4">
          <div className="flex items-center flex-wrap">
            <img
              src={Vector1}
              alt="Imagen 1"
              className="rounded-full h-20 w-20 mb-3 sm:mb-0"
            />
            <p className="text-[22px] ml-2 font-roboto font-bold">The best products <br />start with Sketch</p>
          </div>
          <p className="flex items-center text-sm mt-2 font-roboto">Slate helps you see how many
            <br />more days you need to work to
            <br />reach your financial goal. </p>
        </div>
        <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mx-4">
          <div className="flex items-center  flex-wrap">
            <img
              src={Vector2}
              alt="Imagen 2"
              className="rounded-full h-20 w-20 mb-3 sm:mb-0"
            />
            <p className="text-[22px] ml-2 font-roboto font-bold">Fastest way to<br />organize</p>
          </div>
          <p className="text-sm mt-2 font-roboto">Slate helps you see how many
            <br />more days you need to work to
            <br />reach your financial goal. </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center  flex-wrap">
            <img
              src={Vector3}
              alt="Imagen 3"
              className="rounded-full h-20 w-20 mb-3 sm:mb-0"
            />
            <p className="text-[22px] ml-2 font-roboto font-bold">Work better<br />together</p>
          </div>
          <p className="text-sm mt-2 font-roboto">Slate helps you see how many
            <br />more days you need to work to
            <br />reach your financial goal</p>
        </div>
      </div>

    </div>

  )

}

export default Feature