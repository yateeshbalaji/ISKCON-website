import OfflinePayment from "@/components/offline-payment";
import PageHeader from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  {
    src: "/images/jagannath_deity.jpg",
    alt: "Deity Worship",
  },
];

const DeityWorshipPage = () => {
  return (
    <main className="">
      <PageHeader className="bg-violet-50 h-[auto] md:h-[auto] py-16 md:px-16 text-center">
        <div className="container">
          <h1 className="text-xl md:text-3xl font-semibold text-gray-600">
            Deity Worship at Iskcon Asansol
          </h1>
        </div>
      </PageHeader>
      <div className="container mx-auto py-16 ">
        <h2 className="text-2xl my-2 text-center font-semibold ">
          Inside our temple
        </h2>
        <div className="relative">
          {/* images gallery */}
          <Carousel className="">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="h-[300px] lg:h-[300px] relative">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="py-32">
          <OfflinePayment />
        </div>
      </div>
    </main>
  );
};

export default DeityWorshipPage;
