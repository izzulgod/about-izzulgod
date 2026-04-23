import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code, Zap, Star, Heart, Coffee } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-izzul-fahmi.jpg';
    link.download = 'CV-Izzul-Fahmi.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-80 h-56 md:h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating decorative elements with elegant animations */}
      <div className="absolute inset-0 -z-5">
        {/* Left side floating elements - elegant floating and rotating animations */}
        <div className="absolute top-20 left-2 md:left-10 animate-spin" style={{ animationDuration: '20s' }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg transition-all duration-300 hover:scale-110">
            <Code className="w-4 md:w-8 h-4 md:h-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <div className="absolute top-1/3 left-2 md:left-20 animate-pulse delay-700" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-2 md:p-3 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <Zap className="w-4 md:w-6 h-4 md:h-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-3 md:left-16" style={{ animation: 'float 4s ease-in-out infinite reverse' }}>
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-full p-2 md:p-3 shadow-md transition-all duration-300 hover:rotate-12">
            <Heart className="w-4 md:w-6 h-4 md:h-6 text-red-500" />
          </div>
        </div>
        <div className="absolute bottom-20 left-1 md:left-8 animate-pulse delay-500" style={{ animation: 'sway 8s ease-in-out infinite' }}>
          <div className="bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-xl p-2 md:p-4 backdrop-blur-sm hover:scale-110 transition-transform duration-300">
            <Coffee className="w-4 md:w-7 h-4 md:h-7 text-orange-600" />
          </div>
        </div>

        {/* Right side floating elements - elegant floating and rotating animations */}
        <div className="absolute top-16 right-4 md:right-12" style={{ animation: 'float 5s ease-in-out infinite delay-200ms' }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg transition-all duration-300 hover:scale-110">
            <Star className="w-4 md:w-8 h-4 md:h-8 text-yellow-500" />
          </div>
        </div>
        <div className="absolute top-1/2 right-8 md:right-20 animate-pulse delay-900" style={{ animation: 'drift 7s ease-in-out infinite' }}>
          <div className="bg-gradient-to-l from-green-500/20 to-blue-500/20 rounded-lg p-2 md:p-3 backdrop-blur-sm hover:rotate-45 transition-transform duration-300">
            <Sparkles className="w-4 md:w-6 h-4 md:h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-6 md:right-14" style={{ animation: 'float 6s ease-in-out infinite reverse delay-600ms' }}>
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-full p-2 md:p-3 shadow-md transition-all duration-300 hover:scale-110">
            <Zap className="w-4 md:w-6 h-4 md:h-6 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        <div className="absolute bottom-16 right-2 md:right-6 animate-pulse delay-1200" style={{ animation: 'sway 5s ease-in-out infinite reverse' }}>
          <div className="bg-gradient-to-tl from-pink-400/30 to-purple-500/30 rounded-xl p-2 md:p-4 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <Code className="w-4 md:w-7 h-4 md:h-7 text-pink-600 dark:text-pink-400" />
          </div>
        </div>

        {/* Floating particles with elegant glow effect */}
        <div className="absolute top-1/4 left-1/2 w-1 md:w-2 h-1 md:h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-1 md:w-2 h-1 md:h-2 bg-yellow-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-green-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-2/3 right-1/4 w-1 md:w-2 h-1 md:h-2 bg-pink-400 rounded-full animate-ping delay-800"></div>
      </div>

      {/* Animated geometric shapes with elegant rotation */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-12 md:w-20 h-12 md:h-20 border border-blue-300/30 dark:border-blue-600/40 md:border-2 rotate-45 animate-spin transition-colors duration-300" style={{
          animationDuration: '25s'
        }}></div>
        <div className="absolute bottom-10 right-1/4 w-10 md:w-16 h-10 md:h-16 border border-purple-300/30 dark:border-purple-600/40 md:border-2 rotate-12 animate-spin transition-colors duration-300" style={{
          animationDuration: '18s',
          animationDirection: 'reverse'
        }}></div>
        <div className="absolute top-1/2 left-4 md:left-10 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse" style={{
          animation: 'breathe 4s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/4 right-4 md:right-10 w-16 md:w-24 h-16 md:h-24 border border-dashed border-blue-300/40 dark:border-blue-600/50 rounded-full animate-spin transition-colors duration-300" style={{
          animationDuration: '30s'
        }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Greeting with icon */}
          <div className="flex items-center justify-center mb-3 md:mb-6">
            <Sparkles className="w-4 md:w-6 h-4 md:h-6 text-blue-600 dark:text-blue-400 mr-2 md:mr-3 transition-colors duration-300" />
            <span className="text-gray-600 dark:text-gray-300 font-medium text-2xl md:text-4xl transition-colors duration-300">Hello World!</span>
            <Sparkles className="w-4 md:w-6 h-4 md:h-6 text-purple-600 dark:text-purple-400 ml-2 md:ml-3 transition-colors duration-300" />
          </div>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Saya IzzulGod
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-6 md:mb-8">
            <p className="text-base md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-3 leading-relaxed transition-colors duration-300">
              Selamat datang di website buatanku {'>'}{'<'}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 md:space-x-6 mb-10 md:mb-14">
            <a href="https://github.com/IzzulGod" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100 dark:border-gray-700 flex items-center justify-center">
              <Github className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://id.linkedin.com/in/izzulgod" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100 dark:border-gray-700 flex items-center justify-center">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:contact@example.com" className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100 dark:border-gray-700 flex items-center justify-center">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://huggingface.co/IzzulGod" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100 dark:border-gray-700 flex items-center justify-center">
              <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">🤗</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button onClick={scrollToProjects} className="w-full sm:w-auto px-6 sm:px-10 py-2.5 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 group text-sm sm:text-lg max-w-44 sm:max-w-none">
              <span>Portfolio</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button onClick={downloadCV} className="w-full sm:w-auto px-6 sm:px-10 py-2.5 sm:py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-105 text-sm sm:text-lg max-w-44 sm:max-w-none">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
