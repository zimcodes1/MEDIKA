
const ButBar = ()=>{
    return(
        <div className="w-full absolute bottom-0 h-[100px] bg-blue-700 flex left-0 py-5 px-20">
            <div className="w-[60%] h-full flex">
                <span className="flex h-full flex-col justify-center text-center mx-5">
                    <h2 className="text-4xl font-bold text-blue-50">24/7</h2>
                    <p className="text-blue-200">Online Support</p>
                </span>
                <span className="flex h-full flex-col justify-center border-x border-blue-300 px-10 mx-10">
                    <h2 className="text-4xl font-bold text-blue-50">100+</h2>
                    <p className="text-blue-200">Doctors</p>
                </span>
                <span className="flex h-full flex-col justify-center text-center mx-5">
                    <h2 className="text-4xl font-bold text-blue-50">1M+</h2>
                    <p className="text-blue-200">Active Patients</p>
                </span>
            </div>
            <div className="w-[40%] h-full"></div>
        </div>
    )
}

export default ButBar