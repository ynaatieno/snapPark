
import Search from "../components/Search";
function AddSpace() {
  const[addSpace,setAddSpace]=usestate({
    name:"",
    price:""
  
  }

  )
// function handleInputChange=
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl text-[#023047] font-bold mt-20 mb-5">
        Add Parking Space
      </h2>
      <div className="shadow-[0_0_10px_lightgray] py-4  px-4 ">
        <div className="flex flex-col items-center justify-center gap-3 border border-gray-400 border-none w-full px-9">
          <div className="flex w-[50%]">
            <input
              type="text"
              placeholder="Name of Parking space"
              className="border shadow-lg border-gray-400  rounded-lg
 px-2 py-7 mt-5 text-left w-full"
            />
          </div>
          <div className="flex w-[50%]">
            <input
              type="text"
              placeholder="Price per hour"
              className="border shadow-lg border-gray-400 rounded-lg
 px-2 py-7 w-full"
            />
          
          </div>

          <div className="flex w-[50%]">
            <Search customStyles="bg-white  border shadow-lg border-gray-400  px-2 py-7 mb-5 w-full text-black" placeholder="location"/>
          </div>
          <div className="flex w-[50%]">
            <input
              type="file"
              placeholder="location"
              className="border shadow-lg border-gray-400
 px-2 py-7 mb-5 w-full"
            />
          </div>
          
            <button className="border  border-gray-400 bg-[#ffb703] text-[#023047] rounded-full px-[4em] py-4 mb-6 font-bold text-2xl">
              Add
            </button>
          
        </div>
      </div>
    </div>
  );
}
export default AddSpace;
