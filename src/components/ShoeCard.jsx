import { useState } from 'react';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 transition-transform duration-300 ease-in-out ${isHovered ? 'scale-105 border-coral-red' : 'border-transparent'}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 transition-transform duration-300 ease-in-out'>
        <img
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103.34}
          className={`object-contain transition-transform duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
