import ConsultingSpecialistCard from "./micros/ConsultingSpecialistCard"

function Body(){
    return(
        <div className="w-full h-auto px-20 pt-10 bg-blue-50">
            <h1 className="text-3xl font-bold text-gray-950 mb-5 font-[Mont]">Our Consulting Specialists</h1>
            <div className="flex justify-between items-center w-full">
                <ConsultingSpecialistCard name='Covid-19 Test' img='/images/germ.png' text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                <ConsultingSpecialistCard name="Heart & Lungs" img="/images/lungs.png" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                <ConsultingSpecialistCard name="Supliments" img="/images/bowl.png" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                <ConsultingSpecialistCard name='Mental Health' img="/images/brain.png" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
            </div>
        </div>
    )
}


export default Body