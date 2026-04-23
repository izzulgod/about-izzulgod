
import { Award, Calendar, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  
  const certificates = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI",
      date: "2025",
      description: "Spesialisasi komprehensif yang mencakup supervised learning, unsupervised learning, dan advanced learning termasuk reinforcement learning, deep learning, dan neural networks",
      image: "/cert/Cert-1.jpg",
      credentialId: "OZNGB6QFS7D1",
      skills: ["Machine Learning", "Neural Networks", "Deep Learning", "Reinforcement Learning", "Python", "Scikit-learn", "TensorFlow", "PyTorch"],
      verifyLink: "https://coursera.org/share/16ca3567ffcd486afaa09fc3198f1239"
    },
    {
      title: "Deep Learning",
      issuer: "Udemy",
      date: "2025",
      description: "Mempelajari prinsip inti, arsitektur, dan aplikasi deep learning termasuk neural networks, CNNs, RNNs, dan LSTMs. Mendapat pengalaman hands-on mengimplementasikan model dengan TensorFlow dan PyTorch untuk klasifikasi gambar, analisis sentimen, dan prediksi sequence.",
      image: "/cert/Cert-6.jpg",
      credentialId: "A982782B6",
      skills: ["Deep Learning", "Neural Networks", "Transformers", "Backpropagation", "Gradient Descent", "CNN", "RNN", "LSTM"],
      verifyLink: "https://www.udemy.com/certificate/UC-a98ba278-a2b6-48f8-9b13-71cdfe8cb24c/"
    },
    {
      title: "Practical AI for productivity",
      issuer: "Dicoding & AVPN",
      date: "2025",
      description: "Kursus yang fokus pada penggunaan AI sebagai alat produktivitas dengan penekanan pada aplikasi yang etis dan strategis. Memperoleh keterampilan praktis untuk memanfaatkan AI secara efektif guna meningkatkan efisiensi dan beradaptasi di era artificial intelligence.",
      image: "/cert/Cert-4.jpg",
      credentialId: "JLX19OWDNP72",
      skills: ["Artificial Intelligence", "AI Productivity", "Ethical AI Use", "AI Tools", "Digital Literacy"],
      verifyLink: "https://www.dicoding.com/certificates/JLX19OWDNP72"
    },
    {
      title: "AI on Microsoft Azure",
      issuer: "Microsoft",
      date: "2025",
      description: "Kursus pengantar Artificial Intelligence yang fokus pada konsep inti dan aplikasi dunia nyata menggunakan Microsoft Azure. Mempelajari cara mengimplementasikan solusi AI dengan layanan Azure termasuk machine learning, computer vision, dan natural language processing.",
      image: "/cert/Cert-3.jpg",
      credentialId: "0TR7EOHF7586",
      skills: ["Artificial Intelligence", "Microsoft Azure", "Infrastructure"],
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/0TR7EOHF7586?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
    },
    {
      title: "Machine Learning Foundations",
      issuer: "University of Washington",
      date: "2025",
      description: "Mempelajari konsep inti ML seperti supervised learning, evaluasi model, dan feature engineering melalui aplikasi praktis berbasis skenario menggunakan studi kasus dunia nyata.",
      image: "/cert/Cert-5.jpg",
      credentialId: "7RBBUBSZCQOP",
      skills: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/7RBBUBSZCQOP?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
    },
    {
      title: "Data Science",
      issuer: "Dicoding",
      date: "2025",
      description: "Pengenalan dasar-dasar data science termasuk analisis data, visualisasi, dan dasar-dasar machine learning",
      image: "/cert/Cert-2.jpg",
      credentialId: "2VX3KLL9QXYQ",
      skills: ["Excel", "Pandas", "Matplotlib", "NumPy", "Scikit-learn", "Data Analysis"],
      verifyLink: "https://www.dicoding.com/certificates/2VX3KLL9QXYQ"
    }
  ];

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(true);
    setTimeout(() => {
      const gridElement = document.querySelector('#certificates .grid');
      if (gridElement) {
        const rect = gridElement.getBoundingClientRect();
        const scrollTarget = window.scrollY + rect.bottom - window.innerHeight + 100;
        window.scrollTo({ 
          top: scrollTarget, 
          behavior: 'smooth' 
        });
      }
    }, 100);
  };

  const handleShowLess = () => {
    setShowAll(false);
    
    setTimeout(() => {
      const certificatesSection = document.querySelector('#certificates');
      if (certificatesSection) {
        const rect = certificatesSection.getBoundingClientRect();
        const scrollTarget = window.scrollY + rect.top - 100;
        window.scrollTo({ 
          top: scrollTarget, 
          behavior: 'smooth' 
        });
      }
    }, 50);
  };

  return (
    <section id="certificates" className="py-12 md:py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sertifikat & Pencapaian
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Komitmen saya untuk terus belajar dan mengembangkan kemampuan
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 transition-all duration-500 ${showAll ? 'opacity-100' : 'opacity-100'}`}>
          {displayedCertificates.map((certificate, index) => (
            <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group ${showAll && index >= 3 ? 'animate-fade-in' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 dark:bg-gray-800/90 p-1.5 md:p-2 rounded-full transition-colors duration-300">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">{certificate.title}</h3>
                <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-semibold mb-2 transition-colors duration-300">{certificate.issuer}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-xs md:text-sm leading-relaxed transition-colors duration-300">{certificate.description}</p>
                
                <div className="flex items-center space-x-2 mb-3 md:mb-4 text-gray-500 dark:text-gray-400 text-xs md:text-sm transition-colors duration-300">
                  <Calendar size={14} />
                  <span>{certificate.date}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-0.5 md:py-1 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 text-green-600 dark:text-green-400 text-[10px] md:text-xs rounded-full font-medium transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500 transition-colors duration-300">ID: {certificate.credentialId}</span>
                  <a 
                    href={certificate.verifyLink || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span className="text-xs md:text-sm">Verify</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && certificates.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              id="show-all-certificates"
              onClick={handleShowAll}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Show All Certificates</span>
              <ChevronDown size={16} className="transition-transform duration-300" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center mt-8">
            <button
              id="show-less-certificates"
              onClick={handleShowLess}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Show Less</span>
              <ChevronDown size={16} className="rotate-180 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
