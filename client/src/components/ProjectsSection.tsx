import { Star } from "lucide-react";
import { ProjectCard, SimpleProjectCard } from "./ui/brutalist-card";

const ProjectsSection = () => {
  const achievements = [
    {
      id: "01",
      title: "City of San Francisco - $1.2M Contract",
      description:
        "Closed major wastewater treatment contract with the City of San Francisco at Fluid Analytics, demonstrating expertise in municipal utilities and AI-enabled infrastructure monitoring solutions.",
      technologies: ["Water/Wastewater", "AI Analytics", "Municipal Sales", "Infrastructure Monitoring", "Contract Negotiation"],
      bgColor: "bg-gradient-to-br from-[#378DFF] to-[#219cdb]",
      textColor: "text-white",
    },
    {
      id: "02",
      title: "Exxon Mobile - $240K Cybersecurity Deal",
      description:
        "Successfully negotiated and closed penetration testing contract with Exxon Mobile at NCC Group, showcasing ability to engage with Fortune 500 companies in the oil & gas sector.",
      technologies: ["Oil & Gas", "Cybersecurity", "Pen Testing", "C-Suite Sales", "Risk Assessment"],
      bgColor: "bg-gradient-to-br from-[#219cdb] to-[#80cfff]",
      textColor: "text-white",
    },
  ];

  const additionalAchievements = [
    {
      title: "Top 25 Revenue Ranking - Marcus Evans",
      description:
        "Consistently ranked among the top 25 sales professionals in North America for net new business revenue from 2015 to 2018, generating $717K in 2017 alone through strategic client acquisition.",
      technologies: ["Sales Leadership", "Revenue Generation", "Industrial Sector", "Strategic Partnerships"],
    },
    {
      title: "$568K Net New Revenue - Coro (2023)",
      description:
        "Generated $568,404 in net new revenue through strategic sales initiatives, conducting an average of 100 product demos per month while serving as Team Lead and training new hires.",
      technologies: ["Cybersecurity", "SaaS Sales", "Product Demos", "Team Leadership"],
    },
    {
      title: "$905K Combined Revenue - NCC Group",
      description:
        "Generated $654,242 in TOLA region oil & gas industry and $251,349 through channel prospecting campaigns, demonstrating versatility in both direct and partner sales strategies.",
      technologies: ["Oil & Gas", "Channel Sales", "Strategic Prospecting", "Partnership Development"],
    },
    {
      title: "AWWA Conference Speaker",
      description:
        "Delivered presentations as a speaker at American Water Works Association (AWWA) and other water/wastewater industry events, showcasing thought leadership and technical expertise in the sector.",
      technologies: ["Public Speaking", "Water/Wastewater", "Industry Leadership", "Technical Presentations"],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-32 h-32 bg-[#378DFF] rounded-full border-4 border-[#0A3A62] top-20 right-10 lg:z-auto -z-10"></div>
      <div className="absolute w-20 h-20 bg-[#80cfff] rounded-full border-4 border-[#0A3A62] bottom-20 left-10 lg:z-auto -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#A5CAFF] border-4 border-[#0A3A62] rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#0A3A62] mb-8 text-[#0A3A62]">
            <Star className="w-5 h-5 text-[#378DFF]" />
            Notable Wins
            <span className="text-xl">🏆</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">Key Achievements</span>
          </h2>

          <p className="text-xl text-[#0A3A62] max-w-2xl mx-auto">
            Proven track record of closing high-value deals and exceeding revenue targets
          </p>
        </div>

        {/* Featured Achievements */}
        <div className="space-y-12 mb-20">
          {achievements.map((achievement) => (
            <ProjectCard
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
              technologies={achievement.technologies}
              bgColor={achievement.bgColor}
              textColor={achievement.textColor}
              projectId={achievement.id}
              onExternalClick={() => console.log("Achievement details")}
              onGithubClick={() => console.log("Achievement details")}
            />
          ))}
        </div>

        {/* Additional Achievements */}
        <div>
          <h3 className="text-3xl font-black mb-8 text-center">
            <span className="gradient-text">More Success Stories</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalAchievements.map((achievement, index) => (
              <SimpleProjectCard
                key={index}
                title={achievement.title}
                description={achievement.description}
                technologies={achievement.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
