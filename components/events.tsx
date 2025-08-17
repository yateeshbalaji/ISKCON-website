'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay";

const upcomingEvents = [
  {
    name: "Jagannath Snana Yatra 2024",
    description: ` <p>
    22nd June, 2024 at Jagannath Temple, Garui, Asansol</p>`,
    image: "/images/jagannath.svg",
    link: "/festivals/jagannath-snana-yatra",
    className: "bg-teal-50",
  },
  {
    name: "Ratha Yatra 2024",
    description: ` <p>
    7th - 15th July, 2024, Budha Ground, Asansol </p>`,
    image: "/images/temple.svg",
    link: "/festivals/rath-yatra",
    className: "bg-orange-50",
  },
];

const Events = () => {
  return (
    <section>
      <div className="container py-4 px-16">
        <h1 className="text-xl md:text-4xl font-semibold text-slate-600 text-center">
          Upcoming Events
        </h1>
        <div className="text-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full mx-auto mt-12"
          >
            <CarouselContent>
              {upcomingEvents.map((event, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className={cn(event.className)}>
                    <Card className={cn(event.name)}>
                      <CardContent
                        className={cn(
                          "flex aspect-square items-center justify-center p-6 md:h-[250px] w-full",
                          event.className
                        )}
                      >
                        <Link
                          href={event.link}
                          className="flex flex-col items-center justify-center w-full h-full"
                        >
                          <div className="flex flex-col sm:flex-row gap-0 md:gap-4 items-center justify-between">
                            <div className="w-1/2 md:w-1/4">
                              <Image
                                src={event.image}
                                alt={event.name}
                                width={200}
                                height={200}
                                className="object-contain p-4"
                              />
                            </div>
                            <div className="w-3/4 text-left h-full flex flex-col gap-4 justify-center">
                              <h2 className="text-xs md:text-lg font-semibold text-gray-600 md:mt-4">
                                {event.name}
                              </h2>
                              <div
                                className="text-xs md:text-sm text-gray-500 max-w-md"
                                dangerouslySetInnerHTML={{
                                  __html: event.description,
                                }}
                              ></div>
                            </div>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <Button className="mt-8 rounded-full">
            <Link href="/festivals">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Events;
