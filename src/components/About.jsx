function About(){
    return(
        <div >
            <div className="flex flex-col mt-9  gap-8 justify-center items-center container mx-auto">
                <div className="flex gap-10 justify-center items-center">
                <img src="src/assets/look.jpg" className="rounded-full"/>
                
                <div><h2><span className="text-[#ffb703] text-3xl font-bold"> Look</span></h2>
                <p className="text-2xl text-[#023047]">Find parking anywhere for now or later.<br></br>Compare prices at thousands of parking facilities across Kenya</p>
            </div>
            </div>
            <div className="flex gap-10 justify-center items-center">
                <img src="src/assets/book.jpg" className="rounded-full"/>
                
                <div><h2><span className="text-[#ffb703] text-3xl font-bold"> Book</span></h2>
                <p  className="text-2xl text-[#023047]">Book a space in just a few easy clicks.<br></br>Pay securely and receive parking space instantly</p>
            </div>
            </div>
            <div className="flex gap-10 justify-center items-center">
                <img src="src/assets/park.jpg" className="rounded-3xl"/>
                
                <div><h2><span className="text-[#ffb703] text-3xl font-bold"> Park</span></h2>
                <p  className="text-2xl text-[#023047]"> Enter easily with your mobile parking pass.<br></br>Follow the instructions included in your pass,park and go</p>
            </div>
            </div>
        </div>
        </div>
    )
    }
    export default About;