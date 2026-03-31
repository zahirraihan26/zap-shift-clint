import React, { useState } from "react";

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.",
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery ensuring products reach customers within 48–72 hours.",
  },
  {
    title: "Fulfillment Solution",
    desc: "We offer customized service with inventory management, online order processing & packaging support.",
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash-on-delivery service available nationwide with guaranteed product safety.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate service including warehouse & inventory management.",
  },
  {
    title: "Parcel Return",
    desc: "Return or exchange parcels through our hassle-free return logistics facility.",
  },
];

const Ourservices = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="bg-secondary p-12 md:p-24 rounded-[4rem] my-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -ml-48 -mb-48"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Solutions for <span className="text-primary italic">Every Need</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          From local deliveries to global logistics, we provide the infrastructure your business needs to grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {services.map((service, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              className={`
                p-10 rounded-[2.5rem] cursor-pointer transition-all duration-500 group
                ${isActive ? "bg-primary text-secondary scale-105 shadow-2xl rotate-1" : "bg-white/5 text-white hover:bg-white/10"}
              `}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`
                w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500
                ${isActive ? "bg-secondary text-primary rotate-12 scale-110" : "bg-white/10 group-hover:bg-primary group-hover:text-secondary group-hover:-rotate-12"}
              `}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/848/848043.png"
                  alt="icon"
                  className={`w-10 h-10 ${isActive ? "filter brightness-0 invert" : "filter brightness-0 invert-0"}`}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className={`
                text-lg leading-relaxed transition-colors duration-300
                ${isActive ? "text-secondary/80" : "text-gray-400 group-hover:text-gray-200"}
              `}>{service.desc}</p>
              
              <div className={`
                mt-8 flex items-center font-bold text-sm uppercase tracking-tighter transition-all duration-500
                ${isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}
              `}>
                Learn More <span className="ml-2">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Ourservices;
