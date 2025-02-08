import github from "../../assets/Icons/github.png"
import instagram from "../../assets/Icons/Instagram.png"
import Form from "./Form"

const Connect = () => {
    return (
        <div className="px-[75px] mb-[80px] md:flex md:flex-row gap-5">
            <div className="flex-1">
                <h1 className="text-4xl font-bold">Connect with <span className="text-primary-green">Us</span></h1>
                <div className="flex my-4">
                    <a href="https://github.com/sanidhya-Git">
                        <img src={github} alt="" className="w-8 h-8 mr-2" />
                    </a>
                    <a href="https://www.instagram.com/sanidhya_mehra_?igsh=MW5vd3lpNnhyYmoxNQ==">
                        <img src={instagram} alt="" className="w-10 h-10 mr-2" />
                    </a>                    
                </div>
            </div>
            <div className="flex-1 md:mt-5">
                <Form />
            </div>
        </div>
    )
}

export default Connect;