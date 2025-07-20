import { FaComment, FaGear, FaSackDollar } from "react-icons/fa6";
import Card from "./components/Card";
import FeatureSection from "./components/FeatureSection";

export default function Home() {
  return (
    <>
      <section className="relative md:h-[540px] max-md:h-fit md:p-32 max-md:p-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,.75) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
          }}
        />
        
        <div className="relative z-10 space-y-6">
          <header>
            <h1 className="md:text-5xl max-md:text-4xl font-bold text-shadow-lg text-shadow-black">
              Welcome to Spark
            </h1>
            <p className="mt-4 lg:w-2/3 text-shadow-sm text-shadow-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </header>
          
          <button className="gradient-button">
            <span>Call to Action</span>
          </button>
        </div>
      </section>
      <section className="mt-16 h-[400px] justify-center lg:gap-20 max-lg:gap-4 md:flex hidden">
          <Card icon={<FaComment />} title="Feature 1" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." className="h-2/3" />
          <Card icon={<FaGear />} title="Feature 2" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." className="h-2/3 lg:self-center" />
          <Card icon={<FaSackDollar />} title="Feature 3" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." className="h-2/3 lg:self-end" />
      </section>
      <section className="mt-16 min-h-[400px] lg:gap-20 max-lg:gap-4 md:hidden flex flex-col">
          <FeatureSection icon={<FaComment />} title="Feature 1" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." />
          <FeatureSection icon={<FaGear />} title="Feature 2" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." />
          <FeatureSection icon={<FaSackDollar />} title="Feature 3" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." />
      </section>
    </>
  );
}