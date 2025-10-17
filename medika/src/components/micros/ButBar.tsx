
const ButBar = ()=>{
    return(
        <div className="w-full absolute bottom-0 h-[100px] max-sm:h-[60px] bg-blue-700 flex left-0 py-5 px-20 max-sm:px-5">
            <div className="flex w-[60%] max-sm:w-full max-sm:justify-evenly max-sm:items-center h-full">
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
            </div>
            <div className="w-[40%] max-sm:hidden h-full"></div>
        </div>
    )
}

export default ButBar