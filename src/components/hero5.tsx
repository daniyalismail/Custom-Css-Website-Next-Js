import "../style/hero5.css";
export default function Hero5(){
    return(
       <main className="hero5">
        <div className="hero-5" >
            <div className="top-h5">
            <h1>WANT TO HIRE ME ?</h1>
        </div>
            <div className="middle-h5">
            <input type="text" placeholder="YOUR NAME"/>
        <input type="email" placeholder="YOUR EMAIL"/>
            <input type="number" placeholder="YOUR PHONE"/>
            <button>SEND REQUEST</button>
        </div>
        <div className="bottom-h5">
            <p>Let’s bring your ideas to life with innovative solutions and unmatched dedication. Together, we can turn your vision into reality!</p>
        </div>
        </div>
       </main> 
    )
}