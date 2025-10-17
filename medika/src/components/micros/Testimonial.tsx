

function Testimonial({userName, rating, date, userImage}:{userName:string, rating:string, date:string, userImage:string}){
    return(
        <div className="flex w-[80%] max-sm:w-full mx-auto max-sm:mt-5 max-sm:mx-0 h-full rounded-2xl shadow-md bg-blue-50 p-10 max-sm:p-5 flex-col">
            <span className="w-full h-[30%] flex">
                <span className="flex w-[50%] justify-start items-center">
                    <span className="flex w-[40px] h-[40px] overflow-hidden rounded-full">
                        <img src={userImage} alt={userName} />
                    </span>
                    <span className="flex flex-col mx-2">
                        <h3 className="text-sm font-semibold text-gray-900">{userName}</h3>
                        <p className="text-gray-800 text-xs">{date}</p>
                    </span>
                </span>
                <span className="flex w-[50%] justify-end items-center text-xl">
                    <i className="fa fa-star text-yellow-300"></i>
                    <i className="fa fa-star text-yellow-300"></i>
                    <i className="fa fa-star text-yellow-300"></i>
                    <i className="fa fa-star text-yellow-300"></i>
                    <i className="fa fa-star text-yellow-300"></i>
                </span>
            </span>
            <span className="h-[70%] w-full pt-10">
                <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cumque illo voluptate. Porro, a. Inventore, ad veritatis. Tenetur aliquid deserunt dolorum quam vero?</p>
            </span>
        </div>
    )
}

export default Testimonial