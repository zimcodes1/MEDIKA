import ConsultingSpecialistCard from "./micros/ConsultingSpecialistCard"
import Testimonial from "./micros/Testimonial"
import Button from "./Button"
import { Slide, Fade } from "react-awesome-reveal"

function Body(){
    return(
        <div className="w-full h-auto px-20 max-[820px]:px-10 pt-10 bg-blue-50 max-sm:px-5">
            <h1 className="text-3xl font-bold text-gray-950 mb-5 font-[Mont] max-sm:text-2xl">Our Consulting Specialists</h1>
            {/*-------------ConsultingSpecialistCards Here-------------------*/}
            <div className="flex justify-between items-center w-full flex-wrap">
                <Slide cascade direction="right" duration={500} damping={0.3} triggerOnce>
                <ConsultingSpecialistCard name='Covid-19 Test' img='/images/germ.png' text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                <ConsultingSpecialistCard name="Heart & Lungs" img="/images/lungs.png" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                <ConsultingSpecialistCard name="Supliments" img="/images/bowl.png" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                <ConsultingSpecialistCard name='Mental Health' img="/images/brain.png" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem cumque adipisci temporibus."></ConsultingSpecialistCard>
                </Slide>
            </div>
            
            {/*--------------Why you choose us Section----------*/}
            <Fade direction="up" duration={900} triggerOnce fraction={0.3}>
            <div className="w-full h-[250px] max-sm:h-auto mt-20 max-:mt-10 flex flex-wrap justify-between items-center max-sm:flex-col">
                <div className="overflow-hidden rounded-2xl h-full w-[50%] max-sm:w-full">
                    <img src="/images/lab.jpg" alt="Us" className="w-full"/>
                </div>
                <div className="w-[50%] h-full flex flex-col justify-start px-10 max-sm:w-full max-sm:px-0 max-sm:pt-5">
                    <h2 className="text-gray-800 text-2xl font-[mont]">Why You Choose Us?</h2>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-gray-800 text-xs my-2"><i className="fa fa-check text-green-700"></i>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <Button text='Learn More!'></Button>
                </div>
            </div>
            </Fade>

            {/*---------------Testimonials-----------------*/}
            <Fade direction="up" duration={900} triggerOnce fraction={0.3}>
            <div className="flex max-[820px]:flex-col w-full min-h-[250px] bg-blue-200 rounded-md mt-20 max-[820px]:py-5 py-20 px-10 max-sm:flex-wrap max-sm:flex-col max-sm:py-10 max-sm:px-5 max-sm:mt-10">
                <div className="w-[50%] max-[820px]:w-full max-sm:w-full max-sm:h-fit h-full flex flex-col flex-wrap">
                    <h2 className="text-3xl font-[mont] text-gray-900 max-sm:text-2xl">What <b className="text-blue-700">Our Members</b> Are Saying About Us?</h2>
                    <p className="text-sm text-gray-700 mt-5 max-sm:mt-2 max-sm:text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia cupiditate quasi illo unde esse distinctio</p>
                    <span className="flex justify-start items-center mt-5 max-sm:mt-2 max-[820px]:mx-auto max-[820px]:mt-1">
                        <img src="/images/users.avif" alt="Users" className="h-[40px] w-auto"/> 
                        <p className="text-gray-900 ml-5 font-bold">100+ Reviews</p>
                    </span>
                </div>
                <div className="w-[50%] max-[820px]:w-full max-[820px]:mt-5 max-sm:w-full max-sm:h-fit h-full flex">
                    <Testimonial userName="Favour Bawa" userImage="/images/user1.png" date="12/05/2025"></Testimonial>
                </div>
            </div>
            </Fade>

            <Slide direction="right" duration={900} triggerOnce fraction={0.3}>
            {/*---------------------Future of Quality Health-------------*/}
            <div className="w-full mt-20 max-sm:mt-10 h-[350px] max-sm:h-fit max-sm:flex-col-reverse flex">
                <div className="flex w-[50%] max-sm:w-full max-sm:pr-0 flex-wrap pr-4 max-sm:mt-5">
                    <h2 className="text-3xl font-[mont] text-gray-900 max-sm:text-2xl">The Future <br /> Of <b className="text-blue-700">Quality Health</b></h2>
                    <p className="text-sm mt-3 max-[820px]:mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem sit dolore vero ab commodi nostrum laborum ipsum perferendis ipsa assumenda facilis, voluptate sequi quod fuga voluptatibus? Corporis, expedita exercitationem? <br /> <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consectetur, cumque amet eligendi deleniti omnis repellendus quo totam minus ut voluptate optio, facilis aut recusandae quis velit rerum dolores necessitatibus. <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button text="Learn More!"></Button>
                </div>
                <div className="flex w-[50%] max-sm:w-full overflow-hidden rounded-3xl justify-center items-center">
                    <img src="/images/doctor2.png" alt="Doctor" className="w-full h-auto" />
                </div>
            </div>
            </Slide>

            {/*------------------Newsletter---------------------*/}
            <Fade direction="up" duration={900} triggerOnce fraction={0.3}>
            <div className="flex w-full h-[250px] max-sm:h-[200px] bg-blue-700 rounded-3xl max-sm:rounded-2xl mt-20 max-sm:mt-10 flex-col items-center justify-center">
                <h1 className="text-4xl max-sm:text-xl font-bold text-blue-50">Subscribe To Our Newsletter!</h1>
                <div className='flex w-[60%] max-sm:w-[80%] mx-auto h-[55px] rounded-4xl bg-white shadow-md mt-[2%] justify-between pr-2 items-center text-sm text-gray-900'>
                    <input type="text" className="w-[95%] text-gray-800 h-full rounded-4xl pl-5" placeholder="Your email:"/>
                    <span className='cursor-pointer py-3 px-3.5 bg-blue-700 rounded-full text-blue-50 hover:bg-blue-300 hover:text-gray-900'>
                        <i className="fa fa-arrow-right"></i>
                    </span>
                </div>
            </div>
            </Fade>
        </div>
    )
}


export default Body