import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import ProfileCard from './ProfileCard';
import StarBorder from './StarBorder';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Frontend Developer',
    'UI/UX Designer', 
    'AI/ML Enthusiast',
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[currentIndex];

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentTitle.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, titles]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-start relative px-6 pt-24 pb-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-left lg:pt-8">
            <div className="space-y-6">
              <StarBorder 
                as="div"
                color="#3b82f6"
                speed="8s"
                className="w-fit"
              >
                <span className="text-sm font-light text-white/80">Available for new opportunities</span>
              </StarBorder>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Ayush Yadav
                </span>
              </h1>
              
              <div className="h-12 flex items-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/70">
                  {displayText}
                  <span className="animate-pulse text-blue-400 ml-1">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg sm:text-xl font-light text-white/60 max-w-2xl leading-relaxed">
              Crafting digital experiences that blend innovation with elegance. 
              Specialized in modern web technologies and user-centered design.
            </p>

            {/* CTA Buttons with StarBorder */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <StarBorder
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                color="#8b5cf6"
                speed="6s"
                className="group"
              >
                <div className="flex items-center space-x-3">
                  <span>View My Work</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </StarBorder>
              
              <StarBorder
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                color="#06b6d4"
                speed="7s"
                className="group"
              >
                <span>Get In Touch</span>
              </StarBorder>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/Iush-Yadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
              >
                <Github size={20} className="group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-yadav-257a232b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a
                href="mailto:ydvayush27@gmail.com"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
              >
                <Mail size={20} className="group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <ProfileCard
                avatarUrl="/image.png"
                name=""
                title=""
                handle="Iush"
                status="Available for work"
                contactText="Contact"
                onContactClick={handleContactClick}
                enableTilt={true}
                showUserInfo={true}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Positioned at bottom */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center space-y-3 text-white/40 hover:text-white/70 transition-all duration-300"
          >
            <span className="text-sm font-light tracking-wide">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"></div>
            <ChevronDown 
              size={18} 
              className="animate-bounce group-hover:text-blue-400 transition-colors duration-300" 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;