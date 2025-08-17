"use client";

import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  videoId: string;
  width?: string;
  height?: string;
};

const YoutubeIframe: React.FC<Props> = ({ videoId, width, height }) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoad(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRef.current && observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
      {load ? (
        <iframe
          width={width || "100%"}
          height={height || "315"}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div>
          <Skeleton className="h-96 w-full" />
        </div>
      )}
    </div>
  );
};

export default YoutubeIframe;
