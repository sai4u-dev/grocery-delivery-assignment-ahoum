import { heroBannerImage } from "@/assets/images";
import { useEffect, useState } from "react";

const banners = [heroBannerImage, heroBannerImage, heroBannerImage];

const OfferBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate first image for infinite loop
  const carouselImages = [...banners, banners[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === banners.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div
        className={`flex ${
          currentIndex === banners.length
            ? "transition-transform duration-500"
            : "transition-transform duration-500"
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`banner-${index}`}
            className="h-[140px] w-full flex-shrink-0 object-cover md:h-[220px]"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentIndex % banners.length === index
                ? "w-6 bg-[#53B175]"
                : "w-2 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;
