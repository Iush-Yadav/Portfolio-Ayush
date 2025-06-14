import React from 'react';
import { ExternalLink, Github, ArrowRight, Code, Palette, Brain, Globe } from 'lucide-react';
import StarBorder from './StarBorder';
import Folder from './Folder';

const Projects: React.FC = () => {
  const featuredProjects = [
    {
      title: 'StartupConnect - Startup Networking and Collaboration Platform',
      description: 'A web platform where startup entrepreneurs and investors collaborate to share diverse, innovative ideas and build meaningful connections.',
      technologies: ['React', 'Typescript', 'SQL','Javascript','Supabase'],
      github: 'https://github.com/Iush-Yadav/StartupConnect',
      demo: 'https://mystartupconnect.vercel.app',
      year: '',
      category: 'Full Stack',
      color: '#3b82f6',
      icon: <Globe size={16} className="text-white" />,
      folderItems: [
        <div key="1" className="w-full h-full bg-blue-100 rounded-lg p-2 flex items-center justify-center">
          <Code size={20} className="text-blue-600" />
        </div>,
        <div key="2" className="w-full h-full bg-blue-200 rounded-lg p-2 flex items-center justify-center">
          <Globe size={18} className="text-blue-700" />
        </div>,
        <div key="3" className="w-full h-full bg-blue-300 rounded-lg p-2 flex items-center justify-center">
          <ArrowRight size={16} className="text-blue-800" />
        </div>
      ]
    },
    {
      title: 'Online exams cheat detection system',
      description: 'Invented a real-time webcam-based proctoring system for online exam sessions, leveraging eye movement analysis to reduce cheating incidents.',
      technologies: ['Python', 'Flask', 'HTML/CSS', 'OpenCV','Mediapipe'],
      github: 'https://github.com/Iush-Yadav/Online-Cheat-Detector',
      demo: '#',
      year: '',
      category: 'AI/ML',
      color: '#8b5cf6',
      icon: <Brain size={16} className="text-white" />,
      folderItems: [
        <div key="1" className="w-full h-full bg-purple-100 rounded-lg p-2 flex items-center justify-center">
          <Brain size={20} className="text-purple-600" />
        </div>,
        <div key="2" className="w-full h-full bg-purple-200 rounded-lg p-2 flex items-center justify-center">
          <Code size={18} className="text-purple-700" />
        </div>,
        <div key="3" className="w-full h-full bg-purple-300 rounded-lg p-2 flex items-center justify-center">
          <ArrowRight size={16} className="text-purple-800" />
        </div>
      ]
    },
    
  ];

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <StarBorder 
            as="div"
            color="#f59e0b"
            speed="8s"
            className="w-fit mx-auto mb-8"
          >
            <span className="text-sm font-light text-white/80">Selected Work</span>
          </StarBorder>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight mb-8">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in development, design, and problem-solving.
          </p>
        </div>

        {/* Projects List - Mobile Responsive */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <StarBorder
              key={project.title}
              as="div"
              color={project.color}
              speed={`${6 + index * 2}s`}
              className="group w-full"
            >
              {/* Mobile Layout (< lg) */}
              <div className="p-6 lg:hidden">
                {/* Mobile Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <Folder
                      color={project.color}
                      size={1}
                      items={project.folderItems}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-light text-white/40 bg-white/5 px-2 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-light text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Mobile Description */}
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Mobile Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 text-white/70 rounded-full text-xs font-light border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col space-y-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-center space-x-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white/60 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm font-light">View Code</span>
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center space-x-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white/60 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-light">Live Demo</span>
                      <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Desktop Layout (lg+) */}
              <div className="hidden lg:flex p-8 h-80">
                {/* Left Side - Folder */}
                <div className="flex-shrink-0 mr-8 flex items-center justify-center">
                  <Folder
                    color={project.color}
                    size={1.5}
                    items={project.folderItems}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Center - Project Content */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  
                  {/* Project Header */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-xs font-light text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {project.year}
                      </span>
                      <span className="text-xs font-light text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-light text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 text-white/70 rounded-full text-sm font-light border border-white/10 hover:bg-white/10 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Side - Project Links */}
                <div className="flex-shrink-0 ml-8 flex flex-col justify-center space-y-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-center space-x-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white/60 hover:text-white transition-all duration-300 min-w-[140px]"
                  >
                    <Github size={18} />
                    <span className="text-sm font-light">View Code</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center space-x-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white/60 hover:text-white transition-all duration-300 min-w-[140px]"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-light">Live Demo</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>
            </StarBorder>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="text-center">
          <StarBorder
            as="div"
            color="#10b981"
            speed="7s"
            className="w-fit mx-auto mb-8"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg font-light">More Projects Coming Soon</span>
              <ArrowRight size={20} className="animate-pulse" />
            </div>
          </StarBorder>
          
          <p className="text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            I'm constantly working on new projects and exploring innovative solutions. 
            Check back soon for more exciting work!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;