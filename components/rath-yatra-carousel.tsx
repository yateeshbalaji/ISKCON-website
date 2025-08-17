'use client';

import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function RathYatraCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  const images = [
    {
      src: "/images/rath-yatra-1.jpg",
      alt: "Jagannath Rath Yatra",
    },
    {
      src: "/images/rath-yatra-2.jpg",
      alt: "Lord Jagannath, Balabhadra and Subhadra",
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 15000); // Change slide every 15 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 15000, stopOnInteraction: true })
  );

  return (
    <Carousel 
      className="w-full h-full" 
      setApi={setApi}
      plugins={[plugin.current]}
      opts={{
        loop: true
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex absolute left-4 z-10 bg-white/50 hover:bg-white/75" />
      <CarouselNext className="hidden md:flex absolute right-4 z-10 bg-white/50 hover:bg-white/75" />
    </Carousel>
  );
}