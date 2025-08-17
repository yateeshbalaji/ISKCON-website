'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { heroCarouselItems } from '@/config/hero-carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full h-[250px] lg:h-screen"
      opts={{
        loop: true
      }}
    >
      <CarouselContent className="h-full">
        {heroCarouselItems.map((item, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                className="object-cover md:object-cover object-top w-full h-full"
                fill={true}
                alt={item.imageAlt}
                priority={index === 0}
              />

              <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black h-[300px] md:h-[500px] z-10 bottom-0 md:flex flex-col gap-2 justify-center items-center">
                <p className="text-white text-2xl md:text-4xl">{item.topSubtitle}</p>
                <h1 className="text-yellow-300 text-2xl md:text-6xl font-bold text-center">
                  {item.mainTitle}
                </h1>
                <p className="font-light text-xl text-yellow-100 text-center">
                  {item.bottomSubtitle}
                </p>

                {item.cta && (
                  <Link href={item.cta.href}>
                    <Button variant="outline" className="mt-4">
                      {item.cta.text}
                    </Button>
                  </Link>
                )}
              </div>

              <div className="md:hidden bg-orange-800 flex flex-col justify-center items-center text-center py-4">
                <p className="text-white text-2xl">{item.topSubtitle}</p>
                <h1 className="text-yellow-300 font-bold">{item.mainTitle}</h1>
                <p className="font-light text-xs text-white">{item.bottomSubtitle}</p>
                {item.cta && (
                  <Link href={item.cta.href}>
                    <Button variant="outline" className="mt-4">
                      {item.cta.text}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex left-4" />
      <CarouselNext className="hidden md:flex right-4" />
    </Carousel>
  );
}