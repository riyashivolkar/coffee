import Navbar from "./Navbar";
import Coffeeimage from "../assets/coffee_image.png";
import Coffee from "../assets/Coffee.png";

const Hero = () => {
  return (
    <div className="">
      <img
        src={Coffeeimage}
        className="w-full h-[60vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] object-cover"
        alt="Coffee"
      />
      <Navbar />
      <div className="absolute z-20 px-4 py-6 text-[10px] md:text-lg text-white sm:px-6 sm:py-8 lg:px-8 top-28 font-playfair md:top-40 ">
        <div>
          We’ve got your morning covered with
          <br />
          <img src={Coffee} className="my-4 w-36 md:w-48 lg:w-80 md:my-8" />
          <div className="w-1/2 text-wrap">
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
