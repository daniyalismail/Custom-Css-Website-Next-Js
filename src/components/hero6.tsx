import "../style/hero6.css";
export default function Hero6(){
    return(
        <main className="hero6">
            <div className="hero-6">
            <div className="top-h6">
                    <h1>MY <span>CONTACTS</span></h1>
                    <p>Feel free to reach out to discuss your project or collaboration opportunities. Based in Karachi, Pakistan, I’m just a message away!</p>
            </div>
            <div className="middle-h6">
                <p>Block 13D, Gulshan-e-Iqbal, Karachi, Pakistan.</p>
            </div>
            <div className=" bottom-h6">
                <div className="div1">
                
                <p>(304)386-6719</p></div>
                <div className="div2">
                
                <p>(317)011-3001</p></div>
                <div className="div3">
            
                <p>info@website.com</p></div>
            </div>
            <div className="map h-full w-full bg-cover">
            <iframe className="h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1812227.7190792013!2d-81.41021568069492!3d27.484595448360196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1samazon%20warehouse%20florida!5e0!3m2!1sen!2s!4v1732558304041!5m2!1sen!2s" 
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">   
        </iframe>
            {/* <!-- map --> */}
        </div>
        </div>
        </main>
    )
}