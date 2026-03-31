import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Reviewcard = ({ review }) => {
    const { userName, review: testimoneal, user_photoURL } = review;
    return (
        <div className="glass p-10 rounded-[3rem] h-full flex flex-col justify-between hover-lift border-none">
            <div>
                <FaQuoteLeft className="text-5xl text-primary/40 mb-6" />
                <p className="text-xl leading-relaxed text-secondary font-medium italic mb-8">
                    "{testimoneal}"
                </p>
            </div>

            <div className="flex items-center gap-4 border-t border-secondary/10 pt-8 mt-auto">
                <div className="avatar">
                    <div className="w-14 h-14 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user_photoURL} alt={userName} />
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-secondary text-lg">{userName}</h3>
                    <p className="text-sm text-gray-500 font-medium">Verified Customer</p>
                </div>
            </div>
        </div>
    );
};


export default Reviewcard;