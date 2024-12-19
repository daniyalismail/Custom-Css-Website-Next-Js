import Image from "next/image";
import "../style/header.css";
import { FaFacebook   } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { SiPinterest } from "react-icons/si";
import Link from "next/link";
export default function Header(){
    return(
        <header className="header">
        <header className="header-extended">
        {/*  left section */}
        <div className="left">
        <FaFacebook className="i" />
        <FaGooglePlus  className="i"/>
        <SiPinterest  className="i"/>
        </div>
        {/* <!-- right section --> */}
        <div className="right">
            <div className="p1">
             {/* icons */}
            <p>+92(304)386-6719</p>
            {/* icons */}
            <p >+92(317)011-3001</p>
            </div>
            <button className="call-button">CALL ME</button>
        </div>
    </header>
    <header className="main-header">
        {/* <!-- left section --> */}
         <div className="logo">
            <p>DI</p>
            {/* <Image src="/logo_top.png" alt="logo" height={30} width={80}/> */}
         </div>
         {/* <!-- right section --> */}
          <div className="main-header-rs">
            <Link href="/">HOME</Link>
            <Link href="/About">ABOUT ME</Link>
            <Link href="/Contact">CONTACT ME</Link> 
        </div>
    </header>
    </header>
    )
}