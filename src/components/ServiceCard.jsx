import { useState } from 'react';

const ServiceCard = ({ imgURL, label, subtext }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 transition-transform duration-300 ease-in-out ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-11 h-11 flex justify-center items-center rounded-full transition-transform duration-300 ease-in-out ${isHovered ? 'bg-teal-400 scale-110' : 'bg-coral-red'}`}>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className={`mt-5 font-palanquin text-3xl leading-normal font-bold transition-colors duration-300 ease-in-out ${isHovered ? 'text-teal-600' : 'text-black'}`}>
        {label}
      </h3>
      <p className={`mt-3 break-words font-montserrat text-lg leading-normal transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-80' : 'text-slate-gray'}`}>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
