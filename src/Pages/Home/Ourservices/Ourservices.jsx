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
    <div className="bg-secondary p-12 md:p-24 rounded-[4rem] my-24 relative overflow-hidden border border-white/5 shadow-2xl shadow-emerald-900/40">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -ml-48 -mb-48"></div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10" data-aos="fade-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20">Solutions Suite</span>
        <h2 className="text-4xl md:text-7xl font-black mb-8 text-white leading-[1.1]">
          Logistics for the <span className="text-gradient italic">Next Generation</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          Whether you're a local startup or a global enterprise, our intelligent delivery network is engineered for your success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {services.map((service, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              className={`
                p-12 rounded-[3rem] cursor-pointer transition-all duration-700 group border
                ${isActive ? "bg-primary text-secondary scale-[1.03] shadow-[0_30px_60px_-15px_rgba(202,235,102,0.3)] border-primary/30" : "bg-white/[0.03] text-white hover:bg-white/[0.07] border-white/10 hover:border-white/20"}
              `}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`
                w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-10 transition-all duration-700 shadow-xl
                ${isActive ? "bg-secondary text-primary rotate-[15deg] scale-110" : "bg-white/10 group-hover:bg-primary group-hover:text-secondary group-hover:-rotate-12"}
              `}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/848/848043.png"
                  alt="icon"
                  className={`w-10 h-10 transition-all duration-500 ${isActive ? "filter brightness-0 invert" : "filter brightness-0 invert group-hover:invert-0 group-hover:brightness-0"}`}
                />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">{service.title}</h3>
              <p className={`
                text-lg leading-relaxed font-medium transition-colors duration-500
                ${isActive ? "text-secondary/70" : "text-gray-400 group-hover:text-gray-200"}
              `}>{service.desc}</p>
              
              <div className={`
                mt-10 flex items-center font-black text-sm uppercase tracking-widest transition-all duration-700
                ${isActive ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}
              `}>
                Explore Solution <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Ourservices;
