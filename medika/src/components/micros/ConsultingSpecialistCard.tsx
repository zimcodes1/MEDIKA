

function ConsultingSpecialistCard({img, name, text}: {img: string, name: string, text: string}){
    return(
        <div className="w-[250px] max-[820px]:w-[48%] max-[820px]:mt-2 max-sm:w-full max-sm:mt-2 border border-gray-300 min-h-[250px] text-gray-800 cursor-pointer bg-blue-50 rounded-2xl shadow-lg flex flex-col justify-center items-start p-5 hover:scale-105 transition-all duration-500 hover:bg-blue-700 hover:text-blue-50">
            <img src={img} alt={name} className="w-[60px] h-[60px] p-1 rounded-full bg-blue-100"/>
            <h2 className="text-xl font-[mont] mt-2">{name}</h2>
            <p className="text-xs">{text}</p>
        </div>
    )
}



export default ConsultingSpecialistCard