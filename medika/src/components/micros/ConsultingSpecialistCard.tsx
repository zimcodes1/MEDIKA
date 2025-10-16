

function ConsultingSpecialistCard({img, name, text}: {img: string, name: string, text: string}){
    return(
        <div className="w-[250px] border border-gray-300 h-[250px] bg-blue-50 rounded-2xl shadow-lg flex flex-col justify-center items-start p-5 hover:scale-105 transition-all duration-500">
            <img src={img} alt={name} className="w-[60px] h-[60px] p-1 rounded-full bg-blue-100"/>
            <h2 className="text-gray-800 text-2xl font-[mont] mt-2">{name}</h2>
            <p className="text-xs text-gray-800">{text}</p>
        </div>
    )
}



export default ConsultingSpecialistCard