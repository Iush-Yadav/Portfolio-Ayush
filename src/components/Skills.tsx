import React, { useEffect, useState, useRef } from 'react';
import TechStack from './TechStack';
import StarBorder from './StarBorder';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      color: '#3b82f6',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      title: 'Backend',
      color: '#8b5cf6',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Javascript', level: 80 },
        { name: 'PostgreSQL', level: 70 }
      ]
    },
    {
      title: 'Tools & DevOps',
      color: '#06b6d4',
      skills: [
        { name: 'Github', level: 90 },
        { name: 'Vite', level: 80 },
        { name: 'VS Code', level: 95 }
      ]
    },
    {
      title: 'Design',
      color: '#f59e0b',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Canva', level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay to ensure the component is fully rendered
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <StarBorder 
            as="div"
            color="#06b6d4"
            speed="9s"
            className="w-fit mx-auto mb-8"
          >
            <span className="text-sm font-light text-white/80">Skills & Expertise</span>
          </StarBorder>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight mb-8">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Technical
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>
        </div>

        {/* Skills Grid with StarBorder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skillCategories.map((category, categoryIndex) => (
            <StarBorder
              key={category.title}
              as="div"
              color={category.color}
              speed={`${7 + categoryIndex * 2}s`}
              className="h-full"
            >
              <div className="p-6 h-full">
                <h3 className="text-2xl font-light text-white mb-8">{category.title}</h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 font-light">{skill.name}</span>
                        <span className="text-white/40 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 3 + skillIndex) * 150}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StarBorder>
          ))}
        </div>

        {/* Tech Stack Section */}
        <TechStack />

        {/* Additional Info */}
        <div className="mt-24 text-center">
          <p className="text-xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed">
            Continuously learning and adapting to new technologies. 
            Always excited to take on challenging projects that push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;