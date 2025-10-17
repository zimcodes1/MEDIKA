import ButBar from "./micros/ButBar";

const Hero = ()=>{
    return(
        <div className='w-full h-[530px] max-sm:h-[450px] bg-blue-100 flex px-20 max-sm:px-4 relative overflow-hidden flex-wrap'>
        <div className='flex w-[50%] h-full flex-col py-20 flex-wrap max-sm:py-14'>
          <h1 className='font-[Mont] text-5xl text-gray-900 max-sm:text-4xl'>Search & Find Your <b className='text-blue-700'>Favourite</b> Doctor</h1>
          <p className='text-sm text-blue-950 font-sans mt-4 max-sm:text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus.</p>

          <div className='flex w-full h-[55px] rounded-4xl bg-white shadow-md mt-[10%] justify-between pl-5 pr-2 items-center text-sm text-gray-900 max-sm:absolute max-sm:bottom-[20%] max-sm:w-[90%] max-sm:left-[5%] max-sm:z-20'>
            <span className='cursor-pointer'>
              <p><i className="fa fa-user-circle"></i> Doctor's Name <i className="fa fa-angle-down"></i></p>
            </span>
            <span className='cursor-pointer'>
              <p><i className="fa fa-globe"></i> Location <i className="fa fa-angle-down"></i></p>
            </span>
            <span className='cursor-pointer py-3 px-3.5 bg-blue-700 rounded-full text-blue-50 hover:bg-blue-300 hover:text-gray-900'>
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>
        <img className='w-[50%] h-auto absolute right-20 z-10 bottom-0 max-sm:bottom-[60px] max-sm:w-[500px] max-sm:right-[-10%]' src="/images/doctor.png" alt="Doctor" />
        <div className='w-[600px] h-[600px] max-sm:h-[300px] max-sm:w-[300px] absolute bg-[#006eff5e] rounded-full right-2 bottom-[-30%] max-sm:bottom-0 max-sm:right-[-10%]'>

        </div>
        <ButBar></ButBar>
        </div>
    )
}

export default Hero