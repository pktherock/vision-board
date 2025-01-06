import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Photos from "@/assets/data/photos.json";

type Photo = {
  src: string;
  alt: string;
};

const VisionBoardCarousel = () => {
  const [photos] = useState<Photo[]>(Photos);

  return (
    <Carousel
      className="w-full max-w-screen-lg"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {photos.map(({ src, alt }, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-[4/3] justify-center p-2">
                  <img
                    src={src}
                    alt={alt}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default VisionBoardCarousel;
