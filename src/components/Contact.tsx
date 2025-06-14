import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowRight } from 'lucide-react';
import StarBorder from './StarBorder';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      info: 'ydvayush27@gmail.com',
      link: 'mailto:ydvayush27@gmail.com',
      color: '#3b82f6'
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      info: '+977 9746577927',
      link: 'tel:+9779746577927',
      color: '#8b5cf6'
    },
    {
      icon: <MapPin size={28} />,
      title: 'Location',
      info: 'Janakpur, Nepal',
      link: 'https://contact-ayush.netlify.app/',
      color: '#06b6d4'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/Iush-Yadav',
      color: '#ffffff'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ayush-yadav-257a232b1/',
      color: '#0077b5'
    }
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
            <span className="text-sm font-light text-white/80">Get In Touch</span>
          </StarBorder>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight mb-8">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Let's Create
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-white">Let's Connect</h3>
              <p className="text-lg font-light text-white/60 leading-relaxed">
                I'm always interested in hearing about new opportunities and creative projects. 
                Whether you have a question or just want to say hello, I'll do my best to get back to you.
              </p>
            </div>

            {/* Contact Info Cards - Mobile Responsive */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <StarBorder
                  key={index}
                  as="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  color={item.color}
                  speed={`${6 + index}s`}
                  className="group w-full text-left"
                >
                  <div className="flex items-center p-6 lg:p-8 min-h-[120px] lg:h-32">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300 mr-4 lg:mr-6 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-white font-light text-lg lg:text-xl mb-2">{item.title}</h4>
                      <p className="text-white/70 font-light text-sm lg:text-lg break-all lg:break-words">
                        {item.info}
                      </p>
                    </div>
                    <ArrowRight size={20} className="text-white/40 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300 ml-2 lg:ml-4 flex-shrink-0" />
                  </div>
                </StarBorder>
              ))}
            </div>

            {/* Social Links with StarBorder */}
            <div className="space-y-6">
              <h4 className="text-white font-light text-lg">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <StarBorder
                    key={social.name}
                    as="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color={social.color}
                    speed={`${7 + index}s`}
                    className="group p-4"
                    title={social.name}
                  >
                    <div className="group-hover:text-blue-400 transition-colors duration-300">
                      {social.icon}
                    </div>
                  </StarBorder>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form with StarBorder */}
          <StarBorder
            as="div"
            color="#8b5cf6"
            speed="10s"
            className="w-full"
          >
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-light text-white mb-6 lg:mb-8">Send Message</h3>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                netlify
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" style={{ display: 'none' }} />

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center text-sm lg:text-base">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center text-sm lg:text-base">
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-light text-white/80">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 lg:px-4 py-3 lg:py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-white/40 transition-all duration-300 font-light text-sm lg:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-light text-white/80">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 lg:px-4 py-3 lg:py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-white/40 transition-all duration-300 font-light text-sm lg:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-light text-white/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 lg:px-4 py-3 lg:py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-white/40 transition-all duration-300 font-light text-sm lg:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-light text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 lg:px-4 py-3 lg:py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-white/40 transition-all duration-300 resize-none font-light text-sm lg:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <StarBorder
                  as="button"
                  type="submit"
                  disabled={isSubmitting}
                  color="#06b6d4"
                  speed="5s"
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3 py-2 lg:py-0">
                      <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-b-2 border-white"></div>
                      <span className="text-sm lg:text-base">Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3 py-2 lg:py-0">
                      <Send size={16} className="lg:w-5 lg:h-5" />
                      <span className="text-sm lg:text-base">Send Message</span>
                      <ArrowRight size={14} className="lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </StarBorder>
              </form>
            </div>
          </StarBorder>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;