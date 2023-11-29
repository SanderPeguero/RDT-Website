import BaseBottom from "./Base Bottom.png"
import Base from "./Base.png"
import grip from "./grip.png"
import sCREENMASK from "./SCREEN MASK.png"

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

            <div className="mt-[4rem]">

                <div className="flex items-center justify-center">


                    <div
                        className="flex items-center justify-center border-[8.93px] border-solid border-gray-300 rounded-lg bg-black w-[421.57px] md:w-[843.14px] h-[283.63px] md:h-[567.26px] left-[46.64] md:left-[93.28px]"
                        style={{ borderRadius: "26.79px, 26.79px, 0px, 0px" }}
                    >
                        <img
                            className=" w-[398px] md:w-[796px] h-[248.905px] md:h-[497.81px] top-[11.64px] md:top-[23.28px] left-[58.28px]  md:left-[116.56px]"
                            src={sCREENMASK}

                        />
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <img src={grip} />
                </div>
                <div className="">


                    <img 
                    className="w-[1033.26px] h-[21.34px] top-[544.37px] "
                    src={Base} />
                </div>
                <div className="">
                    <img src={BaseBottom} />
                </div>

            </div>
        </div>
    )

}

export default Hero2