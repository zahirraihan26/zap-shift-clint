import React, { useEffect } from "react";
import { FaTruck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Howitwork = () => {
  const steps = [
    {
      title: "Booking Pick & Drop",
      desc: "Effortlessly book your pickup and doorstep delivery with just a few clicks.",
      icon: <FaTruck />,
      delay: 100,
    },
    {
      title: "Cash On Delivery",
      desc: "Secure and reliable cash collection service at your customer's doorstep.",
      icon: <FaTruck />,
      delay: 200,
    },
    {
      title: "Delivery Hub",
      desc: "Strategically located hubs ensuring your parcels are routed with precision.",
      icon: <FaTruck />,
      delay: 300,
    },
    {
      title: "Corporate Booking",
      desc: "Tailored logistics solutions for SMEs and large-scale corporate operations.",
      icon: <FaTruck />,
      delay: 400,
    },
  ];

  return (
    <div className="py-28 bg-gradient-to-b from-white to-[#F8FAFC] rounded-[4rem] my-24 border border-gray-100 shadow-sm relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/5 text-secondary text-xs font-bold tracking-widest uppercase mb-6 border border-secondary/10">Seamless Workflow</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-secondary tracking-tight">
            Process <span className="text-gradient italic">Made Simple</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
            Experience the future of logistics with our streamlined four-step workflow designed for unmatched speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass p-10 rounded-[2.5rem] hover-lift group border border-white/50 shadow-lg shadow-gray-200/50"
              data-aos="fade-up"
              data-aos-delay={step.delay}
            >
              <div className="w-20 h-20 bg-primary/20 text-secondary rounded-[1.5rem] flex items-center justify-center text-3xl mb-10 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-inner">
                {step.icon}
              </div>
              <h3 className="font-black text-2xl mb-6 group-hover:text-primary transition-colors duration-500 tracking-tight">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-lg">{step.desc}</p>
              
              <div className="mt-12 flex items-center text-secondary font-black text-sm tracking-[0.2em] opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">
                STEP 0{index + 1}
                <div className="h-[2px] flex-1 bg-secondary/10 group-hover:bg-primary/30 mx-5 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Howitwork;
