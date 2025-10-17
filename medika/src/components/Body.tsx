import ConsultingSpecialistCard from "./micros/ConsultingSpecialistCard"
import Testimonial from "./micros/Testimonial"

function Body(){
    return(
        <div className="w-full h-auto px-20 pt-10 bg-blue-50">
            <h1 className="text-3xl font-bold text-gray-950 mb-5 font-[Mont]">Our Consulting Specialists</h1>
            {/*-------------ConsultingSpecialistCards Here-------------------*/}
            <div className="flex justify-between items-center w-full">
                <ConsultingSpecialistCard name='Covid-19 Test' img='/images/germ.png' text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                <ConsultingSpecialistCard name="Heart & Lungs" img="/images/lungs.png" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                <ConsultingSpecialistCard name="Supliments" img="/images/bowl.png" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                <ConsultingSpecialistCard name='Mental Health' img="/images/brain.png" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
            </div>
            
            {/*--------------Why you choose us Section----------*/}
            
            <div className="w-full h-[250px] mt-20 flex justify-between items-center">
                <div className="overflow-hidden rounded-2xl h-full w-[50%]">
                    <img src="/images/lab.jpg" alt="Us" className="w-full"/>
                </div>
                <div className="w-[50%] h-full flex flex-col justify-start px-10">
                    <h2 className="text-gray-800 text-2xl font-[mont]">Why You Choose Us?</h2>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <button className="py-3 w-[150px] cursor-pointer rounded-2xl mt-2 text-sm text-blue-700">Learn More <i className="fa fa-arrow-right"></i></button>
                </div>
            </div>

            {/*---------------Testimonials-----------------*/}

            <div className="flex w-full min-h-[250px] bg-blue-200 rounded-md mt-20 py-20 mb-10 px-10">
                <div className="w-[50%] h-full flex flex-col flex-wrap">
                    <h2 className="text-3xl font-[mont] text-gray-900">What <b className="text-blue-700">Our Members</b> Are Saying About Us?</h2>
                    <p className="text-sm text-gray-700 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia cupiditate quasi illo unde esse distinctio</p>
                    <span className="flex justify-start items-center mt-5">
                        <img src="/images/users.avif" alt="Users" className="h-[40px] w-auto"/> 
                        <p className="text-gray-900 ml-5 font-bold">100+ Reviews</p>
                    </span>
                </div>
                <div className="w-[50%] h-full flex">
                    <Testimonial userName="Favour Bawa" userImage="/images/user1.png" rating="2" date="12/05/2025"></Testimonial>
                </div>
            </div>
        </div>
    )
}


export default Body