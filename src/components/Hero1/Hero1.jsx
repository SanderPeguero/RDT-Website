import TicketSystem from "./Ticket System Mockup.png"
//RW-11
function Hero1() {

    return (

        <div>
            <div className="flex flex-col">
                <div className="bg-black w-1440 h-827 p-[104px, 82px] gap-10">
                    <div className="flex flex-row justify-center">
                        <div className="w-1383 h-619 p-0 gap-60">
                            <div className="flex flex-row items-center p-10 gap-[47.66px]">
                                <div className="w-[709px] h-[414px] bg-gray-400 relative mr-12">
                                    <div className="absolute w-[709px] h-413.88 bg-white left-0 top-0">
                                        <img src={TicketSystem} />
                                    </div>

                                </div>
                                <div className="w-420 h-471 p-[64px, 0] gap-60 mx-8">
                                    <div className="flex flex-col items-start gap-7">
                                        <div className="flex items-center p-[10px, 0] gap-10">
                                            <h1 className="font-roboto font-extrabold text-5xl leading-66 tracking-[0.2px] text-white w-[321px] h-[131px]">We focus on ergonomics</h1>
                                        </div>
                                        <div className="flex items-center p-[10px, 0] gap-10">
                                            <h4 className="font-roboto font-bold text-base leading-20 tracking-[0.2px] text-white w-[298px] h-[40px]">Most calendars are designed for teams. Slate is designed for freelancers</h4>
                                        </div>
                                        <div className="flex flex-col items-center p-[10px, 0] gap-10 my-8">
                                            <div className="flex flex-col items-center p-0 w-236 h-65">
                                                <div className="flex flex-col items-center p-[16px, 0] w-236 h-65 bg-blue-500 rounded-full">
                                                    <div className="flex items-center gap-10 w-120 h-33">
                                                        <button className="w-[236px] h-[65px] p-[16px, 0px] rounded-full bg-blue-500 text-white font-roboto font-semibold text-lg leading-[33px] tracking-[0.1px] text-center">
                                                            Try For Free
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}

export default Hero1