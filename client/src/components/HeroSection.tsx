import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleExternalPortfolio = () => {
    // This could link to an external portfolio or open a modal
    // For now, we'll scroll to the skills section to showcase abilities
    scrollToSection("skills");
  };
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-32 h-32 bg-[#378DFF] rounded-full border-4 border-[#0A3A62] top-10 right-10 lg:z-auto -z-10"></div>
      <div className="absolute w-20 h-20 bg-[#219cdb] rounded-full border-4 border-[#0A3A62] top-32 right-32 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#A5CAFF] rounded-full border-4 border-[#0A3A62] top-20 right-52 lg:z-auto -z-10"></div>

      <div className="container mx-auto px-6 py-12 lg:pt-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-[#A5CAFF] border-4 border-[#0A3A62] rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#0A3A62] text-[#0A3A62]">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
              Chicago, IL
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="gradient-text">Brandon</span>
                <br />
                <span className="gradient-text">Kelly</span>
                <span className="text-[#0A3A62]"></span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-bold text-[#378DFF]">
                Product Specialist | Sales & Business Development
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-[#0A3A62] max-w-2xl leading-relaxed">
              Results-driven sales and vendor management professional with 17+ years of experience in direct sales, channel sales, and business development. Proven track record of consistently exceeding revenue targets across Water/Wastewater, Oil & Gas, Cybersecurity, and Industrial Manufacturing sectors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#378DFF] text-white border-4 border-[#0A3A62] rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#0A3A62] hover:shadow-[6px_6px_0px_0px_#0A3A62] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg w-full sm:w-auto"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="bg-white text-[#378DFF] border-4 border-[#378DFF] rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#0A3A62] hover:shadow-[6px_6px_0px_0px_#0A3A62] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg w-full sm:w-auto"
              >
                View Experience
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="bg-[#219cdb] text-white border-4 border-[#0A3A62] rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#0A3A62] hover:shadow-[6px_6px_0px_0px_#0A3A62] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg w-full sm:w-auto"
              >
                Key Achievements
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/brandon-kelly-7061b1b6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 border-4 border-[#0A3A62] rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 shadow-[4px_4px_0px_0px_#0A3A62] hover:shadow-[6px_6px_0px_0px_#0A3A62] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-[#378DFF]"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>

          {/* Right side - Brandon's Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame with photo */}
              <div className="bg-white border-4 border-[#0A3A62] rounded-2xl shadow-[8px_8px_0px_0px_#0A3A62] transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#0A3A62] hover:translate-x-[-2px] hover:translate-y-[-2px] w-80 h-80 flex items-center justify-center overflow-hidden">
                <img 
                  src="/brandon-photo.png" 
                  alt="Brandon Kelly" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative circles around the frame */}
              <div className="absolute w-12 h-12 bg-[#378DFF] rounded-full border-4 border-[#0A3A62] -top-6 -left-6 lg:z-auto -z-10"></div>
              <div className="absolute w-8 h-8 bg-[#219cdb] rounded-full border-4 border-[#0A3A62] -top-4 -right-4 lg:z-auto -z-10"></div>
              <div className="absolute w-10 h-10 bg-[#A5CAFF] rounded-full border-4 border-[#0A3A62] -bottom-5 -left-5 lg:z-auto -z-10"></div>
              <div className="absolute w-6 h-6 bg-[#80cfff] rounded-full border-4 border-[#0A3A62] -bottom-3 -right-3 lg:z-auto -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

