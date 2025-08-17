"use client";

import useViewport from "@/app/hooks/useViewport";
import { useEffect, useState } from "react";

const FacebookWidget = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const {isMobile} = useViewport();

  const iframeWidth = isMobile ? 300 : 500;

  useEffect(() => {
    const handleIframeLoad = () => {
      setIframeLoaded(true);
    };

    const handleIframeError = () => {
      setLoadError(true);
    };

    const iframe = document.getElementById("facebookIframe");

    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
      iframe.addEventListener("error", handleIframeError);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleIframeLoad);
        iframe.removeEventListener("error", handleIframeError);
      }
    };
  }, []);

  return (
    <div className="text-center">
      {loadError ? (
        <div>Error loading Facebook widget.</div>
      ) : (
        <iframe
          id="facebookIframe"
          className="mx-auto"
          src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100072286610743&tabs=timeline&width=${iframeWidth}&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
          width={iframeWidth}
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      )}
      {!iframeLoaded && !loadError && <div>Loading...</div>}
    </div>
  );
};

export default FacebookWidget;
