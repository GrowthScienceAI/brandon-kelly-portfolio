import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SkillCard, FeatureCard } from "./ui/brutalist-card";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("sales");

  const tabs = [
    { id: "sales", label: "💼 Sales", emoji: "💼" },
    { id: "technical", label: "⚙️ Technical", emoji: "⚙️" },
    { id: "leadership", label: "👥 Leadership", emoji: "👥" },
    { id: "industry", label: "🏭 Industry", emoji: "🏭" },
  ];

  const goToPreviousTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const previousIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    setActiveTab(tabs[previousIndex].id);
  };

  const goToNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(tabs[nextIndex].id);
  };

  const skills: Record<
    string,
    Array<{
      icon: string;
      name: string;
      level: string;
      levelColor: string;
      description: string;
      stars: number;
    }>
  > = {
    sales: [
      {
        icon: "🎯",
        name: "Account Management",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "Strategic account growth & retention",
        stars: 5,
      },
      {
        icon: "💰",
        name: "Business Development",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "New market penetration & revenue growth",
        stars: 5,
      },
      {
        icon: "🤝",
        name: "Relationship Building",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "C-Suite engagement & partnerships",
        stars: 5,
      },
      {
        icon: "📊",
        name: "Sales Strategy",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "Pipeline development & forecasting",
        stars: 4,
      },
      {
        icon: "🎤",
        name: "Presentations",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "Product demos & conference speaking",
        stars: 5,
      },
      {
        icon: "💬",
        name: "Negotiation",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "High-value contract closing",
        stars: 4,
      },
    ],
    technical: [
      {
        icon: "🤖",
        name: "AI Technology",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "AI-enabled solutions & platforms",
        stars: 4,
      },
      {
        icon: "💻",
        name: "Software Solutions",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "SaaS, cybersecurity, analytics platforms",
        stars: 4,
      },
      {
        icon: "📈",
        name: "Analytics & Reporting",
        level: "Proficient",
        levelColor: "bg-[#A5CAFF]",
        description: "Salesforce, CRM, data-driven insights",
        stars: 3,
      },
      {
        icon: "🔧",
        name: "Product Demos",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "100+ demos per month average",
        stars: 5,
      },
      {
        icon: "🌐",
        name: "IoT Solutions",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "Industrial IoT & condition monitoring",
        stars: 4,
      },
      {
        icon: "🔒",
        name: "Cybersecurity",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "Endpoint protection & risk assessment",
        stars: 4,
      },
    ],
    leadership: [
      {
        icon: "👥",
        name: "Team Leadership",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "Led teams of 6+ sales professionals",
        stars: 5,
      },
      {
        icon: "📚",
        name: "Training & Development",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "Onboarding & product training",
        stars: 4,
      },
      {
        icon: "🎯",
        name: "Strategic Planning",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "Market research & growth strategies",
        stars: 5,
      },
      {
        icon: "📋",
        name: "Project Management",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "Cross-functional collaboration",
        stars: 4,
      },
      {
        icon: "⏰",
        name: "Time Management",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "High-volume prospecting & organization",
        stars: 5,
      },
      {
        icon: "🎓",
        name: "Mentoring",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "New hire development & coaching",
        stars: 4,
      },
    ],
    industry: [
      {
        icon: "🌊",
        name: "Water/Wastewater",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "Utilities, treatment plants, infrastructure",
        stars: 5,
      },
      {
        icon: "⛽",
        name: "Oil & Gas",
        level: "Expert",
        levelColor: "bg-[#378DFF]",
        description: "Petrochemical, refining, TOLA region",
        stars: 5,
      },
      {
        icon: "🔐",
        name: "Cybersecurity",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "Mid-market, SLED, industrial sectors",
        stars: 4,
      },
      {
        icon: "🏭",
        name: "Industrial Manufacturing",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "Equipment, automation, construction",
        stars: 4,
      },
      {
        icon: "🏛️",
        name: "Municipalities",
        level: "Advanced",
        levelColor: "bg-[#219cdb]",
        description: "Government, utilities, public sector",
        stars: 4,
      },
      {
        icon: "🔬",
        name: "Technology",
        level: "Proficient",
        levelColor: "bg-[#A5CAFF]",
        description: "SaaS, AI, IoT, analytics platforms",
        stars: 3,
      },
    ],
  };

  const features = [
    {
      icon: "🚀",
      title: "Revenue Generation",
      description: "$3M+ in net new revenue across industries",
    },
    {
      icon: "⏰",
      title: "17+ Years Experience",
      description: "Proven track record in sales & business development",
    },
    {
      icon: "💼",
      title: "Strategic Partnerships",
      description: "Channel development & MSSP relationships",
    },
    {
      icon: "🤖",
      title: "Technical Fluency",
      description: "AI, IoT, cybersecurity, and analytics expertise",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-20 h-20 bg-[#80cfff] rounded-full border-4 border-[#0A3A62] top-10 left-20 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#A5CAFF] rounded-full border-4 border-[#0A3A62] bottom-10 right-10 lg:z-auto -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 px-2 py-2">
          <div className="inline-flex items-center gap-2 bg-[#A5CAFF] border-4 border-[#0A3A62] rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#0A3A62] mb-8 text-[#0A3A62]">
            <span className="text-2xl">💪</span>
            PROFESSIONAL SKILLS
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="text-[#0A3A62]">SKILLS </span>
            <span className="gradient-text">SHOWCASE</span>
          </h2>

          <p className="text-xl text-[#0A3A62] max-w-2xl mx-auto">
            17+ years of expertise in sales, business development, and strategic partnerships
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 px-6 py-4">
          <div className="flex gap-1 sm:gap-2 bg-white border-4 border-[#0A3A62] rounded-2xl p-1 sm:p-2 shadow-[6px_6px_0px_0px_#0A3A62] max-w-full overflow-visible">
            <button
              onClick={goToPreviousTab}
              className="border-4 border-[#0A3A62] rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#0A3A62] hover:shadow-[6px_6px_0px_0px_#0A3A62] hover:translate-x-[-1px] hover:translate-y-[-1px] p-2 sm:p-3 bg-white hover:bg-gray-50 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Previous tab"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0 px-2 py-2 -mx-2 -my-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all duration-200 flex-shrink-0 min-w-[80px] sm:min-w-auto text-sm sm:text-base min-h-[44px] flex items-center justify-center ${
                    activeTab === tab.id
                      ? "bg-[#378DFF] text-white border-4 border-[#0A3A62] shadow-[4px_4px_0px_0px_#0A3A62]"
                      : "bg-white text-[#0A3A62] border-4 border-transparent hover:border-gray-300"
                  }`}
                >
                  <span className="sm:hidden text-lg">{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
            <button
              onClick={goToNextTab}
              className="border-4 border-[#0A3A62] rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#0A3A62] hover:shadow-[6px_6px_0px_0px_#0A3A62] hover:translate-x-[-1px] hover:translate-y-[-1px] p-2 sm:p-3 bg-white hover:bg-gray-50 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Next tab"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-2 py-2">
          {skills[activeTab]?.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              levelColor={skill.levelColor}
              description={skill.description}
              stars={skill.stars}
            />
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 py-2">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
