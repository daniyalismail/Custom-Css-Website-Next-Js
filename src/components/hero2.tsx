import "../style/hero2.css";
import Image from "next/image";
export default function Hero2(){
    return(
        <main className="hero2">
        <div className="hero-2">
            {/* <!-- top --> */}
            <div className="top-section">
                <center>
                <h1>ADVANTAGES TO <span> HIRE</span> ME</h1>
                <div className="para2">
                <p>I bring a unique combination of technical expertise, creativity, and dedication to every project. My strong foundation in programming, paired with a passion for innovation and quality,
                I am committed to exceeding expectations and building lasting professional relationships.
                </p>
                </div>
            </center>
            </div>
            {/* <!-- Bottom --> */}
            <div className="bottom-section">
                <div className="innovation">
                    <div className="bulb">
                        <Image src="/bulb.png" alt="innovation" height={75} width={75}/>
                    </div>
                    <h1>INNOVATION</h1>
                    <p>I embrace emerging technologies to craft creative and cutting-edge solutions.</p>
                </div>
                <div className="quality">
                    <div className="like">
                        <Image src="/like.png" alt="quality" height={75} width={75}/>
                    </div>
                    <h1>QUALITY</h1>
                    <p>Committed to delivering top-notch results that exceed expectations.</p>
                </div>
                <div className="experience">
                    <div className="clock">
                        <Image src="/clock.png" alt="experience" height={75} width={75}/>
                    </div>
                    <h1>EXPERIENCE</h1>
                    <p>A solid foundation in programming and real-world problem-solving ensures dependable expertise.</p>
                </div>
                <div className="happy-clients">
                    <div className="people">
                        <Image src="/people.png" alt="clients"height={75} width={75}/>
                    </div>
                    <h1>HAPPY CLIENTS</h1>
                    <p>My focus on client satisfaction builds trust and lasting professional relationships.</p>
                </div>
                <div className="support">
                    <div className="chat">
                        <Image src="/chat.png" alt="support"height={75} width={75} />
                    </div>
                    <h1>SUPPORT</h1>
                    <p>Always ready to provide timely assistance and maintain strong communication.</p>
                </div>
            </div> 
        </div>
        </main>
    );
}