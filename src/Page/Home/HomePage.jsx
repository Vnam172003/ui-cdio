import ImageMain from "../../assets/imageMain.png";
import ImageDoctor2 from "../../assets/imageDoctor2.png";
import ImageDoctor3 from "../../assets/imageDoctor3.png";

import ImageDoctor from "../../assets/ImageDoctor.png";
const doctor = () => {
  return (
    <div className="">
      <img src={ImageDoctor} alt="" />
      <h1 className="text-center text-5xl text-[#1d4d85] my-5">
        Meet Our Specialists
      </h1>
      <img src={ImageDoctor2} alt="" />
      <div className="">
        <h1 className="text-center text-5xl text-[#1d4d85] my-5">
          Who Are We?
        </h1>
        <p className="text-center text-xl text-[#1d4d85] my-5 ">
          A collaborative hospital service website is a digital platform that
          brings together healthcare professionals, patients and administrators
          to streamline and enganhe the delivery of healthcare services. This
          innovative platform allows for seamless communication and coordination
          among healthcare teams, enabling them to provide more efficient and
          personalized care to patients.
        </p>
        <img src={ImageDoctor3} alt="" className="mx-auto" />
      </div>
    </div>
  );
};
function HomePage() {
  return (
    <div className="mx-20 my-10">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between text-center md:text-left ">
        <div className=" tracking-wider md:tracking-normal max-w-xs lg:max-w-xl text-[#1d4d85] ">
          <h1 className="lg:text-5xl text-4xl font-bold ">
            Your Health Is Our Top Priority
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            Securely share your comprehensive medical history with doctors and
            loved ones, for better communication and care.
          </p>
          <button className="bg-[#1d4d85] px-2 py-2 text-white hover:bg-[#1d4d85] hover:bg-opacity-90 rounded-lg">
            Appointment now
          </button>
        </div>
        <div className="max-w-xs md:max-w-none">
          <img src={ImageMain} alt="hero" width={400} />
        </div>
      </div>
      {doctor()}
    </div>
  );
}

export default HomePage;
