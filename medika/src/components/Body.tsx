import ConsultingSpecialistCard from "./micros/ConsultingSpecialistCard"
import Testimonial from "./micros/Testimonial"
import Button from "./Button"


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

                    <Button text='Learn More!'></Button>
                </div>
            </div>

            {/*---------------Testimonials-----------------*/}

            <div className="flex w-full min-h-[250px] bg-blue-200 rounded-md mt-20 py-20 px-10">
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

            {/*---------------------Future of Quality Health-------------*/}
            <div className="w-full mt-20 h-[350px] flex">
                <div className="flex w-[50%] flex-wrap pr-4">
                    <h2 className="text-3xl font-[mont] text-gray-900">The Future <br /> Of <b className="text-blue-700">Quality Health</b></h2>
                    <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem sit dolore vero ab commodi nostrum laborum ipsum perferendis ipsa assumenda facilis, voluptate sequi quod fuga voluptatibus? Corporis, expedita exercitationem? <br /> <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consectetur, cumque amet eligendi deleniti omnis repellendus quo totam minus ut voluptate optio, facilis aut recusandae quis velit rerum dolores necessitatibus. <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fuga molestias sit, aspernatur unde ab itaque consectetur eos!
                    </p>
                    <Button text="Learn More!"></Button>
                </div>
                <div className="flex w-[50%] overflow-hidden rounded-3xl justify-center items-center">
                    <img src="/images/doctor2.png" alt="Doctor" className="w-full h-auto" />
                </div>
            </div>

            {/*------------------Newsletter---------------------*/}
            <div className="flex w-full h-[250px] bg-blue-700 rounded-3xl mt-20 flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-blue-50">Subscribe To Our Newsletter!</h1>
                <div className='flex w-[60%] mx-auto h-[55px] rounded-4xl bg-white shadow-md mt-[2%] justify-between pr-2 items-center text-sm text-gray-900'>
                    <input type="text" className="w-[95%] text-gray-800 h-full rounded-4xl pl-5" placeholder="Your email:"/>
                    <span className='cursor-pointer py-3 px-3.5 bg-blue-700 rounded-full text-blue-50 hover:bg-blue-300 hover:text-gray-900'>
                        <i className="fa fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Body