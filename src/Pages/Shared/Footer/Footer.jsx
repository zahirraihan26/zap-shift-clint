import React from 'react';
import Logo from '../../../Components/Logo/Logo';

const Footer = () => {
    return (
        <footer className="footer bg-gradient-to-b from-[#03373D] to-[#022a2e] text-white p-12 md:p-24 rounded-t-[4rem] mt-24 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
                <aside className="max-w-sm">
                    <div className="bg-white p-4 rounded-[1.5rem] w-fit mb-8 shadow-xl shadow-black/20 hover-lift border border-white/10">
                        <Logo />
                    </div>
                    <p className="text-gray-400 leading-relaxed font-medium text-lg mb-8">
                        Zapshift Logistics Ltd.<br/>
                        Revolutionizing global delivery with lightning-fast, secure solutions. Your journey, our commitment.
                    </p>
                    <div className="flex gap-5">
                        {[1, 2, 3].map((i) => (
                            <a key={i} className="glass p-3.5 rounded-2xl hover:bg-primary hover:text-secondary transition-all duration-500 cursor-pointer border border-white/10 shadow-lg">
                                {i === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>}
                                {i === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>}
                                {i === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>}
                            </a>
                        ))}
                    </div>
                </aside>
                
                <nav>
                    <h6 className="footer-title text-primary opacity-100 mb-6 text-lg font-bold tracking-wider">Services</h6>
                    <div className="flex flex-col gap-4">
                        {['Express Delivery', 'SME Shipping', 'Cargo Solutions', 'Live Tracking'].map((item) => (
                            <a key={item} className="link link-hover text-gray-400 hover:text-primary transition-colors duration-300 font-medium">{item}</a>
                        ))}
                    </div>
                </nav>
                
                <nav>
                    <h6 className="footer-title text-primary opacity-100 mb-6 text-lg font-bold tracking-wider">Support</h6>
                    <div className="flex flex-col gap-4">
                        {['Help Center', 'Our Coverage', 'Contact Us', 'Become a Rider'].map((item) => (
                            <a key={item} className="link link-hover text-gray-400 hover:text-primary transition-colors duration-300 font-medium">{item}</a>
                        ))}
                    </div>
                </nav>
                
                <div>
                    <h6 className="footer-title text-primary opacity-100 mb-6 text-lg font-bold tracking-wider">Newsletter</h6>
                    <p className="text-gray-400 mb-6 font-medium">Join 50k+ people receiving our monthly updates.</p>
                    <div className="flex flex-col gap-3">
                        <input type="text" placeholder="your@email.com" className="input glass w-full rounded-2xl border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 transition-all" />
                        <button className="btn btn-primary w-full rounded-2xl border-none text-secondary font-bold glow-effect">Subscribe</button>
                    </div>
                </div>
            </div>
            
            <div className="w-full border-t border-white/10 pt-12 mt-16 flex flex-col md:flex-row justify-between items-center text-gray-500 font-medium">
                <p>© {new Date().getFullYear()} Zapshift Logistics. All rights reserved.</p>
                <p className="mt-6 md:mt-0 flex gap-8">
                    <span className="cursor-pointer hover:text-primary transition-colors">Privacy Policy</span>
                    <span className="cursor-pointer hover:text-primary transition-colors">Terms of Service</span>
                    <span className="cursor-pointer hover:text-primary transition-colors">Cookies</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;