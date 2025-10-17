

const Footer = ()=>{
    return(
        <div className="fex w-full h-[400px] bg-blue-700 mt-20 flex-col px-20 pt-15">
            <div className="w-full h-[90%] flex border-b-2 border-blue-400">
                <div className="flex w-[35%] h-full flex-col flex-wrap">
                    <h1 className="text-xl font-bold font-[mont] text-blue-50">Medika</h1>
                    <p className="mt-3 text-sm text-blue-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aut officiis quam voluptatem natus inventore praesentium ex eligendi nobis aspernatur, nesciunt repudiandae qui saepe fuga aliquid ut itaque voluptatibus ipsum.
                        <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reprehenderit ipsam corrupti incidunt, perferendis ut.
                    </p>

                    <span className="flex justify-start items-center mt-4 text-blue-50 text-xl">
                        <a href="https://www.facebook.com/azimeh" target="__blank"><span className="mx-1"><i className="fab fa-facebook"></i></span></a>
                        <a href="https://www.x.com/azimeho" target="__blank"><span className="mx-1"><i className="fab fa-x-twitter"></i></span></a>
                        <span className="mx-1"><i className="fab fa-whatsapp"></i></span>
                    </span>
                </div>
                <div className="flex flex-col w-[20%] items-center">
                    <h1 className="text-xl font-bold font-[mont] text-blue-50">Useful Links</h1>

                    <ul className="text-blue-50 text-sm mt-3">
                        <li className="mt-2"><a href="#">Home</a></li>
                        <li className="mt-2"><a href="#">About us</a></li>
                        <li className="mt-2"><a href="#">Contact us</a></li>
                        <li className="mt-2"><a href="#">Our Mission</a></li>
                    </ul>
                </div>
                <div className="flex w-[35%] h-full flex-col items-end">
                    <h1 className="text-xl font-bold font-[mont] text-blue-50">Address</h1>

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