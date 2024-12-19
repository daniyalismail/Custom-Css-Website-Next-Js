import Image from "next/image";
import { FaFacebook   } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { SiPinterest } from "react-icons/si";
import "../style/footer.css";
export default function Footer(){
    return(
        <footer className="footer">
        <div className="hero-7-left">
            {/* <!-- logo --> */}
             {/* <Image src="/logo_bottom3.png" alt="logo" height={100} width={150}/> */}
             <div className="logo">
             <h1>DI</h1>
             </div>
             <p className="paragraph">
             Crafting innovative solutions with passion and precision. Let's build something extraordinary together!
                </p>
                <p className="copyright">&copy;Panacloud <span>2019</span></p>
        </div>
        <div className="r-h7">
        <div className="services">
            <h1>SERVICES</h1>
            <p>Lorem Ispum</p>
            <p>Lorem</p>
            <p>Lorem Ispum Dolor</p>
            <p>Lorem Ispum</p>
            <p>Lorem</p>
            <p>Lorem Ispum Dolor</p>
            <p>Lorem Ispum Dolor</p>
        </div>
        <div className="useful-links">
            <h1>USEFUL LINKS</h1>
            <p>Lorem Ispum</p>
            <p>Lorem</p>
            <p>Lorem Ispum Dolor</p>
            <p>Lorem Ispum</p>
            <p>Lorem</p>
            <p>Lorem Ispum Dolor</p>
            <p>Lorem Ispum Dolor</p>
        </div>
        <div className="contact-follow">
        <div className="contacts">
            <h1>CONTACTS</h1>
            <div className="c1">
            {/* Icons */}
            <p>+92(304)386-6719</p>
        </div>
        <div className="c2">
            {/* Icons */}
            <p>+92(317)011-3001</p>
        </div>
        <div className="c3">
           {/* Icons */}
            <p>info@website.com</p>
        </div>
        </div>
        <div className="follow-us">
            <h1>FOLLOW US</h1>
            {/* <!-- icons --> */}
             <div className="icons">
             <FaFacebook className="i" />
            <FaGooglePlus  className="i"/>
            <SiPinterest  className="i"/>
        </div>
        </div>
    </div>
    </div>
    </footer>
    );
}