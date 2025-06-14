import React from 'react';
import { Code, Palette, Lightbulb, Users, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import StarBorder from './StarBorder';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={28} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions that stand the test of time.',
      color: '#3b82f6'
    },
    {
      icon: <Palette size={28} />,
      title: 'Design Focus',
      description: 'Creating beautiful interfaces that provide exceptional user experiences.',
      color: '#8b5cf6'
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Innovation',
      description: 'Always exploring new technologies to solve complex problems.',
      color: '#06b6d4'
    },
    {
      icon: <Users size={28} />,
      title: 'Collaboration',
      description: 'Working with teams to deliver projects that exceed expectations.',
      color: '#f59e0b'
    }
  ];

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <StarBorder 
            as="div"
            color="#8b5cf6"
            speed="10s"
            className="w-fit mx-auto mb-8"
          >
            <span className="text-sm font-light text-white/80">About Me</span>
          </StarBorder>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight mb-8">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Passionate About
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Craft
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Optimized Animated Content */}
          <div className="space-y-12 text-center">
            <ScrollReveal
              containerClassName="mb-12"
              textClassName="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent font-light"
              baseOpacity={0.4}
              baseRotation={0.5}
              enableBlur={false}
            >
              Hi! I'm Ayush Yadav, a Computer Science and Engineering undergraduate with a strong passion for coding, creativity, and solving real-world problems through tech.
            </ScrollReveal>

            <ScrollReveal
              containerClassName="mb-12"
              textClassName="text-white/70 font-light text-xl"
              baseOpacity={0.3}
              baseRotation={0.3}
              enableBlur={false}
            >
              I love building things—from responsive frontends to smart AI/ML solutions. My interests lie at the intersection of design and development, where I enjoy crafting user-friendly web apps that not only work great but also look great. Whether it’s designing sleek interfaces or experimenting with machine learning models, I’m always eager to learn and explore.
            </ScrollReveal>

            <ScrollReveal
              containerClassName="mb-12"
              textClassName="text-white/60 font-light text-lg"
              baseOpacity={0.2}
              baseRotation={0.2}
              enableBlur={false}
            >
             I’m also a big believer in giving back—whether it's through open-source contributions or helping fellow students grow.
            </ScrollReveal>

            <ScrollReveal
              containerClassName="mb-16"
              textClassName="text-white/50 font-light"
              baseOpacity={0.2}
              baseRotation={0.1}
              enableBlur={false}
            >
              "Great code is invisible. Great design is unforgettable."
            </ScrollReveal>

            {/* Skills Tags with StarBorder */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['React', 'Python', 'UI/UX', 'Designing','AI/ML'].map((tech, index) => (
                <StarBorder
                  key={tech}
                  as="div"
                  color={['#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b', '#10b981', '#ef4444'][index % 6]}
                  speed={`${6 + index}s`}
                  className="text-sm"
                >
                  {tech}
                </StarBorder>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <StarBorder
                onClick={handleContactClick}
                color="#06b6d4"
                speed="8s"
                className="group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-light">Let's work together</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </StarBorder>
            </div>
          </div>
        </div>

        {/* Highlights Grid with StarBorder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {highlights.map((item, index) => (
            <StarBorder
              key={index}
              as="div"
              color={item.color}
              speed={`${8 + index * 2}s`}
              className="group h-full"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-light mb-4 text-white">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed flex-grow">{item.description}</p>
              </div>
            </StarBorder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;