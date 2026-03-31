import React, { useEffect } from "react";
import { FaTruck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Howitwork = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

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
    <div className="py-24 bg-gradient-to-b from-white to-gray-50/50 rounded-[3rem] my-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Process <span className="text-primary italic">Made Simple</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Experience the future of logistics with our streamlined four-step workflow designed for speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass p-8 rounded-[2rem] hover-lift group border-none"
              data-aos="fade-up"
              data-aos-delay={step.delay}
            >
              <div className="w-16 h-16 bg-primary/20 text-secondary rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              
              <div className="mt-8 flex items-center text-secondary font-bold text-sm tracking-widest opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                0{index + 1}
                <div className="h-[1px] flex-1 bg-secondary mx-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Howitwork;
