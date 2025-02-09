import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
import { ContactText } from "./ContactText";
import "./Contact-section.css";
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';


const Contact = () => {
  return (
    <section className="flex flex-col w-full  px-[5%] gap-10 justify-center">
      <header id="ContactUs" className="flex justify-center align-middle mt-20">
        <h1 className="text-5xl font-bold tracking-wider text-text-black font-monsterrat">
          Contact Us
        </h1>
      </header>
      <main className=" mt-0 flex flex-wrap lg:gap-[5%] gap-[20px] justify-center items-center">
        <ContactText />
        <ContactForm />
      </main>
      <h2 className="text-5xl text-center font-bold tracking-wider  font-monsterrat text-textBlack">
        Connect with <span className="text-customRed">Us</span>
      </h2>
      <div className="md:flex items-center justify-between">
        <div className="flex items-center justify-center p-0  md:w-1/2">
          <article className="flex flex-col items-center text-center ">
          <div className="flex gap-[27px] justify-center">

  <a href="https://x.com/SanidhyaMehra?t=A79PNG0ToelB-wFxfDuuxw&s=08" className="group">
    <RiTwitterXFill 
      className="md:h-12 h-10 w-auto text-black transition-transform duration-300 ease-in-out transform group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg"
    />
  </a>

  <a href="https://github.com/sanidhya-Git" className="group">
    <FaGithub 
      className="text-6xl md:h-12 h-10 transition-transform duration-300 ease-in-out transform group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg"
    />
  </a>

  <a href="https://www.instagram.com/sanidhya_mehra_?igsh=MW5vd3lpNnhyYmoxNQ==" className="group">
    <img 
      src={Insta} 
      alt="Insta-logo" 
      className="md:h-12 h-10 transition-transform duration-300 ease-in-out transform group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg"
    />
  </a>
</div>
            <div className="mt-4">
              <p className="font-semibold">Get in touch :</p>
              <p>
                Email:
                <a
                  href="mailto:sanidhya.web@gmail.com"
                  className="ml-1 font-bold text-primaryGreen underline"
                >
                  sanidhya.web@gmail.com
                </a>
              </p>
              <p>
                Phone:
                <a
                  href="tel:+918955465833"
                  className="ml-1 font-bold text-primaryGreen underline"
                >
                  +91 8955465833
                </a>
              </p>
              <p>
                Address:  BHAMBU PG <br /> Jaipur , 302017
              </p>
            </div>
          </article>
        </div>
        <div className="  md:w-1/2">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;