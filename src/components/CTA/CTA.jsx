
//RW-4
function CTA() {

    return (
        <div className=" w-full  h-[560px] py-20 px-0 gap-59 " style={{ backgroundColor: '#000320' }}>
            <div className="flex flex-col items-center justify-center mx-4 lg:mx-0 md:mx-0">

                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-white font-roboto text-lg font-bold leading-[33px] tracking-[0.1px] text-center">
                        At your fingertips
                    </h3>

                    <h2 className="text-white  font-roboto text-4xl font-normal leading-[57px] tracking-[0.2px] text-center">
                        Lightning fast prototyping
                    </h2>

                </div>

                <div className="flex flex-col items-center justify-center mt-[3rem] w-[373px] h-[264px] gap-3">
                    <h3 className="text-white font-roboto text-lg font-bold leading-[33px] tracking-[0.1px] text-left">
                        Subscribe to our Newsletter
                    </h3>
                    <p className="font-roboto text-base font-normal leading-[27px] tracking-[0.2px] text-white text-left">
                        Available exclusively on Figmaland
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