import { Slide } from "react-awesome-reveal"

const ButBar = ()=>{
    return(
        <div className="w-full absolute bottom-0 h-[100px] max-sm:h-[60px] bg-blue-700 flex left-0 py-5 px-20 max-[820px]:px-10 max-sm:px-5">
            <div className="flex w-[60%] max-[820px]:w-full max-[820px]:justify-evenly max-[820px]:items-center h-full">
                <Slide direction="left" duration={500} cascade damping={0.2} triggerOnce>
                <span className="flex h-full flex-col justify-center text-center mx-5 max-sm:mx-0">
                    <h2 className="text-4xl font-bold text-blue-50 max-sm:text-xl">24/7</h2>
                    <p className="text-blue-200 max-sm:text-sm">Online Support</p>
                </span>
                <span className="flex h-full flex-col justify-center border-x border-blue-300 px-10 max-sm:px-5 mx-10 max-sm:mx-0">
                    <h2 className="text-4xl font-bold text-blue-50 max-sm:text-xl">100+</h2>
                    <p className="text-blue-200 max-sm:text-sm">Doctors</p>
                </span>
                <span className="flex h-full flex-col justify-center text-center mx-5 max-sm:mx-0">
                    <h2 className="text-4xl font-bold text-blue-50 max-sm:text-xl">1M+</h2>
                    <p className="text-blue-200 max-sm:text-sm">Active Patients</p>
                </span>
                </Slide>
            </div>
            <div className="w-[40%] max-[820px]:hidden h-full"></div>
        </div>
    )
}

export default ButBar