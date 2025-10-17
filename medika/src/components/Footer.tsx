

const Footer = ()=>{
    return(
        <div className="flex w-full h-[400px] max-sm:h-fit bg-blue-700 mt-20 max-sm:mt-10 flex-col px-20 max-sm:px-5 pt-15 max-sm:pt-5">
            <div className="w-full h-[90%] flex border-b-2 border-blue-400 flex-wrap max-sm:justify-between">
                <div className="flex w-[35%] max-sm:w-[70%] h-full flex-col flex-wrap">
                    <h1 className="text-xl font-bold font-[mont] text-blue-50 max-sm:text-lg">Medika</h1>
                    <p className="mt-3 max-sm:mt-1 text-sm max-sm:text-xs text-blue-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aut officiis quam voluptatem natus inventore praesentium ex eligendi nobis aspernatur, nesciunt repudiandae qui saepe fuga aliquid ut itaque voluptatibus ipsum.
                        <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reprehenderit ipsam corrupti incidunt, perferendis ut.
                    </p>

                    <span className="flex justify-start items-center mt-4 text-blue-50 text-xl">
                        <a href="https://www.facebook.com/azimeh" target="__blank"><span className="mx-1"><i className="fab fa-facebook"></i></span></a>
                        <a href="https://www.x.com/azimeho" target="__blank"><span className="mx-1"><i className="fab fa-x-twitter"></i></span></a>
                        <span className="mx-1"><i className="fab fa-whatsapp"></i></span>
                    </span>
                </div>
                <div className="flex flex-col w-[25%] items-center">
                    <h1 className="text-xl max-sm:text-lg font-bold font-[mont] text-blue-50">Useful Links</h1>

                    <ul className="text-blue-50 text-sm max-sm:text-xs mt-3 max-sm:mt-1">
                        <li className="mt-2 max-sm:mt-0"><a href="#">Home</a></li>
                        <li className="mt-2 max-sm:mt-0"><a href="#">About us</a></li>
                        <li className="mt-2 max-sm:mt-0"><a href="#">Contact us</a></li>
                        <li className="mt-2 max-sm:mt-0"><a href="#">Our Mission</a></li>
                    </ul>
                </div>
                <div className="flex w-[35%] max-sm:w-full h-full flex-col items-end max-sm:items-center max-sm:mb-3">
                    <h1 className="text-xl max-sm:text-lg font-bold font-[mont] text-blue-50">Address</h1>

                    <div className="flex w-full rounded-3xl overflow-hidden h-[80%] mt-[2%] items-center justify-center">
                        <img src="/images/map.jpg" alt="Map" className="w-full h-full"/>
                    </div>
                </div>
            </div>
            <div className="w-full h-[10%] flex justify-center items-center">
                <p className="text-sm text-blue-50">© 2025 | All Rights Reserved</p>
            </div>
        </div>
    )
}


export default Footer