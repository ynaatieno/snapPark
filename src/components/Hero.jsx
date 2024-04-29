
import { useScript } from "@uidotdev/usehooks";
import { useRef, useEffect, useMemo } from "react";
import Search from "./Search";
// import Map from "./Map";
import { GoogleMap } from "@react-google-maps/api";
function Hero() {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const autoComplete = new window.google.maps.places.Autocomplete(
    inputRef.current
  );

  autoComplete.addListener("place_changed", () => {
    const place = autoComplete.getPlace();
    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      alert("this location not available");
    }
    if (place.geometry.viewport || place.geometry.location) {
      // do something
      console.log(place.geometry.location);
    }
  });

  return (
    <>
      <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/assets/hero.avif')] h-[90vh] bg-cover w-[100vw] bg-red-700">
        <div className="flex flex-col justify-center items-center gap-[5em] h-full">
          <div className="">
            <h1 className="text-6xl font-bold text-white">
              Reserve parking now and save
            </h1>
          </div>
          <div className="flex gap-4">
            <Search customStyles="bg-[#023047]"/>

<div>
            <button className="border bg-[#ffb703] rounded-lg py-8 px-6 w-[200px]">
              Find Parking
            </button> </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* <Map/> */}
    </>
  );
}
export default Hero;









