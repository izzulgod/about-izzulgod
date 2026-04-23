import { Code, Database, Globe, Cpu, Bot, Layers, Sparkles, Star, Heart, Coffee } from "lucide-react";

const About = () => {
  const skills = [{
    name: "Python",
    icon: Code,
    description: "PyTorch, TensorFlow, Scikit-learn",
    gradient: "from-yellow-500 to-blue-600" // Python colors
  }, {
    name: "Machine Learning",
    icon: Cpu,
    description: "Deep Learning, NLP, Computer Vision",
    gradient: "from-orange-500 to-red-600" // Neural network/brain colors
  }, {
    name: "AI/LLM",
    icon: Bot,
    description: "Transformers, Hugging Face, OpenRouter",
    gradient: "from-green-500 to-emerald-600" // AI/tech green
  }, {
    name: "Data Science",
    icon: Database,
    description: "Pandas, NumPy, Matplotlib",
    gradient: "from-indigo-500 to-purple-600" // Data/analytics colors
  }, {
    name: "MLOps",
    icon: Layers,
    description: "Docker, MLflow, Kubernetes",
    gradient: "from-cyan-500 to-blue-600" // DevOps/container colors
  }, {
    name: "Cloud & Deployment",
    icon: Globe,
    description: "AWS, GCP, FastAPI",
    gradient: "from-pink-500 to-rose-600" // Cloud/global colors
  }];

  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="w-48 h-56 md:w-64 md:h-72 relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl"></div>
                
                {/* Image container */}
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-3xl p-2 shadow-2xl transition-colors duration-300">
                  <img src="/uploads/profile.png" alt="Muhammad Izzul Fahmi Mustofa" className="w-full h-full object-cover rounded-2xl" />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-3 -right-3 w-9 h-9 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <Cpu className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-9 h-9 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <Bot className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                
                <div className="absolute top-1/2 -left-4 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                
                <div className="absolute top-1/4 -right-4 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Muhammad Izzul Fahmi Mustofa
                </h3>
                <p className="text-base md:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4 transition-colors duration-300">AI Engineer</p>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <p className="text-sm md:text-lg">Halo! Saya seorang AI Engineer yang antusias dalam mengembangkan teknologi kecerdasan buatan untuk menciptakan solusi inovatif dan berdampak nyata.</p>
                
                <p className="text-sm md:text-lg">
                  Saya percaya bahwa AI bukan hanya tentang algoritma dan data, tetapi juga tentang bagaimana teknologi ini bisa memberikan manfaat bagi masyarakat. 
                  Mari berkolaborasi dalam proyek-proyek yang bermakna dan membawa perubahan positif melalui kekuatan artificial intelligence. 🤖✨                
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 md:mt-16">
          <h4 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6 md:mb-8 text-center transition-colors duration-300">Keahlian & Teknologi</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-center p-3 md:p-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105">
                <div className={`p-2 md:p-3 bg-gradient-to-r ${skill.gradient} rounded-full mb-2 md:mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-1 md:mb-2 text-sm md:text-base transition-colors duration-300">{skill.name}</h5>
                <p className="text-gray-600 dark:text-gray-400 text-[11px] md:text-xs leading-relaxed transition-colors duration-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
