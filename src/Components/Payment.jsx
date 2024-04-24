


function Payment(){
    return(
        <div>
       < div className="bg-[#023047] bg-no-repeat bg-cover bg-center h-[100vh] flex  justify-center items-center">
        
        <div className="py-[4em] px-[4em] bg-[#fff] rounded-[20px]">
   <div>
      <h1 className="font-bold text-center">Enter your payment details</h1>
   </div>
   
   <div>
        <input type="card" className="border  py-3  px-[4em]  rounded-full outline-none my-4"  placeholder="Card Number"/>

        <div>
          <input type="password"  className="border  py-3  px-[4em]  rounded-full outline-none my-4" placeholder=" Enter Password" />

          
          </div>
          
        </div>
        
          <button className="border  border-[] py-3 px-[8em] rounded-full bg-[#023047] text-[#fff]">enter ammount</button>
        
          <button className="text-center bg-[#023047] text-[#fff] border  border-[] py-3 px-[8em] rounded-full">pay</button>
        
    
         
          
          </div>
    
      </div>
      <div>
        
      </div>
    
        
        </div>
    )
}
export default Payment