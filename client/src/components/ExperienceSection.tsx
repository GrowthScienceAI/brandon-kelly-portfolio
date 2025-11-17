import { Briefcase } from "lucide-react";
import { ExperienceCard } from "./ui/brutalist-card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Product Specialist (Industrial Sector)",
      company: "NOVASEER",
      period: "April 2025 – Present",
      location: "San Jose, CA (Remote)",
      description:
        "Specializing in Industrial IoT and condition monitoring for wastewater treatment, enhancing equipment reliability, optimizing operational efficiency, and minimizing downtime through advanced predictive maintenance solutions.",
      achievements: ["Industrial IoT expertise", "Condition monitoring solutions", "Wastewater treatment focus"],
      color: "bg-[#378DFF]",
    },
    {
      title: "Business Development Manager",
      company: "Fluid Analytics Inc.",
      period: "April 2024 – March 2025",
      location: "Mountain View, CA (Remote)",
      description:
        "Led business development for AI-enabled water and wastewater infrastructure monitoring platforms. Closed $1.2M contract with City of San Francisco. Delivered conference presentations at AWWA and industry events.",
      achievements: ["$1.2M San Francisco contract", "AWWA conference speaker", "400M+ gallons monitored"],
      color: "bg-[#219cdb]",
    },
    {
      title: "Account Executive – Team Lead",
      company: "Coro",
      period: "April 2022 – March 2024",
      location: "Chicago, IL (Hybrid)",
      description:
        "Led cybersecurity sales for mid-market businesses focusing on industrial manufacturing, construction, and SLED markets. Conducted 100+ product demos per month and trained new hires on platform capabilities.",
      achievements: ["$568K net new revenue (2023)", "100+ demos/month average", "Team lead & trainer"],
      color: "bg-[#378DFF]",
    },
    {
      title: "Strategic Account Executive",
      company: "NCC Group North America",
      period: "April 2018 – April 2022",
      location: "Chicago, IL (Hybrid)",
      description:
        "Drove cybersecurity risk assessment and governance solutions for industrial sector. Closed $240K contract with Exxon Mobile. Generated $654K in TOLA region oil & gas and $251K through channel partnerships.",
      achievements: ["$240K Exxon Mobile contract", "$654K oil & gas revenue", "$251K channel revenue"],
      color: "bg-[#219cdb]",
    },
    {
      title: "Sales Manager (Industrial Sector)",
      company: "Marcus Evans Summits",
      period: "January 2015 – March 2018",
      location: "Chicago, IL",
      description:
        "Managed team of 6 sales representatives driving growth in petrochemical, oil refining, and industrial manufacturing sectors. Ranked top 25 in North America for net new business revenue (2015-2018).",
      achievements: ["Top 25 in North America", "$717K revenue (2017)", "Led team of 6"],
      color: "bg-[#378DFF]",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-24 h-24 bg-[#80cfff] rounded-full border-4 border-[#0A3A62] top-10 left-10 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#A5CAFF] rounded-full border-4 border-[#0A3A62] bottom-10 right-20 lg:z-auto -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#A5CAFF] border-4 border-[#0A3A62] rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#0A3A62] mb-8 text-[#0A3A62]">
            <Briefcase className="w-5 h-5 text-[#378DFF]" />
            Professional Journey
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">Experience</span>
          </h2>

          <p className="text-xl text-[#0A3A62] max-w-2xl mx-auto">17+ years of driving revenue growth and strategic partnerships</p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-32 bg-gray-300 z-0"></div>
                )}

                <div className="flex gap-8 relative z-10">
                  {/* Timeline dot */}
                  <div
                    className={`w-16 h-16 ${exp.color} border-4 border-[#0A3A62] rounded-full flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_#0A3A62]`}
                  >
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  {/* Experience card */}
                  <ExperienceCard
                    className="flex-1"
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    location={exp.location}
                    description={exp.description}
                    achievements={exp.achievements}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="text-center mt-20">
          <div className="bg-white border-4 border-[#0A3A62] rounded-2xl shadow-[8px_8px_0px_0px_#0A3A62] transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#0A3A62] hover:translate-x-[-2px] hover:translate-y-[-2px] max-w-2xl mx-auto p-8 bg-gradient-to-r from-[#378DFF] to-[#219cdb] text-white">
            <h3 className="text-3xl font-black mb-4">Let's Connect</h3>
            <p className="text-lg mb-6 opacity-90">
              Ready to discuss how my expertise in sales, business development, and strategic partnerships can drive growth for your organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="mailto:brandon.kelly@live.com"
                className="bg-white text-[#378DFF] px-8 py-4 rounded-2xl font-bold border-4 border-[#0A3A62] shadow-[4px_4px_0px_0px_#0A3A62] hover:shadow-[6px_6px_0px_0px_#0A3A62] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all inline-block"
              >
                Email: brandon.kelly@live.com
              </a>
              <a 
                href="tel:+13129339520"
                className="bg-transparent border-4 border-white text-white px-8 py-4 rounded-2xl font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all inline-block"
              >
                Phone: 312.933.9520
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
