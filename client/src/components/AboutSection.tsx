import { Heart, Target, Zap, Bot } from "lucide-react";
import { StatCard, EmojiCard } from "./ui/brutalist-card";

const AboutSection = () => {
  const stats = [
    {
      icon: <Target className="w-8 h-8 text-[#378DFF]" />,
      number: "17+",
      label: "Years Experience",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#219cdb]" />,
      number: "$3M+",
      label: "Revenue Generated",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#378DFF]" />,
      number: "4",
      label: "Key Industries",
    },
    {
      icon: <Bot className="w-8 h-8 text-[#219cdb]" />,
      number: "100+",
      label: "Demos Per Month",
    },
  ];

  const highlights = [
    {
      icon: "💼",
      text: "17+ years in sales, business development, and vendor management",
    },
    {
      icon: "🏆",
      text: "Consistently exceeded revenue targets across multiple industries",
    },
    {
      icon: "🌊",
      text: "Expert in Water/Wastewater, Oil & Gas, Cybersecurity, and Industrial Manufacturing",
    },
    {
      icon: "🤝",
      text: "Proven track record in C-Suite sales and strategic partnerships",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-16 h-16 bg-[#80cfff] rounded-full border-4 border-[#0A3A62] bottom-20 right-20 lg:z-auto -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - About content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#A5CAFF] border-4 border-[#0A3A62] rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#0A3A62] text-[#0A3A62]">
              <Heart className="w-5 h-5 text-[#378DFF]" />
              About Brandon
            </div>

            <h2 className="text-5xl lg:text-6xl font-black">
              <span className="gradient-text">About Brandon</span>
            </h2>

            <p className="text-lg text-[#0A3A62] leading-relaxed">
              Brandon is a seasoned sales and vendor management professional with over 17 years of experience specializing in industrial sector solutions, condition monitoring, predictive maintenance, and water/wastewater utilities. His expertise spans direct and channel sales, business development, and leadership roles, demonstrating consistent success in exceeding revenue targets and building strategic partnerships.
            </p>
            <p className="text-lg text-[#0A3A62] leading-relaxed">
              Beyond his professional expertise, Brandon has a deep passion for AI technology, computer hardware and software, and engineering principles. In his free time, he enjoys building racing quadcopters, robotics, custom computers, and handling all mechanical maintenance on his classic Porsche 911.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#378DFF] border-4 border-[#0A3A62] rounded-full flex items-center justify-center text-xl">
                    {highlight.icon}
                  </div>
                  <p className="text-[#0A3A62] font-medium">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats and emoji */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <EmojiCard emoji="💼" />
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-black mb-2 text-[#0A3A62]">Let's Connect</h3>
              <div className="w-16 h-1 bg-[#378DFF] mx-auto"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} icon={stat.icon} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

