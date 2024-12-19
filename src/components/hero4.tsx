import "../style/hero4.css"
export default function Hero4(){
    return(
        <main className="hero4">
            <div className="hero-4" id="ourskills">
            {/* <!-- top --> */}
            <div className="top-h4">
            <h1>
                MY <span>SKILLS</span>
            </h1>
            <p>Proficient in Java, C++,Html,Css,Typescript and MySQL, with a strong aptitude for problem-solving and a passion for exploring cutting-edge technologies like Artificial Intelligence, Web 3.0, and the Metaverse.</p>
                </div>
                {/* <!-- bottom --> */}
                <div className="bottom-h4">
                    <div className="box-1">
                    <div className="circle1">
                        <p>45%</p>
                    </div>
                    <p>TYPESCRIPT</p>
                </div>
                    <div className="box-2">
                        <div className="circle2">
                            <p>70%</p>
                        </div>
                        <p>CSS</p>
                    </div>
                    <div className="box-3">
                        <div className="circle3">
                            <p>80%</p>
                        </div>
                        <p>HTML</p>
                    </div>
                    <div className="box-4">
                        <div className="circle4">
                        <p>80%</p>
                        </div>
                        <p>WEB DESIGN</p>
                    </div>
                </div>
        </div>
        </main>
    );   
}