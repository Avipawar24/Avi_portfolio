import React, { useEffect, useState } from "react";

export const ImageSlidder = () => {
  const images = [
    "https://d2ocdqfo0e576d.cloudfront.net/Banners/sit_festive_1440x354_iif_r2.jpg",
    "https://d2ocdqfo0e576d.cloudfront.net/Banners/sit_sc-gaming_1440x354_iif_r1.jpg",
  ];

  const [index, setindex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  const handleNext =
    () => {
      if (!isAnimate) {
        setIsAnimate(true);
        setTimeout(() => {
            setindex((pre) => (pre ===images.length-1 ? 0 : pre+1))
            setIsAnimate(false);
        }, 100);
      };
    }

      const handlePre =
      () => {
        if (!isAnimate) {
          setIsAnimate(true);
          setTimeout(() => {
              setindex((pre) => (pre === 0 ? images.length-1  : pre-1))
              setIsAnimate(false);
          }, 100);
        }
    }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transform duration-500 "
      style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((ele) => (
          <img src={ele} alt=""
          className="w-full object-cover flex-shrink-0"  />
        ))}
      </div>
            <button onClick={handlePre}
            className="absolute top-[50%] left-4 text-5xl text-white">
               <i className="ri-arrow-left-s-line"></i>
            </button>
            
            <button onClick={handleNext}
            className="absolute top-[50%] right-4 text-5xl text-white">
                <i className="ri-arrow-right-s-line"></i>
            </button>
    </div>
  );
};

export const MiniImageSlidder = () => {
  const images = [
    "https://d2ocdqfo0e576d.cloudfront.net/images/banner/website-1727175013084.jpg",
    "https://d2ocdqfo0e576d.cloudfront.net/images/banner/website-1727885631977.jpg",
  ];

  const [index, setindex] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  const handleNext =
    () => {
      if (!isAnimate) {
        setIsAnimate(true);
        setTimeout(() => {
            setindex((pre) => (pre ===images.length-1 ? 0 : pre+1))
            setIsAnimate(false);
        }, 100);
      };
    }

      const handlePre =
      () => {
        if (!isAnimate) {
          setIsAnimate(true);
          setTimeout(() => {
              setindex((pre) => (pre === 0 ? images.length-1  : pre-1))
              setIsAnimate(false);
          }, 100);
        }
    }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transform duration-500 "
      style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((ele) => (
          <img src={ele} alt=""
          className="w-full object-cover flex-shrink-0"  />
        ))}
      </div>
            <button onClick={handlePre}
            className="absolute top-[50%] left-4 text-5xl text-white">
               <i className="ri-arrow-left-s-line"></i>
            </button>
            
            <button onClick={handleNext}
            className="absolute top-[50%] right-4 text-5xl text-white">
                <i className="ri-arrow-right-s-line"></i>
            </button>
    </div>
  );
};



