"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Calendar, Clock, MapPin, Trophy, Mail, Linkedin, ChevronRight, Code2, X } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Autoplay from "embla-carousel-autoplay";

const pastSponsors = [
  { name: "Spheron", logo: "/spherelogo.png" },
  { name: "RiseIn", logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v97rpxhc3jddqt3ytpdf" },
  { name: "Aptos", logo: "/aptos.png" },
  { name: "Polygon Labs", logo: "https://logowik.com/content/uploads/images/polygon-matic5119.jpg" },
  { name: "Superteam", logo: "https://superteam.fun/_app/immutable/assets/superteam_footer.f45ab4df.svg" },
  { name: "UniDao", logo: "https://unidao.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Ff30ca424c3914d4cb7f71bebeab3ee37%2Fassets%2Fcover%2F928.png&w=1440&q=100" },
  { name: "Ethereum Foundation", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJN6loxqq4Bp4IxJvh_xSGg3JkwjxrlxRPbOenAMQ50mdGoyiGGi0AEwkxYlDrb6k9dso&usqp=CAU" },
  { name: "OpenBuild", logo: "https://openbuild.xyz/favicon.png" },
  { name: "DoraHacks", logo: "https://lever-client-logos.s3.us-west-2.amazonaws.com/96f741d4-2424-47ad-8ac0-fd3b5f115d6d-1655773677290.png" },
];

const schedule = [
  { time: "12:00 PM, April 19", title: "Opening Ceremony", description: "Kickoff and team formation" },
  { time: "1:00 PM", title: "Hacking Begins", description: "Start your engines!" },
  { time: "3:00 PM", title: "Workshop Session", description: "Web3 Development Workshop" },
  { time: "8:00 PM", title: "Mentorship Round", description: "One-on-one with industry experts" },
  { time: "12:00 AM, April 20", title: "Midnight Review", description: "Progress check and snacks" },
  { time: "8:00 AM", title: "Final Sprint", description: "Last push before submission" },
  { time: "11:00 AM", title: "Project Submission", description: "Submit your projects" },
  { time: "12:00 PM", title: "Closing Ceremony", description: "Presentations and winners announcement" }
];

export default function Home() {
  const plugin = Autoplay({ delay: 2000, stopOnInteraction: false });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-1">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              <span className="text-sm sm:text-xl font-bold">Hackchain</span>
            </div>
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-purple-600/20 text-sm lg:text-base"
                onClick={() => scrollToSection('details')}
              >
                Details
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-purple-600/20 text-sm lg:text-base"
                onClick={() => scrollToSection('schedule')}
              >
                Schedule
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-purple-600/20 text-sm lg:text-base"
                onClick={() => scrollToSection('sponsors')}
              >
                Sponsors
              </Button>
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-purple-600/20 text-sm lg:text-base"
                onClick={() => scrollToSection('about')}
              >
                About
              </Button>
            </div>
            <div className="flex items-center gap-1 mt-2 md:mt-0">
              <Button size="sm" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/20 text-xs sm:text-sm">
                Sponsor Us
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm">
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#4B0082"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hackchainBlue font-bold text-3xl sm:text-4xl md:text-5xl relative inline-block" style={{ fontFamily: "'NT Brick Sans',sans-serif" }}>
              HackChain 2025
            </h1>
            <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 text-green-600">
              INDIAN BLOCKCHAIN FRATERNITY'S PREMIER HACKATHON
            </p>
            <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
              <Button size="sm"  className="bg-purple-600 hover:bg-purple-700 text-xs sm:text-base">
                Register Now
              </Button>
              <Button size="sm"  variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/20 text-xs sm:text-base">
                Sponsor Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-black to-purple-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-hackchainBlue mb-8 sm:mb-12 text-center" style={{ fontFamily: "'NT Brick Sans',sans-serif" }}>Event Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-purple-900/50 p-4 sm:p-6 rounded-xl backdrop-blur-lg"
            >
              <Calendar className="w-8 h-8 sm:w-12 sm:h-12 mb-4 text-purple-400 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Date</h3>
              <p className="text-gray-300 text-center">April 19-20, 2025</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-purple-900/50 p-4 sm:p-6 rounded-xl backdrop-blur-lg"
            >
              <Clock className="w-8 h-8 sm:w-12 sm:h-12 mb-4 text-purple-400 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Duration</h3>
              <p className="text-gray-300 text-center">24 Hours</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-purple-900/50 p-4 sm:p-6 rounded-xl backdrop-blur-lg"
            >
              <MapPin className="w-8 h-8 sm:w-12 sm:h-12 mb-4 text-purple-400 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Venue</h3>
              <p className="text-gray-300 text-center">Bennett University</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-purple-900/50 p-4 sm:p-6 rounded-xl backdrop-blur-lg"
            >
              <Trophy className="w-8 h-8 sm:w-12 sm:h-12 mb-4 text-purple-400 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Prizes</h3>
              <p className="text-gray-300 text-center">Revealing Soon!</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-hackchainBlue mb-8 sm:mb-12 text-center" style={{ fontFamily: "'NT Brick Sans',sans-serif" }}>Event Schedule</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-purple-600 transform md:-translate-x-1/2"></div>
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-6 sm:mb-8 flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-8 h-8 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                </div>
                <div
                  className={`w-full pl-12 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-400">{item.time}</h3>
                  <h4 className="text-base sm:text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Sponsors Section */}
      <section id="sponsors" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-purple-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-hackchainBlue mb-4 text-center" style={{ fontFamily: "'NT Brick Sans',sans-serif" }}>Past Sponsors and Supporter</h2>
          <p className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12 text-purple-400">New sponsors revealing soon!</p>
          <Carousel className="w-full" plugins={[plugin]}>
            <CarouselContent>
              {pastSponsors.map((sponsor, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-2 sm:p-4"
                  >
                    <div className="aspect-video relative rounded-xl overflow-hidden">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <p className="p-2 sm:p-4 text-sm sm:text-lg font-semibold">{sponsor.name}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-black py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <div className="w-30 h-30 sm:w-30 sm:h-30 bg-purple-900/30 rounded-lg mb-4 flex items-center justify-center mx-auto md:mx-0">
              <img src="/ibf.png" className="w-30 h-30 rounded-md" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">Indian Blockchain Fraternity</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base text-center md:text-left">
              Leading the blockchain revolution at Bennett University. IBF is a community of innovators, developers, and blockchain enthusiasts.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-4 flex flex-col  md:items-start">
              <li>
                <Button variant="link" className="text-gray-400 hover:text-purple-400 text-sm sm:text-base">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  About IBF
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-purple-400 text-sm sm:text-base">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Past Events
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-purple-400 text-sm sm:text-base">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <a href="https://chat.whatsapp.com/GBSbc0HutJM5Ld1f5RSv3F">
                    Join Community
                  </a>
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-center md:text-left">Contact Us</h3>
            <div className="space-y-4 flex flex-col md:items-start">
              <a href="https://www.linkedin.com/company/indian-blockchain-fraternity/" className="w-full justify-start">
                <Linkedin className="w-4 h-4 mr-2" />
              </a>
              <a href="https://x.com/IBF_Community?t=33pZSiTWdG5aNDt_4xHKLQ&s=09" className="w-full justify-start ">
                <X className="w-4 h-4 mr-2" />
              </a>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.959036926862!2d77.58162287603365!3d28.450651192315856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University!5e0!3m2!1sen!2sin!4v1741680181407!5m2!1sen!2sin" 
                width="100%" 
                height="150" 
                loading="lazy" 
                className="max-w-[200px]"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}