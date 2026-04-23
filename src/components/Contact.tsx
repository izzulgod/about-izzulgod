import { Mail, MapPin, Phone, Send, Heart, Coffee, Code, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simulate form submission success
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih atas pesan Anda. Saya akan membalas segera.",
    });

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mari Berkolaborasi
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Punya project menarik? Mari diskusikan dan wujudkan bersama!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 transition-colors duration-300">Get In Touch</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed transition-colors duration-300">
                Saya selalu terbuka untuk membahas project baru, ide kreatif, atau kesempatan 
                untuk menjadi bagian dari visi Anda. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-2.5 md:p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg transition-colors duration-300">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white transition-colors duration-300">Email</h4>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">fahmiml666@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2.5 md:p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg transition-colors duration-300">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white transition-colors duration-300">Phone</h4>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">+62 821 4188 3598</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2.5 md:p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg transition-colors duration-300">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white transition-colors duration-300">Location</h4>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">Jawa Tengah, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 md:p-8 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Nama lengkap Anda"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Ceritakan tentang project atau ide Anda..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 md:py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <Send size={18} />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 transition-colors duration-300">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                <span className="text-sm">Crafted with</span>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <Code className="w-4 h-4 text-blue-500" />
                  <Coffee className="w-4 h-4 text-amber-600" />
                </div>
                
              </div>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>Building digital dreams since 2025</span>
                <span className="mx-2">•</span>
                <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  IzzulGod
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
