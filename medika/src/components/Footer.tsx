

const Footer = ()=>{
    return(
        <div className="flex w-full h-fit max-sm:h-fit bg-blue-700 mt-20 max-sm:mt-10 flex-col px-20 max-sm:px-5 pt-15 max-sm:pt-5">
            <div className="w-full h-[90%] flex border-b-2 border-blue-400 flex-wrap max-sm:justify-between pb-5">
                <div className="flex w-[35%] max-sm:w-[50%] h-full flex-col flex-wrap">
                    <h1 className="text-xl font-bold font-[mont] text-blue-50 max-sm:text-lg">Medika</h1>
                    

                    <span className="flex flex-col justify-start items-start mt-4 max-sm:mt-1 text-blue-50 text-sm">
                        <a className="md:mt-1" href="https://www.facebook.com/azimeh" target="__blank"><span><i className="fab fa-facebook"></i></span> Facebook</a>
                        <a className="md:mt-1" href="https://www.x.com/azimeho" target="__blank"><span><i className="fab fa-x-twitter"></i></span>X</a>
                        <a className="md:mt-1" href="https://www.linkedin.com/in/azimeh" target="__blank"><span><i className="fab fa-linkedin"></i></span>LinkedIn</a>
                        <span className="md:mt-1"><i className="fab fa-whatsapp"></i>WhatsApp</span>
                    </span>
                </div>
                <div className="flex flex-col w-[25%] max-sm:w-fit items-center">
                    <h1 className="text-xl max-sm:text-lg font-bold font-[mont] text-blue-50">Useful Links</h1>

                    <ul className="text-blue-50 text-sm max-sm:text-sm mt-3 max-sm:mt-1">
                        <li className="mt-2 max-sm:mt-0"><a href="#">Home</a></li>
                        <li className="mt-2 max-sm:mt-0"><a href="#">About us</a></li>
                        <li className="mt-2 max-sm:mt-0"><a href="#">Contact us</a></li>
                        <li className="mt-2 max-sm:mt-0"><a href="#">Our Mission</a></li>
                    </ul>
                </div>
                <div className="flex w-[40%] max-sm:w-full h-fit flex-col items-end max-sm:items-center max-sm:mb-3">
                    <h1 className="text-xl max-sm:text-lg font-bold font-[mont] text-blue-50">Address</h1>

                    <div className="flex w-full rounded-3xl overflow-hidden h-[80%] mt-[2%] items-center justify-center">
                        <img src="/images/map.jpg" alt="Map" className="w-full h-full"/>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit py-2 flex justify-center items-center">
                <p className="text-sm text-blue-50">© 2025 | All Rights Reserved</p>
            </div>
        </div>
    )
}


export default Footer