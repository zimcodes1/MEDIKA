


function Button({text}:{text:string}){
    return(
        <button className="py-3 w-[150px] cursor-pointer rounded-2xl mt-2 text-sm text-blue-700 hover:bg-blue-700 hover:text-blue-50">{text} <i className="fa fa-arrow-right"></i></button>
    )
}

export default Button