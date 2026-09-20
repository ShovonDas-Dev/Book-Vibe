import Image from "next/image";
import banner from "@/assets/pngwing 1.png"
const Hero = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between overflow-hidden rounded-[20px] bg-[#f3f3f3] px-6 py-10 sm:px-10 sm:py-12 md:flex-row md:px-12 lg:min-h-[430px] lg:px-24">

        {/* Left Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="font-serif text-3xl font-bold leading-[1.15] text-[#111] sm:text-4xl lg:text-[46px]">
            Books to freshen up
            <br className="hidden sm:block" />
            your bookshelf
          </h2>

          <button
            type="button"
            className="mt-7 rounded-md bg-[#18c900] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#12ad00] hover:shadow-lg sm:mt-10 sm:text-base"
          >
            View The List
          </button>
        </div>

        {/* Book Image */}
        <div className="mt-10 flex w-full justify-center md:mt-0 md:w-1/2">
          <Image
            src={banner}
            alt="The Dating Playbook for Men"
            width={300}
            height={350}
            priority
            className="h-[230px] w-auto object-contain drop-shadow-xl sm:h-[270px] lg:h-[310px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;