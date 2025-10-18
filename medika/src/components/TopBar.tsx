

const TopBar = ()=>{
    return(
        <div className='sticky top-0 bg-blue-100 h-[70px] w-full flex justify-between items-center px-20 max-sm:px-5 max-[820px]:px-10 z-50'>
          <span><h3 className='max-sm:text-xl text-2xl font-bold font-[Mont] text-blue-700'>Medika</h3></span>
          <span className='flex max-sm:hidden'>
            <a href="#" className=' text-blue-950 font-semibold mx-2 max-[820px]:text-sm max-[820px]:mx-1 hover:border-b-2 hover:border-blue-700 hover:text-blue-700 transition duration-600'>Home</a>
            <a href="#" className=' text-blue-950 font-semibold mx-2 max-[820px]:text-sm max-[820px]:mx-1 hover:border-b-2 hover:border-blue-700 hover:text-blue-700 transition duration-600'>About</a>
            <a href="#" className=' text-blue-950 font-semibold mx-2 max-[820px]:text-sm max-[820px]:mx-1 hover:border-b-2 hover:border-blue-700 hover:text-blue-700 transition duration-600'>Application</a>
            <a href="#" className=' text-blue-950 font-semibold mx-2 max-[820px]:text-sm max-[820px]:mx-1 hover:border-b-2 hover:border-blue-700 hover:text-blue-700 transition duration-600'>History</a>
          </span>
          <span className='flex justify-center items-center'>
            <button className='max-[820px]:text-xs max-sm:px-2 max-sm:mx-0 max-sm:ml-1 transition-all duration-700 mx-2 px-6 py-2 border-2 border-blue-700 rounded-3xl text-blue-700 font-semibold hover:text-gray-50 hover:bg-blue-700'>Log in</button>
            <button className='max-[820px]:text-xs max-sm:px-2 max-sm:mx-0 max-sm:ml-1 transition-all duration-700 mx-2 px-6 py-2 bg-blue-700 rounded-3xl text-gray-50 font-semibold hover:bg-transparent border-2 border-blue-700 hover:text-blue-700'>Sign Up</button>
            <span className="hidden max-sm:flex">
              <i className="fa fa-bars text-3xl ml-2 text-blue-700 cursor-pointer"></i>
            </span>
          </span>
        </div>
    )
}

export default TopBar