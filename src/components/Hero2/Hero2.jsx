import container from "./container.png"

//RW-3
function Hero2() {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center p-2 gap-4">
                <h2 className="font-roboto font-normal text-4xl leading-10 tracking-tighter text-center text-black w-80 h-[8rem]">
                    Lightning fast<br />
                    prototyping
                </h2>
            </div>
            <div>
                <h4 className="font-roboto font-semibold text-base leading-5 tracking-tighter text-center text-gray-700">
                    Most calendars are designed for teams.<br />
                    Slate is designed for freelancers
                </h4>
            </div>
            <div className="w-72 h-28 p-2 gap-4 mt-16">
                <button className="w-60 h-16 p-4 rounded-full bg-blue-500 text-white font-roboto font-semibold text-base leading-8 tracking-tighter text-center">
                    Try For Free
                </button>
            </div>
           

            <div className="mt-[4rem] ">

                <img src={container} />


            </div>
        </div>
    )

}

export default Hero2